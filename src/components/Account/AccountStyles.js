import { makeStyles } from "@material-ui/core";


export const formStyles = makeStyles ((theme) => ({
    rootCont : {
      overflow : 'hidden',
      textAlign : 'center' ,
      margin : '0px , auto',
   
    } , 
    rootDiv : {
       
      maxWidth :'460px' , 
      position : 'relative' ,
      margin : '0px auto' ,
      [theme.breakpoints.down('xs')] : {
          width:'100%' , 
      }
    },
    gender : {
        display : "flex",
        color : 'grey'
    },
  
  }))

export const accountStyles = makeStyles((theme) => ({
 

    accountDiv : {
      textAlign : 'center',
      marginTop  : theme.spacing(8),
      [theme.breakpoints.down('xs')] : {
        width:'100%' , 
        padding : '5px 1px',
     
    }
    },
    notesLogo : {
      marginTop : theme.spacing(4),
        width : '90px',
        height : "90px",
        [theme.breakpoints.down('xs')] : {
          marginTop : theme.spacing(2),
          width : '62px',
          height : "62px",
        }
    },
    titleText : {
        [theme.breakpoints.down('xs')] : {
            fontSize : '20px' , 
        }
    },

  }))