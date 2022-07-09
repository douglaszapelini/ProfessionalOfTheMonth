import { CssBaseline } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import './App.css'
import {Routes,Route} from "react-router-dom";
import Profile from './pages/Profile';
import {Login} from './pages/Login';
import Voting from './pages/Voting';
import Mural from './pages/Mural';
import Signup from './pages/Signup';
import User from './pages/User';

import AdapterDateFns from '@mui/lab/AdapterDateFns'
import {LocalizationProvider} from '@mui/lab';
import Home from './pages/Home';
import {ProtectedRoute} from './components/ProtectedRoute';
import { AuthProvider } from './context';
import { Settings } from './pages/Settings'

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
      <AuthProvider>
        <ThemeProvider theme={darkTheme}>
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <CssBaseline/>
              <Routes>
                <Route path="/" element={<ProtectedRoute> <Home/> </ProtectedRoute>} />
                <Route path="/profile" element={<ProtectedRoute> <Profile/> </ProtectedRoute>} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/voting" element={<ProtectedRoute> <Voting/> </ProtectedRoute>} />
                <Route path="/user" element={<ProtectedRoute> <User/> </ProtectedRoute>} />
                <Route path="/mural" element={<ProtectedRoute> <Mural/> </ProtectedRoute>} />
                <Route path="/settings" element={ <Settings  /> } />

                <Route path="*" element={<Login/>} />
              </Routes>
          </LocalizationProvider>
        </ThemeProvider>
      </AuthProvider>
    </div>
  )
}

export default App
