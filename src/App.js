import React, { useEffect }  from 'react';
import { Route, Switch, Redirect} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux'
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';
import Header from './components/Header/Header';
import Account from './components/Account/Account';
import AuthIsLoaded from './PrivateLinks/AuthLoaded';
import { themeToggler } from './redux/themeReducer/themeReducerActions';
import Notes from './components/Notes/Notes';
import SecuredLinks from './PrivateLinks/SecuredLinks';
import NoteSnackbar from './components/Snakbar/NoteSnackbar';
import { openSnackbar } from './redux/snackbarReducer/snackbarReducerAction';
import useOnlineStatus from '@rehooks/online-status';

const App = () => {

 


  const darkThemeSet = useSelector(state=>state.theme.currentTheme)
  const dispatch = useDispatch();


  const status = useOnlineStatus();
  if (!status) {dispatch(openSnackbar('Ofline !!!'))}
  
  const profileName = useSelector(state=>state.firebase.profile.name)  
  useEffect(()=>{
  if (profileName && status) {
     
    dispatch(openSnackbar(`Welcome  ${profileName} `))
    } 
  } , [profileName])






  const theme = React.useMemo(
    () =>
      createMuiTheme({
        overrides: {
           MuiAppBar: { colorPrimary: { backgroundColor: darkThemeSet === 'light' ? "#c1a526" : " #1c1c1f"  } }, //color of appbar
           MuiSelected: {
            outline: 'none',                                                                   
          }
          },
        palette: {
          type: darkThemeSet  === 'dark'? 'dark' : 'light',
          primary: {
            light: '#FFB300',
            main: '#FFB300',
            dark: '#ECEFF1',
            contrastText: '#fff',
          },

          background : {
            paper :  darkThemeSet === 'dark'?"#27282a":"#f9f9f6" , //color of menu 
            default : darkThemeSet === 'dark' ? "#1f1f22" : '#ffffff',//background
            modal :  darkThemeSet === 'dark'? "#1d1d1f5d":"#ffffff52" ,
           
            modalpaper :  darkThemeSet === 'dark'? "#1d1d1f":"#f9f9f6e1" ,//modalpaper color
            modalpaperdef :  darkThemeSet === 'dark'? "#151516":"#f9f9f6e1" ,//modalpaper color
           

            modalpaperred : darkThemeSet === 'dark'? "#5C2B29":"#F28B82" ,//modalpaper color

            modalpaperyellow : darkThemeSet === 'dark'? "#635D19":"#FFF475" ,//modalpaper color
            
            modalpapergreen : darkThemeSet === 'dark'? "#345920":"#CCFF90" ,//modalpaper color

            modalpaperteel : darkThemeSet === 'dark'? "#16504B":"#92fcdc" ,//modalpaper color

            modalpaperblue : darkThemeSet === 'dark'? "#2D555E":"#abd2fc" ,//modalpaper color

            modalpaperdarkblue : darkThemeSet === 'dark'? "#1E3A5F":"#89a1ff" ,//modalpaper color

            modalpaperpurple : darkThemeSet === 'dark'? "#42275E":"#D7AEFB" ,//modalpaper color

            modalpaperpink : darkThemeSet === 'dark'? "#5B2245":"#ffc4e3" ,//modalpaper color
            
            modalpapergrey : darkThemeSet === 'dark'? "#3C3F43":"#d8d6d6" ,//modalpaper color

            

            cardBorder : darkThemeSet === 'dark' ? '1px solid #4d4d4efb': '1px solid #b6b5b5fb',
            colorMenuBorder : darkThemeSet === 'dark' ? 'white ': 'black',
            cardFontWeight : darkThemeSet === 'dark' ? '200' : '400' ,
            cardTitleFontWeight : darkThemeSet === 'dark' ? '450' : '500' ,
            cardFontColor :  darkThemeSet === 'dark' ? '#dadada' : 'black',
            barBackground : darkThemeSet === 'dark' ? '#aaa9a9' : '#F4F4F4',
            barColor : darkThemeSet === 'dark' ? '#3c3c42' : 'primary',
            bar2Color : darkThemeSet === 'dark' ? '#49494b' : 'primary',
          }, 

          action : {
              hover : darkThemeSet === 'dark' ? 'rgba(53, 54, 59, 0.562)' : 'rgba(193, 165, 38, 0.369)',
          },
 
        
        },
      }) , [darkThemeSet]
  );

  const setTheme = () =>{
    let themeSet = darkThemeSet === 'dark' ? 'light' : 'dark';
      dispatch(themeToggler(themeSet))

  }

  return (
    <ThemeProvider theme={theme}>
            <CssBaseline/>

 
      <Header callback = {setTheme} /> 
      <AuthIsLoaded>
 
     <Switch>
      <SecuredLinks exact path = '/:category' name = 'signedout'    > 
                 <Notes/>
     </SecuredLinks>

      <Route exact path="/">
            <Redirect to="/notes" />
      </Route>

       <SecuredLinks exact path = '/notes/accounts' name = 'signedin'> 
         <Account/>
       </SecuredLinks>

    
    </Switch>
    <NoteSnackbar/>
 
    </AuthIsLoaded>

    </ThemeProvider>
  );
}

export default App;








