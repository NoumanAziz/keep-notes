import React , {useEffect , useState} from 'react';
import { Route, BrowserRouter , Switch} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux'
// import {fetchUser} from './Actions'
// import {BrowserRouter , Route , Switch} from 'react-router-dom'
// import Home from './Components/Home/Home';
// import AccountHome from './Components/Accounts/AccountHome';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { Button , CssBaseline } from '@material-ui/core';
import Header from './components/Header/Header';
import Account from './components/Account/Account';
import AuthIsLoaded from './PrivateLinks/AuthLoaded';
import { themeToggler } from './redux/themeReducer/themeReducerActions';
import Notes from './components/Notes/Notes';
import Trash from './components/Trash/Trash';


const App = () => {
 
  const darkThemeSet = useSelector(state=>state.theme.currentTheme)
  const dispatch = useDispatch();

  const theme = React.useMemo(
    () =>
      createMuiTheme({
        overrides: {
           MuiAppBar: { colorPrimary: { backgroundColor: darkThemeSet == 'light' ? "#c1a526" : " #1c1c1f"  } }, //color of appbar
           MuiSelected: {
            outline: 'none',                                                                   
          }
          },
        palette: {
          type: darkThemeSet  == 'dark'? 'dark' : 'light',
          primary: {
            light: '#FFB300',
            main: '#FFB300',
            dark: '#ECEFF1',
            contrastText: '#fff',
          },

          background : {
            paper :  darkThemeSet == 'dark'?"#27282a":"#f9f9f6" , //color of menu 
            default : darkThemeSet == 'dark'&& "#1f1f22",//background
            modal :  darkThemeSet == 'dark'? "#1d1d1f5d":"#ffffff52" ,
           
            modalpaper :  darkThemeSet == 'dark'? "#1d1d1f":"#f9f9f6e1" ,//modalpaper color
            modalpaperdef :  darkThemeSet == 'dark'? "#151516":"#f9f9f6e1" ,//modalpaper color
           

            modalpaperred : darkThemeSet == 'dark'? "#5C2B29":"#F28B82" ,//modalpaper color

            modalpaperyellow : darkThemeSet == 'dark'? "#635D19":"#FFF475" ,//modalpaper color
            
            modalpapergreen : darkThemeSet == 'dark'? "#345920":"#CCFF90" ,//modalpaper color

            modalpaperteel : darkThemeSet == 'dark'? "#16504B":"#92fcdc" ,//modalpaper color

            modalpaperblue : darkThemeSet == 'dark'? "#2D555E":"#abd2fc" ,//modalpaper color

            modalpaperdarkblue : darkThemeSet == 'dark'? "#1E3A5F":"#89a1ff" ,//modalpaper color

            modalpaperpurple : darkThemeSet == 'dark'? "#42275E":"#D7AEFB" ,//modalpaper color

            modalpaperpink : darkThemeSet == 'dark'? "#5B2245":"#ffc4e3" ,//modalpaper color
            
            modalpapergrey : darkThemeSet == 'dark'? "#3C3F43":"#d8d6d6" ,//modalpaper color

            

            cardBorder : darkThemeSet == 'dark' ? '1px solid #4d4d4efb': '1px solid #b6b5b5fb',
            colorMenuBorder : darkThemeSet == 'dark' ? 'white ': 'black',
            cardFontWeight : darkThemeSet == 'dark' ? '200' : '400' ,
            cardTitleFontWeight : darkThemeSet == 'dark' ? '450' : '500' ,
            cardFontColor :  darkThemeSet == 'dark' ? '#dadada' : 'black',
          }, 

          action : {
            // focus :  darkThemeSet == 'dark' ? 'rgba(0, 0, 0, 0.2)' : 'rgba(221, 194, 75, 0.319)',
              hover : darkThemeSet == 'dark' ? 'rgba(53, 54, 59, 0.562)' : 'rgba(193, 165, 38, 0.369)',
          },
        //  shadows : Array[5] = 'none',
        //  shadows : Array[5] = darkThemeSet == 'dark' ?
        //  "0px 3px 5px -1px rgba(0,0,0,0.2),0px 5px 8px 0px rgba(0,0,0,0.14),0px 1px 14px 0px rgba(250, 249, 249, 0.856)"
        //  :
        //  "0px 3px 5px -1px rgba(0,0,0,0.2),0px 5px 8px 0px rgba(0,0,0,0.14),0px 1px 14px 0px rgba(0,0,0,0.12)",

        
        },
      }) , [darkThemeSet]
  );

  const setTheme = () =>{
    let themeSet = darkThemeSet == 'dark' ? 'light' : 'dark';
      dispatch(themeToggler(themeSet))

  }
  

  return (
    <ThemeProvider theme={theme}>
            <CssBaseline/>

 
      <Header callback = {setTheme} /> 
  <AuthIsLoaded>
 
   <Switch>
    <Route exact path="/"  component={Notes} /> 
    <Route exact path="/accounts" component={Account} />
    <Route exact path="/trash" component={Trash} />
    </Switch>
 
    </AuthIsLoaded>

    </ThemeProvider>
  );
}

export default App;








//  {/* <SecuredLinks exact path = '/' name = 'signedout'>
//               <Dashboard/>
//             </SecuredLinks>
//             <SecuredLinks exact path = '/create' name = 'signedout'>
//               <CreateProject/>
//             </SecuredLinks>
//             <SecuredLinks exact path = '/project/:id'  name = 'signedout'>
//               <ProjectDetails/>
//             </SecuredLinks>
//             <SecuredLinks exact path = '/signin'  name = 'signedin'>
//               <SignIn/>
//             </SecuredLinks>
//             <SecuredLinks exact path = '/signup'  name = 'signedin'>
//               <SignUp/>
//             </SecuredLinks> */}