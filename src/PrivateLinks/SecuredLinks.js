import React from 'react';
import { isLoaded  , isEmpty} from 'react-redux-firebase'
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';


const SecuredRoute = ({ children, name , auth , ...rest }) =>{

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
                    pathname: '/signin',
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
                      pathname: '/',
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

  const mapStateToProps = state => ({
      auth : state.firebase.auth
  })
  export default connect(mapStateToProps)(SecuredRoute);




  