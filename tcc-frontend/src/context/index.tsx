import { createContext, useEffect, useState} from "react";
import { IAuthProvider, IContext, IUser } from "./types";
import { getUserLocalStorage, LoginRequest, removeUserLocalStorage, setUserLocalStorage } from "./util";

export const AuthContext = createContext<IContext>({} as IContext);

export const AuthProvider = ({children}: IAuthProvider) => {
    
    const [user, setUser] = useState<IUser | null>();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const user = getUserLocalStorage();

        if(!!user){
            setUser(user);
        }

        setLoading(false);
    }, [])

    async function authenticate(email: string, password: string){
        const response = await LoginRequest(email, password);
        const payload = {token: response.token, email}; 
        if(!!payload){
            setUser(payload);
            setUserLocalStorage(payload)
            return true;
        }
        return false;
    }

    async function logout(){
        setUser(null);
        removeUserLocalStorage();
    }

    return(
        <AuthContext.Provider value={{...user,authenticate,logout, loading}}>
            {children}
        </AuthContext.Provider>
    )
}