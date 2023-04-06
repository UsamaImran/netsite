import { AlertWrapped } from "../components/shared/Alerts/AlertWrapped";
import { Login } from "./login/Login";

interface IAuthenticatedAccountErrorRoutesProps {
  login: (username: string, password: string) => void;
}

export const AuthenticatedAccountErrorRoutes: React.FC<IAuthenticatedAccountErrorRoutesProps> = ({
  login,
}) => {
  return (
    <>
      <AlertWrapped
        header="An Error Occurred"
        text="We could not authenticate you, please contact your program administrator."
        bgStyle="danger"
        textColor="white"
      />
      <Login login={login} />
    </>
  );
};
