
import { makeStyles } from '@material-ui/core';




const notesStyles = makeStyles ((theme) => ({
    notesRootTop : {
        margin : theme.spacing(8 , 0 , 0 , 0),
        padding : theme.spacing(0),
        borderTop : theme.palette.background.cardBorder,
        width : '100%',
        [theme.breakpoints.down('xs')] : {
          margin : theme.spacing(7 , 0 , 0 , 0),
            },
    },
    notesRoot : {
        margin : "0 auto",
        textAlign : 'center' ,
       

        [theme.breakpoints.up('xs')] : {
          padding : theme.spacing(4 , 4 , 3 ,4),
          width : '95%',
        },
          
          [theme.breakpoints.down('xs')] : {
        padding : theme.spacing(4 , 2),
        width : '96%',
          },
      
    },

    trashText : {
      fontStyle : 'italic',
      fontWeight : 300,
      fontSize : '18px',
      color :  theme.palette.background.cardFontColor,
      
    },

//notes add box styles

    takeNotesBox: {
        minWidth: 200,
        width : '50%',
        padding : '8px 14px',
        margin: '0px auto',
        backgroundColor : '#00000000',
        border : '1px solid #b6b5b5fb',
        borderRadius: '5px',
        color : 'rgb(172, 170, 170)',
        fontSize : '14px',
        cursor : 'pointer',
        [theme.breakpoints.down('xs')] : {
            width : '90%'
        },
    },
    takeNote: {    
        width : '70%',
    },

//notes List styles

          masonryGrid : {
            display: 'flex',
            // marginLeft: '-10px',
            justifyContent : 'center',
            width : 'auto',
            [theme.breakpoints.up('sm')] : {
              padding : '2px 2px',
              margin : theme.spacing(3 , 10),
              // width : '100%',
              
                 },
                
          
              [theme.breakpoints.down('sm')] : {
                padding : '2px 2px',
                margin : theme.spacing(3 ,4),
               
                
            },
              [theme.breakpoints.down('xs')] : {
                padding : '0px',
                margin  : "30px auto"
                
            },
          },

          masonryGridColumn : {
            paddingLeft: '0px',
            
              
          
          },


    
    notesListRoot : {
       [theme.breakpoints.up('sm')] : {
    padding : '2px 25px',
    marginTop : theme.spacing(3),
    width : '100%',
    
       },

    [theme.breakpoints.down('sm')] : {
      padding : '2px 4px',
      margin : theme.spacing(3 ,2),
     
      
  },
    [theme.breakpoints.down('xs')] : {
      padding : '0px',
      margin : theme.spacing(3 , 0),
      
  },
},

// notes Card styles

    notesCardBox : {
      // overflowWrap: 'normal',
      // minWidth: 210,
      backgroundColor: theme.palette.background.modalpaper,
      border : theme.palette.background.cardBorder,
      borderRadius: '6px',
      padding: theme.spacing(0),
      

      // [theme.breakpoints.up('sm')] : {
      //   // width : 250,
      //   // backgroundColor : '#00000000',
      // },
      // [theme.breakpoints.up('xs')] : {
      //   minWidth : 210,
        
      // },
        [theme.breakpoints.down('xs')] : {
             // width : '100%',
             minWidth : '100px',
         },
  
        '&:hover': {
          '& $carPinIcon' : {
       opacity : '1'
         },
         '& $cardIconButton' : {
          opacity : '1'
            },

           '& $cardIconButtonColor' : {
            opacity : '1'
           },
       }
    },
    cardTitle : {
      
      fontWeight : theme.palette.background.cardTitleFontWeight,
      color :  theme.palette.background.cardFontColor,
      margin : theme.spacing(0),
      padding: theme.spacing(2 ,2 , 1 ,2),
      boxShadow : theme.shadows[0],
      width : '100%',
      cursor : 'pointer'

    },
    // titleAreaNote : {
    //   fontWeight : 600,
    //   color :  theme.palette.background.cardFontColor,
    //   margin : theme.spacing(0),
    //   padding: theme.spacing(0 ,2 , 0 ,2),
    //   boxShadow : theme.shadows[0],
    //   backgroundColor: '#ffffff00',
    //   fontSize : '1.4em',
    //   lineHeight : '1.5em',
    //   overflow : 'hidden' , 
    //   border : 'none' ,
    //   resize : 'none' , 
    // width : '100%',
    // cursor : 'pointer' ,
    // outline : 'none',
    // },
    
    cardDiscrp : {
      fontWeight : theme.palette.background.cardFontWeight,
      color :  theme.palette.background.cardFontColor,
      padding: theme.spacing(0 ,0, 0 ,2),
      width : '100%',
      maxHeight : '47vh',
      // overflowWrap : 'break-word',
      // wordBreak: 'break-all',
      // overflow : 'hidden',
      // lineClamp: '5' ,
      // textOverflow: 'ellipsis', 
      // whiteSpace: 'nowrap' ,
    },

    textAreaNote : {
      fontWeight : theme.palette.background.cardFontWeight,
      color :  theme.palette.background.cardFontColor,
      padding: theme.spacing(1 ,2, 0 ,2),
      backgroundColor: '#ffffff00',
      fontSize : '1.19em',
      lineHeight : '1.5em',
      overflow : 'hidden' , 
      border : 'none' ,
      resize : 'none' , 
    width : '100%',
    cursor : 'pointer' ,
    outline : 'none',
    },
    


    modalOpenDiv : {
      padding: theme.spacing(0),
      overflowWrap: 'break-word',
  
    },

  
    carPinIcon:{
      width : '30px',
      height : '30px',
      padding : '0',
      float : 'right',
      opacity : '0',
      [theme.breakpoints.down('xs')] : {
        opacity : '0.9',
    },
    },

    cardIconButton:{
      width : '23px',
      height : '23px',
      margin : theme.spacing(0 , 1 ,0 ,1),
      opacity : '0',
      [theme.breakpoints.down('xs')] : {
        opacity : '0.9',
    },
     
    },

    cardIconButtonColorMob : {
      
     display : 'none',
      
      [theme.breakpoints.down('xs')] : {
        display : 'block',
        padding : '0px',
        opacity : '1',
        width : '23px',
        height : '23px',
        margin : theme.spacing(0 , 1 ,0 ,1),
    },
    

    },


    cardIconButtonColor : {
      width : '23px',
      height : '23px',
      margin : theme.spacing(0 , 1 ,0 ,1),
      opacity : '0',
      [theme.breakpoints.down('xs')] : {
        display : 'none',
    },
     
    },

    notesCardButtons : {
      width : '100%',
       padding : theme.spacing(0),
       margin : theme.spacing(0),
      //  float : 'right',
       
       display : 'flex',
       justifyContent: 'flex-end',
     
    },

    extraCardDiv:{
      width : '80%',
      height : "22px",
      margin : (0),
      [theme.breakpoints.down('xs')] : {
        display : 'none',
    },
     

    },

    

    // colormenuFont : {
    //   fontSize : '12px',
    //   margin : '0px',
    //   padding: '0px 15px 0px 0px ',
    //   [theme.breakpoints.up('md')]: {
    //     fontSize : '15px',
    //     padding: '0px 25px 0px 25px ',
    //   },
    // },
   


// Modal styles

modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding : '0px',
    backgroundColor: theme.palette.background.modal,
    outline : 0,
    margin : "0px",
   
  },
  modalPaperDiv : {
    margin : "0px",
    padding : "0px",
    backgroundColor : 'white',
    borderRadius : '5px'
  },
  modalPaper: {
    
    width: 700,
    padding: theme.spacing(0),
    border: "1px solid grey",
    borderRadius: "4px",
    boxShadow: theme.shadows[5],
    backgroundColor: theme.palette.background.modalpaperdef,
    maxHeight : '90vh',
    overflowY: "scroll",
    [theme.breakpoints.down("sm")]: {
      width: 400

    },

    [theme.breakpoints.down("xs")]: {
      width: 280
    }
  },

  modalTitleBox: {
    padding: '0px',
    width : '100%',
    margin : '0px',
    fontWeight : theme.palette.background.cardTitleFontWeight,
    color :  theme.palette.background.cardFontColor,
    display : 'flex',
    alignItems : 'flex-start',
    maxHeight : '40vh',
    overflowY: "scroll",
    
  },

  modalPin : {
    height : '29px',
    width : '29px',
    margin : '0px',
  },

  modalTitleInput: {
    padding: theme.spacing(2, 0 , 0 , 2),
    fontWeight : theme.palette.background.cardTitleFontWeight,
    color :  theme.palette.background.cardFontColor,

  },

  surDisp: {
    minHeight: '10vh',
    maxHeight : '71vh',
    overflowY: "scroll",
    padding: theme.spacing(1 ,2 , 0 , 2),
    fontWeight : theme.palette.background.cardFontWeight,
      color :  theme.palette.background.cardFontColor,
    "&:focus": {
      outline: "none"
    },

    [theme.breakpoints.down("xs")]: {
      textAlign: "center"
    }
  },
  surDispInput: {
    fontWeight : theme.palette.background.cardFontWeight,
      color :  theme.palette.background.cardFontColor,
  },
 

 modalControlButtons : {
  padding : theme.spacing(0),
  margin : theme.spacing(0),
   display : 'flex',
   justifyContent : 'flex-end',
 },
 

 cardIconButtonColorMobModal : {
      
  display : 'none',
   
   [theme.breakpoints.down('xs')] : {
     display : 'block',
     
     opacity : '1',
   
 },
 

 },


 cardIconButtonColorModal : {
 
   [theme.breakpoints.down('xs')] : {
     display : 'none',
 },
  
 },




 
// backdropstyle : {
//     opacity 
// },

 // bg-color 

 bgDefault : {
  // backgroundColor: theme.palette.background.modalpaper,
 },
 bgDefaultModal : {
  backgroundColor: theme.palette.background.modalpaperdef,
 },

  bgRed : {
  backgroundColor: theme.palette.background.modalpaperred,
 },

 bgYellow : {
  backgroundColor: theme.palette.background.modalpaperyellow,
 },

 bgGreen : {
  backgroundColor: theme.palette.background.modalpapergreen, 
 },

 bgTeel : {
  backgroundColor: theme.palette.background.modalpaperteel,
 },

  bgBlue : {
  backgroundColor: theme.palette.background.modalpaperblue, 
 },

  bgDarkblue : {
  backgroundColor: theme.palette.background.modalpaperdarkblue,
 },

 bgPurple : {
  backgroundColor: theme.palette.background.modalpaperpurple, 
 },

 bgPink : {
  backgroundColor: theme.palette.background.modalpaperpink,
 },
 
 bgGrey : {
  backgroundColor: theme.palette.background.modalpapergrey, 
 },


//color menuitems

colorMenuRoot: {
     
  borderRadius : '4px',
  boxShadow : theme.shadows[3],
  padding : '4px 7px',
  width : '114px',
  height : '90px',
  display : 'flex',
  flexWrap : 'wrap',
  alignContent : 'center'
},


colorsDefault: {
  backgroundColor: theme.palette.background.modalpaper,
  width : '21px',
  height : '21px',  
  margin : '2px',
  borderRadius : '50%',
  border : theme.palette.background.cardBorder,
  '&:hover': {
    opacity : '0.9',
    border : `.7px solid ${theme.palette.background.colorMenuBorder} `,
  },
},


colorsRed: {
  backgroundColor: theme.palette.background.modalpaperred,
  width : '21px',
  height : '21px',  
  margin : '2px',
  borderRadius : '50%',
  border : theme.palette.background.cardBorder,
  '&:hover': {
    opacity : '0.9',
    border : `.7px solid ${theme.palette.background.colorMenuBorder} `,
  },
},


colorsYellow: {
  backgroundColor: theme.palette.background.modalpaperyellow,
  width : '21px',
  height : '21px',  
  margin : '2px',
  borderRadius : '50%',
  border : theme.palette.background.cardBorder,
  '&:hover': {
    opacity : '0.9',
    border : `.7px solid ${theme.palette.background.colorMenuBorder} `,
  },
},


colorsGreen: {
  backgroundColor: theme.palette.background.modalpapergreen,
  width : '21px',
  height : '21px',  
  margin : '2px',
  borderRadius : '50%',
  border : theme.palette.background.cardBorder,
  '&:hover': {
    opacity : '0.9',
    border : `.7px solid ${theme.palette.background.colorMenuBorder} `,
  },
},


colorsTeel: {
  backgroundColor: theme.palette.background.modalpaperteel,
  width : '21px',
  height : '21px',  
  margin : '2px',
  borderRadius : '50%',
  border : theme.palette.background.cardBorder,
  '&:hover': {
    opacity : '0.9',
    border : `.7px solid ${theme.palette.background.colorMenuBorder} `,
  },
},


colorsBlue: {
  backgroundColor: theme.palette.background.modalpaperblue,
  width : '21px',
  height : '21px',  
  margin : '2px',
  borderRadius : '50%',
  border : theme.palette.background.cardBorder,
  '&:hover': {
    opacity : '0.9',
    border : `.7px solid ${theme.palette.background.colorMenuBorder} `,
  },
},


colorsDarkblue: {
  backgroundColor: theme.palette.background.modalpaperdarkblue,
  width : '21px',
  height : '21px',  
  margin : '2px',
  borderRadius : '50%',
  border : theme.palette.background.cardBorder,
  '&:hover': {
    opacity : '0.9',
    border : `.7px solid ${theme.palette.background.colorMenuBorder} `,
  },
},

colorsPurple: {
  backgroundColor: theme.palette.background.modalpaperpurple,
  width : '21px',
  height : '21px',  
  margin : '2px',
  borderRadius : '50%',
  border : theme.palette.background.cardBorder,
  '&:hover': {
    opacity : '0.9',
    border : `.7px solid ${theme.palette.background.colorMenuBorder} `,
  },
},

colorsPink : {
  backgroundColor: theme.palette.background.modalpaperpink,
  width : '21px',
  height : '21px',  
  margin : '2px',
  borderRadius : '50%',
  border : theme.palette.background.cardBorder,
  '&:hover': {
    opacity : '0.9',
    border : `.7px solid ${theme.palette.background.colorMenuBorder} `,
  },
},

colorsGrey: {
  backgroundColor: theme.palette.background.modalpapergrey,
  width : '21px',
  height : '21px',  
  margin : '2px',
  borderRadius : '50%',
  border : theme.palette.background.cardBorder,
  '&:hover ' : {
    opacity : '0.7',
    border : `.7px solid ${theme.palette.background.colorMenuBorder} `,
  },
},


searchPageColorPaper: {
    maxWidth: '85%',
    width : 'fit-content',
    minWidth : '60%',
    margin : "0px  auto", 
    textAlign : 'left',
  alignContent : 'center',
  padding : '14px 7px',

},

colorText : {
  margin : "0 24px 6px 24px",
  [theme.breakpoints.down('md')] : {
    margin : "0 19px 6px 19px",
    },

  [theme.breakpoints.down('sm')] : {
    margin : "0 14px 6px 14px",
    },

  [theme.breakpoints.down('xs')] : {
    margin : "0 9px 6px 9px",
    },
  
},

colorsCircleBox:{

 
  padding : '0px',
  width : '100%',
  display : 'flex',
  flexWrap : 'wrap',
  margin : "0px  auto", 
  

},

colorsCircle: {
  borderRadius : '50%',
  border : theme.palette.background.cardBorder,
  cursor : 'pointer',
  [theme.breakpoints.up('md')] : {
    
  width : '76px',
  height : '76px',  
  margin : '8px',
  },

  [theme.breakpoints.down('md')] : {
    width : '62px',
    height : '62px',  
    margin : '7px',
    },

    [theme.breakpoints.down('sm')] : {
      width : '50px',
      height : '50px',  
      margin : '6px',
      },

      [theme.breakpoints.down('xs')] : {
        width : '37px',
        height : '37px',  
        margin : '5px',
        },
  '&:hover': {
    opacity : '0.9',
    border : `.7px solid ${theme.palette.background.colorMenuBorder} `,
  },
},




}))


export default notesStyles;