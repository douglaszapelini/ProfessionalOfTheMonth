export interface IUser{
    email?: string;
    token?: string;
}

export interface IContext extends IUser{
    authenticate: (email: string, password: string) => Promise<boolean>;
    logout: () => void;
    loading: boolean;
}

export interface IAuthProvider{
    children: JSX.Element;
}