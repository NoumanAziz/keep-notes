import {  fade, makeStyles, useTheme  } from '@material-ui/core';
import clsx from 'clsx';
import Drawer from '@material-ui/core/Drawer';
const drawerWidth = 240;
// const theme = useTheme();
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

    smaller: {
      width: theme.spacing(2.5),
      height: theme.spacing(2.5),
    },
    small: {
      width: theme.spacing(3),
      height: theme.spacing(3),
    },

    med: {
      width: theme.spacing(4),
      height: theme.spacing(4),
    },
    search: {
      position: 'relative',
      borderRadius: theme.shape.borderRadius,
      backgroundColor: fade(theme.palette.common.white, 0.15),
      '&:hover': {
        backgroundColor: fade(theme.palette.common.white, 0.25),
      },
      margin : '0px auto',

      width : '70%' ,

[theme.breakpoints.up('md')] : {
    marginRight: theme.spacing(0),
    marginLeft:theme.spacing(1) ,
} ,
[theme.breakpoints.down('sm')] : {
    marginRight: theme.spacing(1),
    marginLeft:theme.spacing(1) ,
    width : '90%',
}


      //   [theme.breakpoints.up('sm')]: {
    //     marginLeft: theme.spacing(3),
    //   },
    },
    searchIcon: {
      padding: theme.spacing(0, 2),
      height: '100%',
      position: 'absolute',
      pointerEvents: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    inputRoot: {
      color: 'inherit',
      width : '100%'
    },
    inputInput: {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(0)}px)`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('md')]: {
        width: '100%',
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
      },
    },
    sectionDesktop: {
      display: 'none',
      [theme.breakpoints.up('md')]: {
        display: 'flex',
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
    flexShrink: 0,
    whiteSpace: 'nowrap',
    [theme.breakpoints.down('xs')] : {
      width : 200,
      },
  },
  drawerOpen: {
    
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    [theme.breakpoints.down('xs')] : {
      width : 190,
      },
  },
  drawerClose: {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
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
  drawerListItem:{
    padding : '0px 5px 0px 5px ',

    [theme.breakpoints.down('sm')]: {
      padding : '0px 3px',
    },

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
