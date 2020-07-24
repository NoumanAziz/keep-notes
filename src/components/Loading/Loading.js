
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    marginTop: theme.spacing(8),
    [theme.breakpoints.down('xs')] : {
        margin : theme.spacing(7 , 0 , 0 , 0),
          },
    '& > * + *': {
      marginTop: theme.spacing(3),
      height : '1px',
      
    },
  },

color : {
    // color :  theme.palette.background.cardFontColor,
    backgroundColor :  theme.palette.background.barBackground,
},

barBack : {
    backgroundColor :  theme.palette.background.barColor,
    // color :  theme.palette.background.cardFontColor,
},

barBack2 : {
    backgroundColor :  theme.palette.background.bar2Color,
    // color :  theme.palette.background.cardFontColor,
},

}));

export default function Loading() {
  const classes = useStyles();

  return (
    <div className={classes.root}> 
      <LinearProgress  classes = {{root : classes.color , bar2Indeterminate : classes.barBack2  ,  bar1Indeterminate : classes.barBack}} 
          />
      
    </div>
  );
}



