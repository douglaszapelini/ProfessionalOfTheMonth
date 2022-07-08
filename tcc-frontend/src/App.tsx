import { CssBaseline } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import './App.css'
import {
  Routes,
  Route,
  Link
} from "react-router-dom";
import Account from './pages/Account';
import Login from './pages/Login';
import Voting from './pages/Voting';
import Mural from './pages/Mural';
import Signup from './pages/Signup';
import User from './pages/User';

import AdapterDateFns from '@mui/lab/AdapterDateFns'
import {LocalizationProvider} from '@mui/lab';
import Home from './pages/Home';
import MenuComponent from './components/Menu/MenuComponent';

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
    <div className="App">
      <ThemeProvider theme={darkTheme}>
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <CssBaseline/>
            

            {/* <MenuComponent isAdmin={true}/> */}

            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/profile" element={<Account />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/voting" element={<Voting />} />
              <Route path="/user" element={<User />} />
              <Route path="/mural" element={<Mural />} />
              <Route path="*" element={<Login/>} />
            </Routes>
            {/* <Account/> */}
            {/* <Login/> */}
            {/* <Signup/> */}
            {/* <Mural></Mural> */}
            {/* <Voting></Voting> */}
            {/* <User></User> */}
            {/* <Home></Home> */}
        </LocalizationProvider>
      </ThemeProvider>
    </div>
  )
}

export default App
