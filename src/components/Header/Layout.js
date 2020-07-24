import React from 'react';
import DashboardIcon from '@material-ui/icons/Dashboard';
import { IconButton } from '@material-ui/core';
import { useStyles } from './HeaderStyles';
import { useDispatch } from 'react-redux';
import { mobLayoutToggler } from '../../redux/mobReducer/mobLayoutReducerAction';

const Layout = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    return (
        <IconButton  edge="start" color="inherit" aria-label="open drawer" 
        onClick={()=>dispatch(mobLayoutToggler())} >
            <DashboardIcon className={classes.layoutIcon} />
        </IconButton> 

    );
};

export default Layout;