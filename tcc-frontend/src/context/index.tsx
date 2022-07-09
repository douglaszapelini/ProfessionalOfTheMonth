import { createContext, useEffect, useState} from "react";
import { IAuthProvider, IContext, IUser } from "./types";
import { getUserLocalStorage, LoginRequest, setUserLocalStorage } from "./util";

export const AuthContext = createContext<IContext>({} as IContext);

export const AuthProvider = ({children}: IAuthProvider) => {
    
    const [user, setUser] = useState<IUser | null>();

    useEffect(() => {
        const user = getUserLocalStorage();

        if(user){
            setUser(user);
        }
    }, [])

    async function authenticate(email: string, password: string){
        const response = await LoginRequest(email, password);
        console.log('response',response.data);
        const payload = {token: response.token, email}; 
        console.log('payload',payload);
        if(!!payload){
            setUser(payload);
            setUserLocalStorage(payload)
            return true;
        }
        return false;
    }

    async function logout(){
        setUser(null);
        setUserLocalStorage(null);
    }

    return(
        <AuthContext.Provider value={{...user,authenticate,logout}}>
            {children}
        </AuthContext.Provider>
    )
}