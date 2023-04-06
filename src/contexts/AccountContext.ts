import { createContext, useContext } from "react";
import { IAccountInfo } from "../authentication/Authentication";
import { AuthorizationRoles } from "../authentication/AuthorizationRoles";

export class Account{
  constructor(name:string, userName:string, userId:string, clientPermissions:IClientPermissions[], permissions?:{[key:string]:string}){
    this.userId = userId
    this.name = name;
    this.userName = userName;
    this.permissions = permissions;
    this.clientPermissions = clientPermissions;
  }
  userId:string;
  name:string;
  userName:string;
  clientPermissions:IClientPermissions[];
  permissions?:{[key:string]:string};
}

export interface IClientPermissions {
  clientId:string;
  clientMasterId:string;
  clientSiteId:string;
  recordKey:string;
}

export interface IUserInfo{
  name:string,
  userName:string,
  userId: string,
  clientPermissions:IClientPermissions[],
  GetClientIds: () => string[],
  GetClientMasterIds: () => string[],
  GetClientSiteIds: () => string[],
  AuthorizeRoute: (routeRoles:AuthorizationRoles[]) => boolean;
  Logout: ()=>void;
}

export class UserInfo implements IUserInfo{
  constructor(accountInfo:IAccountInfo, logout:() => void){
    this.userId = accountInfo.account.userId;
    this.name = accountInfo.account.name;
    this.userName = accountInfo.account.userName;
    this.clientPermissions= accountInfo.account.clientPermissions;
    this.Logout = logout;
  }
  userId: string;
  name:string;
  userName:string;
  clientPermissions:IClientPermissions[]
  //roles:string[];
  //isAdmin:boolean;
  Logout: () => void;
  GetClientIds = () => {
    return this.clientPermissions.filter(permission=>permission.clientId)?.map((permission) => permission.clientId) || [];
  }
  GetClientMasterIds = () => {
    return this.clientPermissions.filter(permission=>permission.clientMasterId)?.map(permission=>permission.clientMasterId) || [];
  }
  GetClientSiteIds = () => {
    return this.clientPermissions.filter(permission=>permission.clientSiteId)?.map(permission=>permission.clientSiteId) || [];
  }
  AuthorizeRoute = (routeRoles:AuthorizationRoles[]) => {
    const matchedRoles = []//routeRoles.filter(x=>this.roles.indexOf(x)>=0);
    return matchedRoles.length > 0;
  } 
}

export const AccountContext = createContext({} as IUserInfo);

export function useAccountContext() {
  return useContext(AccountContext);
}

export const reduceAccountInfo = (accountInfo:IAccountInfo, logout:()=>void) =>{
  return new UserInfo(accountInfo, logout);
}