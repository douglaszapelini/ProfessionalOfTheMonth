import { Backdrop, CircularProgress } from '@mui/material';
import { Navigate } from 'react-router-dom';
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

  if(auth.loading){
    return(
      <Backdrop sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }} open={auth.loading}>
        <CircularProgress color="inherit" />
      </Backdrop>
    )
  }

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
