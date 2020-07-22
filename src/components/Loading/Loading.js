import React from 'react'
import { CircularProgress, Container } from '@material-ui/core'
  
const Loading = () => {
    return(
    <Container style={{textAlign : 'center'}}>
        <CircularProgress style={{color : localStorage.getItem('theme') == 'light' ? '#424242' : '#ffffff' ,width : '70px' , height : '70px' , margin : '70px auto'}} />
        </Container>
        )
}

export default Loading 