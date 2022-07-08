import { Component } from 'react'
import { Navigate, Outlet } from 'react-router-dom';

interface ProtectedRouteProps {
  isLoggedIn: boolean;
  redirectPath?: string;
  children?: any;
}

interface ProtectedRouteState {
}

export default class ProtectedRoute extends Component<ProtectedRouteProps, ProtectedRouteState> {

  constructor(props: ProtectedRouteProps) {
    super(props);
  }

  render() {

    const { isLoggedIn, redirectPath, children } = this.props;

    return (
      <>
        {isLoggedIn && !!children ? children : <Navigate to={!!redirectPath ? redirectPath : "/login"} replace/>}
        {!isLoggedIn && <Navigate to={!!redirectPath ? redirectPath : "/login"} replace/>}
      </>
    )
  }
}
