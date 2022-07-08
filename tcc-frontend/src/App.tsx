import { CssBaseline } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import './App.css'
import Account from './pages/Account';
import Login from './pages/Login';
import Voting from './pages/Voting';
import Mural from './pages/Mural';
import Signup from './pages/Signup';
import User from './pages/User';

import AdapterDateFns from '@mui/lab/AdapterDateFns'
import {LocalizationProvider} from '@mui/lab';
import Home from './pages/Home';

function App() {

  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
      primary:{
        main: '#191E29',
      },
      secondary:{
        main: '#132D46'
      },
      success:{
        main: '#01C38D'
      }
    },
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <CssBaseline/>
        <div className="App">
          {/* <Account/> */}
          {/* <Login/> */}
          {/* <Signup/> */}
          {/* <Mural></Mural> */}
          {/* <Voting></Voting> */}
          {/* <User></User> */}
          <Home></Home>
        </div>
      </LocalizationProvider>
    </ThemeProvider>
  )
}

export default App
