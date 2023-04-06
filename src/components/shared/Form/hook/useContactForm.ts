import * as yup from "yup";
import { FormikErrors, FormikTouched, useFormik } from "formik";
import { IContactForm } from "../../../../types/contact-form.interface";

interface ITypesContactForm {
    values: IContactForm;
    errors: FormikErrors<IContactForm>;
    handleChange: React.ChangeEventHandler<HTMLInputElement>;
    handleSubmit: () => void;
    handleToggleForm: () => void;
    touched: FormikTouched<IContactForm>;
}

const emptyContactForm: IContactForm = {
    name: "",
    email: "",
    subject: "",
    message: ""
};

export const useContactForm = (): ITypesContactForm => {
    const handleSubmit = async (values: IContactForm) => {
        try {

        } catch (error) {
            console.log(error);
        }
    };

    const schema = yup.object().shape({
        name: yup
            .string()
            .required("Name is required"),
        subject: yup.string().max(200, "Too Long!").required("Subject is required"),
        email: yup
            .string()
            .max(200, "Too Long!")
            .email("Invalid email")
            .required("Email is required"),
        message: yup.string().max(500, "Too Long!").required("Message is required"),
    });

    const formik = useFormik<IContactForm>({
        initialValues: emptyContactForm,
        validationSchema: schema,
        onSubmit: handleSubmit,
        enableReinitialize: true,
    });

    const handleToggleForm = () => {
        formik.resetForm();
    };

    return {
        values: formik.values,
        errors: formik.errors,
        handleChange: formik.handleChange,
        handleSubmit: formik.handleSubmit,
        handleToggleForm,
        touched: formik.touched,
    };
};
