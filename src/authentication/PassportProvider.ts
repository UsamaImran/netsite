import { ApiPostRequest, ApiPostRequestWithToken } from "../services/fetchService";
import { AuthError, IAccountInfo, IAuthProvider } from "./Authentication";
import { AuthenticationState } from "./authenticationState";
import { Account } from "../contexts/AccountContext";

export interface PassportResponse{
    status:string
}

export interface PassportError {
    message:string
}

export interface PassportErrorResponse extends PassportResponse {
    error: PassportError
}

export interface PassportUser {
    allowDocType2:string;
    allowDocType3:string;
    allowDocType4:string;
    allowDocType5:string;
    allowDocType6:string;
    allowDocType7:string;
    allowDocType8:string;
    allowEmail:string;
    allowInspectionReport:string;
    allowInventoryReport:string;
    allowNetAdmin:string;
    clientCanViewAllSites:string;
    clientId:string;
    eMailAddress:string;
    firstName:string;
    lastName:string;
    loginId:string;
    odoo_partner_id:string;
    odoo_tech_Id:string;
    organizationId:string;
    userId:string;
    userStatusId:string;
    userTypeId:string;
    permissions:ClientPermissions[];
}

export interface ClientPermissions {
    clientId:string;
    clientMasterId:string;
    clientSiteId:string;
    recordKey:string;
}

export interface PassportData {
    user:PassportUser
}

export interface PassportSuccessResponse extends PassportResponse {
    data:PassportData,
    token: string
}

export interface ILoginArgs{
    username:string,
    password:string
}

export class PassPortProvider implements IAuthProvider {

    private _error?:PassportErrorResponse;
    private _user?:PassportUser;
    authenticationState: AuthenticationState = AuthenticationState.Unauthenticated;

    onAuthenticationStateChanged?: ((state: AuthenticationState, account?: IAccountInfo | undefined) => void) | undefined;

    getPermissions():{[key:string]:string}|undefined  {
        if(this._user){
            let permissions:{[key:string]:string} = {
                allowDocType2:this._user?.allowDocType2,
                allowDocType3:this._user?.allowDocType3,
                allowDocType4:this._user?.allowDocType4,
                allowDocType5:this._user?.allowDocType5,
                allowDocType6:this._user?.allowDocType6,
                allowDocType7:this._user?.allowDocType7,
                allowDocType8:this._user?.allowDocType8,
                allowEmail:this._user?.allowEmail,
                allowInspectionReport:this._user?.allowInspectionReport,
                allowInventoryReport:this._user?.allowInventoryReport,
                allowNetAdmin:this._user?.allowNetAdmin,
                clientCanViewAllSites:this._user?.clientCanViewAllSites
            }
            return permissions;
        }
        return undefined;
    }
    
    getAccountInfo(): IAccountInfo | null {
        if(this._user){
            let userId = this._user.userId;
            let userName = this._user.loginId;
            let name = `${this._user.firstName} ${this._user?.lastName}`;
            let clientPermissions = this._user.permissions
            let permissions = this.getPermissions();
            let account = new Account(name, userName, userId, clientPermissions, permissions);
            let accountInfo : IAccountInfo = {
                account: account,
                //jwtAccessToken: this._token
            }
            return accountInfo
        }

        return null;
    }

    async login(username:string, password:string): Promise<void>{

        let url = process.env.REACT_APP_LOGIN_URL;
        let loginArgs:ILoginArgs = {
            username,
            password
        }
        let body = JSON.stringify(loginArgs);
        return await new ApiPostRequest(url, body).Invoke()
        .then(result=>result.json())
        .then((response:PassportResponse)=>{
            if(response.status === "success"){
                let successResponse = response as PassportSuccessResponse;
                //this._token = successResponse.token;
                sessionStorage.setItem(process.env.REACT_APP_SESSION_TOKEN_KEY, successResponse.token);
                this._error = undefined;
                this._user = successResponse.data.user
                this.authenticationState = AuthenticationState.Authenticated;
            }else{

                this.authenticationState = AuthenticationState.Unauthenticated;
                this._error = response as PassportErrorResponse;
            }
        })
        .catch((error)=>{
            this.authenticationState = AuthenticationState.Unauthenticated
            this._error = {
                status:"Unknown Error",
                error:{
                    message: "An Unknown error occurred. Please contact support"
                }
            }
        });
    }

    async validateExistingToken(): Promise<void>{
        let token  = sessionStorage.getItem(process.env.REACT_APP_SESSION_TOKEN_KEY);

        if(token){
            let url = process.env.REACT_APP_VALIDATE_TOKEN_URL;
            let body = "";
            return await new ApiPostRequestWithToken(url, body).Invoke()
            .then(result=>result.json())
            .then((response:PassportResponse)=>{
                if(response.status === "success"){
                    let successResponse = response as PassportSuccessResponse;
                    sessionStorage.setItem(process.env.REACT_APP_SESSION_TOKEN_KEY, successResponse.token);
                    this._error = undefined;
                    this._user = successResponse.data.user
                    this.authenticationState = AuthenticationState.Authenticated;
                }else{
    
                    this.authenticationState = AuthenticationState.Unauthenticated;
                    this._error = response as PassportErrorResponse;
                }
            })
        } else {
            this._error = undefined;
            this._user = undefined;
            this.authenticationState = AuthenticationState.Unauthenticated;
        }
    }

    logout(): void {
        sessionStorage.removeItem(process.env.REACT_APP_SESSION_TOKEN_KEY);
        this._user = undefined;
        this._error = undefined;
        this.authenticationState = AuthenticationState.Unauthenticated;
    }
    getError(): AuthError | null {
        if(this._error){
            return {
                details:this._error,
                message:this._error.error.message
            }
        }
        return null;
    }

}