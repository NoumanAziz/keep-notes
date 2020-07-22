// import React from 'react';
// import { isLoaded  , isEmpty} from 'react-redux-firebase'
// import { connect } from 'react-redux';
// import { Route, Redirect } from 'react-router-dom';
// import { compose } from 'redux';

// const PrivateLinks = (WrappedComponent) =>({name ,auth , ...props})=>{

//     switch (name) {
//         case "signedout":
//           return (
//             <>
//                 {isLoaded(auth) && !isEmpty(auth) ? 
//                   <WrappedComponent {...props}/>
//                  : (
//                   <Redirect
//                     to={{
//                       pathname: '/signin',
//                     //   state: { from: location }
//                     }}
//                   />
//                 )
//               }
//             </>
//           );
        
    
//           case "signedin":
//             return (
//                 <>
//                   {isLoaded(auth) && !isEmpty(auth) ? (
//                     <Redirect
//                       to={{
//                         pathname: '/',
//                         // state: { from: location }
//                       }}
//                     />
//                   ) : 
//                   <WrappedComponent {...props}/>
                  
//                 }
//             </>
//             );
      
//         default:
//           break;
//       }
//     }
  
    


// const mapStateToProps = state => ({
//     auth : state.firebase.auth
// })
// export default compose( connect(mapStateToProps) ,PrivateLinks);



