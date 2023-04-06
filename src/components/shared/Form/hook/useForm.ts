import { useState } from "react";
import { useMutation } from "@apollo/client";
import * as yup from "yup";
import { FormikErrors, FormikTouched, useFormik } from "formik";
import { IUserForm } from "../../../../types/user-form.interface";
import { UserDetail_users_nodes } from "../../../../generated/UserDetail";
import {
  USER_DETAIL_QUERY,
  USER_DETAIL_MUTATION,
} from "../../../pages/account/query";
import { useAccountContext } from "../../../../contexts/AccountContext";
import { UserDetailMutation } from "../../../../generated/UserDetailMutation";

interface ITypesUserForm {
  values: IUserForm;
  errors: FormikErrors<IUserForm>;
  handleChange: React.ChangeEventHandler<HTMLInputElement>;
  handleSubmit: () => void;
  disabled: boolean;
  handleToggleForm: () => void;
  touched: FormikTouched<IUserForm>;
}

const emptyUserForm: IUserForm = {
  firstName: "",
  middleInitial: "",
  lastName: "",
  password: "",
  confirmedPassword: "",
  addressLine1: "",
  addressLine2: "",
  city: "",
  state: "",
  zip: "",
  phoneNumber: "",
  mobileNumber: "",
  eMailAddress: "",
};

export const useForm = (User?: UserDetail_users_nodes): ITypesUserForm => {
  const { userId } = useAccountContext();
  const [disabled, setDisabled] = useState<boolean>(true);

  const [upsertUsers] = useMutation<UserDetailMutation>(USER_DETAIL_MUTATION);

  const handleSubmit = async (values: IUserForm) => {
    try {
      const formattedValues = Object.fromEntries(
        Object.entries(values).filter(
          ([key, _]) => !["confirmedPassword", "__typename"].includes(key)
        )
      );
      await upsertUsers({
        variables: {
          user: { userId: +userId, ...formattedValues },
        },
        refetchQueries: [
          {
            query: USER_DETAIL_QUERY,
            variables: {
              where: { userId: +userId },
            },
          },
        ],
      });
      setDisabled(!disabled);
    } catch (error) {
      console.log(error);
    }
  };

  const schema = yup.object().shape({
    firstName: yup
      .string()
      .max(50, "Too Long!")
      .required("First Name is required"),
    middleInitial: yup.string().max(2, "Too Long!").nullable(),
    lastName: yup
      .string()
      .max(50, "Too Long!")
      .required("Last Name is required"),
    password: yup.string().max(15).required("Password is required"),
    confirmedPassword: yup
      .string()
      .max(15, "Must not be more than 15 characters")
      .oneOf([yup.ref("password")], "Mismatched passwords")
      .required("Please confirm your password"),
    addressLine1: yup.string().max(50, "Too Long!").required("Required"),
    addressLine2: yup.string().max(50, "Too Long!").nullable(),
    city: yup.string().max(50, "Too Long!").required(),
    state: yup.string().max(2).required("State is required"),
    zip: yup.string().max(10, "Too Long!").required("Required"),
    phoneNumber: yup.string().max(50, "Too Long").required("Required"),
    mobileNumber: yup.string().max(50, "Too Long!").nullable(),
    eMailAddress: yup
      .string()
      .max(200, "Too Long!")
      .email("Invalid email")
      .required("Email is required"),
  });

  const formik = useFormik<IUserForm>({
    initialValues: User
      ? { ...User, confirmedPassword: User?.password }
      : emptyUserForm,
    validationSchema: schema,
    onSubmit: handleSubmit,
    enableReinitialize: true,
  });

  const handleToggleForm = () => {
    setDisabled(!disabled);
    formik.resetForm();
  };

  return {
    values: formik.values,
    errors: formik.errors,
    handleChange: formik.handleChange,
    handleSubmit: formik.handleSubmit,
    disabled,
    handleToggleForm,
    touched: formik.touched,
  };
};
