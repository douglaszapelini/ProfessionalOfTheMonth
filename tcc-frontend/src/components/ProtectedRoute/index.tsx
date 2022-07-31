import { Backdrop, CircularProgress } from '@mui/material';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../../context/useAuth';
import { getUserLocalStorage } from '../../context/util';

interface ProtectedRouteProps {
  redirectPath?: string;
  children?: any;
  verifyAdmin:boolean;
}

export const ProtectedRoute = (props: ProtectedRouteProps) => {
  
  const auth = useAuth();
  const userLocalStorage = getUserLocalStorage();

  const { redirectPath, children, verifyAdmin } = props;

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

  if(verifyAdmin){
    if(!auth.isAdmin || !userLocalStorage.isAdmin) {
      return(
        <Navigate to={!!redirectPath ? redirectPath : "/"} replace/>
      )
    }
  }

  return (
    children 
  )
}
