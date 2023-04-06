import { Route, Redirect, Switch } from "react-router-dom";
// import { AlertWrapped } from "../../components/shared/Alerts/AlertWrapped";
import { Unauthorized } from "./Unauthorized";
import { AuthError } from "../Authentication";
import { Login } from "../login/Login";
import { Index as TopBar } from "../../components/shared/Layout/topMenu/Index";
import { ResetPassword } from "../../components/pages/resetPassword/Index";

interface IUnauthorizedRoutesProps {
  login: (username: string, password: string) => void;
  error: AuthError | null;
}

export const UnauthorizedRoutes: React.FC<IUnauthorizedRoutesProps> = ({
  login,
  error,
}) => {
  return (
    <>
      {/* {error && (
        <AlertWrapped
          header=""
          text={error.message}
          bgStyle="danger"
          textColor="white"
        />
      )} */}
      <Switch>
        <Route path="/login">
          <>
            <TopBar />
            <Login login={login} error={error} />
          </>
        </Route>
        <Route path="/unauthorized">
          <>
            <TopBar></TopBar>
            <Unauthorized />
          </>
        </Route>
        <Route path="/reset/:token">
          <>
            <TopBar></TopBar>
            <ResetPassword />
          </>
        </Route>
        <Route path="*">
          <Redirect to="/login" />
        </Route>
      </Switch>
    </>
  );
};
