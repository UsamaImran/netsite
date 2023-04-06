export interface FetchOptions {
    [key: string]: any | string;
    method?: "GET" | "POST" | "DELETE" | "PATCH" | "PUT" | "HEAD" | "OPTIONS" | "CONNECT";
    headers?: any;
    body?: any;
    mode?: "cors" | "no-cors" | "same-origin";
    credentials?: "omit" | "same-origin" | "include";
    cache?: "default" | "no-store" | "reload" | "no-cache" | "force-cache" | "only-if-cached";
    redirect?: "follow" | "error" | "manual";
    referrer?: string;
    referrerPolicy?: "no-referrer" | "same-origin" | "strict-origin" | "referrer" | "no-referrer-when-downgrade" | "origin" | "origin-when-cross-origin" | "strict-origin-when-cross-origin" | "unsafe-url";
    integrity?: any;
}

export abstract class FetchApiRequest {
    readonly URL: string;
    readonly Method: string;
    readonly Request: RequestInit;
    readonly Body?: string;

    constructor(url: string, method: string, body?: string) {
        this.URL = url;
        this.Method = method;
        this.Body = body;
        this.Request = this.GenerateRequest()
    }
    public Invoke(): Promise<Response> {
        return fetch(this.URL, this.Request)
    }

    protected GenerateHeaders(): Headers {
        let requestHeaders: Headers = new Headers();
        //This is added so .net can differentiate ajax requests.
        return requestHeaders;
    }

    protected GenerateRequest() {
        let headers = this.GenerateHeaders();
        return {
            headers: headers,
            credentials: "same-origin",
            method: this.Method
        } as RequestInit;
    }
}

export class ApiGetRequest extends FetchApiRequest {

    constructor(url: string) {
        super(url, 'Get');
    }
}

export class ApiPostRequest extends FetchApiRequest {

    constructor(url: string, body: string) {
        super(url, 'Post', body);
    }

    protected GenerateHeaders(): Headers {
        let headers = super.GenerateHeaders();
        headers.append('Accept', 'application/json, text/plain, */*');
        headers.append('Content-Type', 'application/json');
        return headers;
    }

    protected GenerateRequest(): RequestInit {
        let request = super.GenerateRequest();
        request.body = this.Body;
        return request;
    }
}

export class ApiPostRequestWithToken extends FetchApiRequest {

    constructor(url: string, body: string) {
        super(url, 'Post', body);
    }

    protected GenerateHeaders(): Headers {
        let headers = super.GenerateHeaders();
        headers.append('Authorization', `Bearer ${sessionStorage.getItem(process.env.REACT_APP_SESSION_TOKEN_KEY)}`);
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        return headers;
    }

    protected GenerateRequest(): RequestInit {
        let request = super.GenerateRequest();
        request.body = this.Body;
        return request;
    }
}