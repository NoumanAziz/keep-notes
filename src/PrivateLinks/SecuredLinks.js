import React from 'react';
import { isLoaded  , isEmpty} from 'react-redux-firebase'
import { useSelector } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';


const SecuredRoute = ({ children, name  , ...rest }) =>{
const auth = useSelector(state=>state.firebase.auth)
    switch (name) {
      case "signedout":
        return (
          <Route
            {...rest}
            render={({ location }) =>
              isLoaded(auth) && !isEmpty(auth) ? (
                children
              ) : (
                <Redirect
                  to={{
                    pathname: '/notes/accounts',
                    state: { from: location }
                  }}
                />
              )
            }
          />
        );

        case "signedin":
          return (
            <Route
              {...rest}
              render={({ location }) =>
                isLoaded(auth) && !isEmpty(auth) ? (
                  <Redirect
                    to={{
                      pathname: '/notes',
                      state: { from: location }
                    }}
                  />
                ) : (
                  children
                )
              }
            />
          );
    
      default:
        break;
    }

  }


  export default SecuredRoute;




  