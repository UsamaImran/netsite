import React from "react";
import { AccountContext, reduceAccountInfo } from "../contexts/AccountContext";
import { ApolloProvider } from "@apollo/client";
import { Routes } from "../routing/Routes";
import { getApolloClient } from "../utilities/apollo.client";
import { IAccountInfo } from "./Authentication";

interface IAuthenticatedAccountInfodRoutesProps {
  accountInfo: IAccountInfo;
  logout: () => void;
}

export const AuthenticatedAccountInfoRoutes: React.FC<IAuthenticatedAccountInfodRoutesProps> = ({
  accountInfo,
  logout,
}) => {
  return (
    <React.StrictMode>
      <AccountContext.Provider value={reduceAccountInfo(accountInfo, logout)}>
        <ApolloProvider client={getApolloClient()}>
          <Routes />
        </ApolloProvider>
      </AccountContext.Provider>
    </React.StrictMode>
  );
};
