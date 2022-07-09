import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../../context/useAuth';
import { getUserLocalStorage } from '../../context/util';

interface ProtectedRouteProps {
  redirectPath?: string;
  children?: any;
}


export const ProtectedRoute = (props: ProtectedRouteProps) => {
  
  const auth = useAuth();
  const userLocalStorage = getUserLocalStorage();

  const { redirectPath, children } = props;
  console.log(!!userLocalStorage)
  console.log(auth)
  if(!auth.email){
    return(
      <Navigate to={!!redirectPath ? redirectPath : "/login"} replace/>
    )  
  }

  if(!userLocalStorage){
    return(
      <Navigate to={!!redirectPath ? redirectPath : "/login"} replace/>
    ) 
  }

  return (
    children 
  )
}
