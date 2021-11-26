import React from 'react';
import { Redirect, Route } from 'react-router';
import useAuth from '../../hooks/useAuth';
// private route componant
const PrivateRoute = ({children, ...rest}) => {
    const {user,isLoading} =useAuth();

    if(isLoading){

        return( 
            <div className="spinner-border">
            <span className="visually-hidden">Loading...</span>
            </div>
        );
      
    }

    return (
        <div>
    <Route
      {...rest}
      render={({ location }) =>
        user.email ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location }
            }}
          />
        )
      }
    />
        </div>
    );
};

export default PrivateRoute;