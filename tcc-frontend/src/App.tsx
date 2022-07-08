import { CssBaseline } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import './App.css'
import {Routes,Route} from "react-router-dom";
import Account from './pages/Account';
import Login from './pages/Login';
import Voting from './pages/Voting';
import Mural from './pages/Mural';
import Signup from './pages/Signup';
import User from './pages/User';

import AdapterDateFns from '@mui/lab/AdapterDateFns'
import {LocalizationProvider} from '@mui/lab';
import Home from './pages/Home';
import { useState } from 'react';
import ProtectedRoute from './security/ProtectedRoute';
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

  const [isLoggedIn, setIsLoggedIn] = useState(true);

  return (
    <div className="App">
      <ThemeProvider theme={darkTheme}>
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <CssBaseline/>
            <Routes>
              <Route path="/" element={<ProtectedRoute isLoggedIn={isLoggedIn}> <Home/> </ProtectedRoute>} />
              <Route path="/profile" element={<ProtectedRoute isLoggedIn={isLoggedIn}> <Account/> </ProtectedRoute>} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/voting" element={<ProtectedRoute isLoggedIn={isLoggedIn}><Voting/></ProtectedRoute>} />
              <Route path="/user" element={<ProtectedRoute isLoggedIn={isLoggedIn}><User/></ProtectedRoute>} />
              <Route path="/mural" element={<ProtectedRoute isLoggedIn={isLoggedIn}><Mural/></ProtectedRoute>} />

              <Route path="*" element={<Login/>} />
            </Routes>
        </LocalizationProvider>
      </ThemeProvider>
    </div>
  )
}

export default App
