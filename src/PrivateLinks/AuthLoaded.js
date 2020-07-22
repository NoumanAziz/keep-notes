import React from 'react';
import { isLoaded } from 'react-redux-firebase'
import { connect } from 'react-redux';
import Loading from '../components/Loading/Loading'

const AuthIsLoaded = ({children , auth})=> {
   
    if (!isLoaded(auth)) return <Loading/> ;
    return children
  }

  const mapStateToProps = state =>({
    auth : state.firebase.auth
  })
  export default connect(mapStateToProps)(AuthIsLoaded);