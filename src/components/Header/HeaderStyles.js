import {  fade, makeStyles } from '@material-ui/core';

const drawerWidth = 240;
export const useStyles = makeStyles((theme) => ({

    grow: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(0),    
    },

  homeLink : {
    textDecoration : 'none',
    color : 'white',
  },

   logoutTitle : {
    display : 'flex',
    alignItems : 'flex-start',
    justifyContent : 'space-around',
    textAlign : 'center',
    
    width : '135px',
    padding : '0px 25px 0px 4px',
   },

    title: {
      textAlign : 'center',
    
        width : '135px',
        padding : '0px 25px 0px 4px',
      display: 'none',
      
      [theme.breakpoints.up('sm')]: {
        display : 'flex',
        alignItems : 'flex-start',
        justifyContent : 'space-around',
        
      },
    }, 

    headerMenu:{
      boxShadow : theme.shadows[4],
    },

    menuFont : {
      fontSize : '12px',
      margin : '0px',
      padding: '0px 15px 0px 0px ',
      [theme.breakpoints.up('md')]: {
        fontSize : '15px',
        padding: '0px 25px 0px 25px ',
      },
    },

    layoutIcon: {
      display : 'none',
      [theme.breakpoints.down('xs')]: {
        display: 'block',
        width: theme.spacing(2.5),
      height: theme.spacing(2.5),
      marginLeft: theme.spacing(1),
      },
      
    },


    smaller: {
      width: theme.spacing(2.5),
      height: theme.spacing(2.5),
    },
    small: {
      width: theme.spacing(3),
      height: theme.spacing(3),
    },

    med: {
      width: theme.spacing(3.8),
      height: theme.spacing(3.8),
    },
    search: {
      position: 'relative',
      borderRadius: theme.shape.borderRadius,
      backgroundColor: fade(theme.palette.common.white, 0.15),
   
      margin : '0px auto',

      width : '65%' ,

[theme.breakpoints.up('md')] : {
    marginRight: theme.spacing(0),
    marginLeft:theme.spacing(1) ,
} ,
[theme.breakpoints.down('sm')] : {
    marginRight: theme.spacing(2),
    marginLeft:theme.spacing(1) ,
    width : '60%',
},
    '&:hover': {
  backgroundColor: fade(theme.palette.common.white, 0.25),
},

'&:focus': {
  backgroundColor: fade(theme.palette.common.white, 0.25),
},

      //   [theme.breakpoints.up('sm')]: {
    //     marginLeft: theme.spacing(3),
    //   },
    },
    searchIcon: {
    
      display: 'none',
      [theme.breakpoints.up('md')]: {
        display: 'flex',
        padding: theme.spacing(0, 2),
      height: '100%',
      position: 'absolute',
      pointerEvents: 'none',
      alignItems: 'center',
      
      justifyContent: 'center',
      },
    },
    inputRoot: {
      color: 'inherit',
      width : '100%'
    },
    inputInput: {
      padding: theme.spacing(1, 1, 1, ),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(0)}px)`,
      transition: theme.transitions.create('width'),
      width: '100%',
     
   
      [theme.breakpoints.up('md')]: {
        width: '100%',
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        margin : '0 auto',
      },
    },
    sectionDesktop: {
      display: 'none',
      [theme.breakpoints.up('md')]: {
        display: 'flex',
      
        width : 'fit-conteent',
      },
    },
    sectionMobile: {
      display: 'flex',
      [theme.breakpoints.up('md')]: {
        display: 'none',
      },
    },

    



    Links : {
      color : theme.palette.text.primary , 
      textDecorationLine : 'none',
  },

  root: {
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },


  hide: {
    display: 'block',
  },
  drawer: {
    
    width: drawerWidth,
    // overflowX : 'hidden',
    flexShrink: 0,
    whiteSpace: 'nowrap',
    [theme.breakpoints.down('xs')] : {
      width : 200,
      },
  },
  drawerOpen: {
    
    width: 200,
    
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      // duration: theme.transitions.duration.enteringScreen,
      duration: 30,
    }),
    [theme.breakpoints.down('xs')] : {
      width : 170,
      },
  },
  drawerClose: {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      // duration: theme.transitions.duration.leavingScreen,
       duration: 20,
    }),
    backgroundColor : 'rgba(88, 87, 87, 0)',
    border : 'none',
    overflowX: 'hidden',
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(8) + 1,
    },
    [theme.breakpoints.down('xs')] : {
      width: theme.spacing(0),
  },
  },
  extraIcon:{
    [theme.breakpoints.up('xs')]: {
      margin : '0px 0px 19.5px 0px ',
    },

    [theme.breakpoints.down('xs')]: {
      margin : '0px 0px 12px 0px ',
    },

  },
  drawerListItem:{
    [theme.breakpoints.up('sm')]: {
      padding : '0px 5px 0px 5px ',
      margin : '0px',
    },

    [theme.breakpoints.down('sm')]: {
      padding : '0px 3px',
      margin : '0px',
    },
    [theme.breakpoints.down('xs')]: {
      padding : '0px 2px',
      margin : '0px'
    },

  },

  listItemText :{
   
    padding : '0px',
    margin : '0px',

    // [theme.breakpoints.down('sm')]: {
      fontSize : '15px',
      fontWeigth : '200',
    

  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },

  }));
