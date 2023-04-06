import * as React from 'react';
import { useCallback, useMemo, useState } from 'react';
import { AuthenticationState } from './authenticationState';
import { Account } from '../contexts/AccountContext';
import { useOnce } from '../utilities/UseOnce';


export interface IAuthProvider {
  onAuthenticationStateChanged?: (state: AuthenticationState, account?: IAccountInfo) => void;
  authenticationState: AuthenticationState;

  getAccountInfo(): IAccountInfo | null;
  login(username:string, password:string): void;
  logout(): void;
  getError(): AuthError | null;
  validateExistingToken():void;
}

interface IAuthenticationProps {
  provider: IAuthProvider;
  forceLogin?: boolean;
}

type LoginFunction = (username:string, password:string) => void;
type LogoutFunction = () => void;
type ValidateExistingTokenFunction = () => void;

export interface IAccountInfo {
  account: Account;
}

export interface AuthError {
  message:string,
  details:object
}

export interface IAuthenticationFunctionProps {
  login: LoginFunction;
  logout: LogoutFunction;
  validateExistingToken:ValidateExistingTokenFunction;
  authenticationState: AuthenticationState;
  accountInfo: IAccountInfo | null;
  error: AuthError | null;
}

export const Authentication:React.FC<IAuthenticationProps> = (props) => {

  const {provider} = props;
  const [accountInfo, _setAccountInfo] = useState(provider?.getAccountInfo());
  const [authenticationState, _setAuthenticationState] = useState(provider.authenticationState);
  const [error, _setError] = useState(provider.getError());

  const login = useCallback(async(username:string, password:string) => {
    _setAuthenticationState(AuthenticationState.InProgress);
    await provider.login(username, password);
    _setAuthenticationState(provider.authenticationState);
    _setError(provider.getError());
    _setAccountInfo(provider.getAccountInfo())
  }, [provider]);

  const logout = useCallback(() => {
    provider.logout();
    _setAuthenticationState(provider.authenticationState);
    _setError(provider.getError());
    _setAccountInfo(provider.getAccountInfo());
  }, [provider]);

  const validateExistingToken = useCallback(async ()=>{
    _setAuthenticationState(AuthenticationState.InProgress);
    await provider.validateExistingToken();
    _setAuthenticationState(provider.authenticationState);
    _setError(provider.getError());
    _setAccountInfo(provider.getAccountInfo());
  }, [provider])

  const childrenFunctionProps = useMemo<IAuthenticationFunctionProps>(
    () => ({
      accountInfo,
      authenticationState,
      error,
      login,
      logout,
      validateExistingToken
    }),
    [accountInfo, authenticationState, error, login, logout,validateExistingToken],
  );

  useOnce(()=>{
    validateExistingToken();
  })

  function getChildrenOrFunction(children: any, childrenProps: IAuthenticationFunctionProps) {
    if (children) {
      if (isChildrenFunction(children)) {
        return (children as (props: IAuthenticationFunctionProps) => {})(childrenProps);
      } else {
        return children;
      }
    } else {
      return null;
    }
  }

  function isChildrenFunction(children: any) {
    return typeof children == 'function' || false;
  }

  if (isChildrenFunction(props.children)) {
    // check if token exists in provider
    return getChildrenOrFunction(props.children, childrenFunctionProps);
  } else{
    return null;
  }
}
