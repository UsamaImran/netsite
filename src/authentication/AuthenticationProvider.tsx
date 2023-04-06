import { Authentication, IAuthenticationFunctionProps } from "./Authentication";
import { AuthenticationState } from "./authenticationState";
import { PassPortProvider } from "./PassportProvider";
import { CenteredSpinner } from "../components/shared/Spinners";
import { BrowserRouter } from "react-router-dom";
import { AuthenticatedAccountInfoRoutes } from "./AuthenticatedAccountInfoRoutes";
import { AuthenticatedAccountErrorRoutes } from "./AuthenticatedAccountErrorRoutes";
import { UnauthorizedRoutes } from "./unauthorized/UnauthorizedRoutes";

interface IAuthenticationProviderProps {}

export const AuthenticationProvider: React.FC<IAuthenticationProviderProps> = (
  props
) => {
  return (
    <BrowserRouter>
      <Authentication provider={new PassPortProvider()}>
        {({
          login,
          logout,
          authenticationState,
          error,
          accountInfo,
        }: IAuthenticationFunctionProps) => {
          switch (authenticationState) {
            case AuthenticationState.Authenticated:
              if (accountInfo?.account) {
                return (
                  <AuthenticatedAccountInfoRoutes
                    accountInfo={accountInfo}
                    logout={logout}
                  />
                );
              }
              return <AuthenticatedAccountErrorRoutes login={login} />;
            case AuthenticationState.Unauthenticated:
              return <UnauthorizedRoutes login={login} error={error} />;
            case AuthenticationState.InProgress:
              return (
                <CenteredSpinner
                  loading={true}
                  size="lg"
                  loadingText="Authenticating..."
                />
              );
          }
        }}
      </Authentication>
    </BrowserRouter>
  );
};
