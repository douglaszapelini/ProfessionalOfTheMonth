import { CssBaseline } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import './App.css'
import {Routes,Route} from "react-router-dom";
import Profile from './pages/Profile';
import {Login} from './pages/Login';
import Voting from './pages/Voting';
import Mural from './pages/Mural';
import {Signup} from './pages/Signup';
import {User} from './pages/User';

import AdapterDateFns from '@mui/lab/AdapterDateFns'
import {LocalizationProvider} from '@mui/lab';
import {Home} from './pages/Home';
import {ProtectedRoute} from './components/ProtectedRoute';
import { AuthProvider } from './context';
import { Settings } from './pages/Settings'
import { ShowMural } from './pages/ShowMural';
import { Dashboard } from './pages/Dashboard';

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
                
                <Route path="/login"     element={<Login/>}/>
                <Route path="/signup"    element={<Signup/>}/>
                <Route path="/showMural" element={<ShowMural/>}/>
                <Route path="/"          element={<ProtectedRoute verifyAdmin={false}><Home/></ProtectedRoute>}/>
                <Route path="/profile"   element={<ProtectedRoute verifyAdmin={true}><Profile/></ProtectedRoute>}/>
                <Route path="/voting"    element={<ProtectedRoute verifyAdmin={true}><Voting/></ProtectedRoute>}/>
                <Route path="/user"      element={<ProtectedRoute verifyAdmin={true}><User/></ProtectedRoute>}/>
                <Route path="/mural"     element={<ProtectedRoute verifyAdmin={true}><Mural/></ProtectedRoute>}/>
                <Route path="/settings"  element={<ProtectedRoute verifyAdmin={true}><Settings/></ProtectedRoute>}/>
                <Route path="/dashboard" element={<ProtectedRoute verifyAdmin={true}><Dashboard/></ProtectedRoute>}/>

                <Route path="*" element={<Login/>} />
              </Routes>
          </LocalizationProvider>
        </ThemeProvider>
      </AuthProvider>
    </div>
  )
}

export default App
