import { CssBaseline } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import MenuComponent from './components/MenuComponents/MenuComponent';
import Account from './pages/Account';
import Login from './pages/Login';
import Voting from './pages/Voting';

import AdapterDateFns from '@mui/lab/AdapterDateFns'
import {LocalizationProvider} from '@mui/lab';
import Mural from './pages/Mural';
import Sigup from './pages/Sigup';

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
          <Login></Login>
          {/* <Sigup></Sigup> */}
          {/* <Voting></Voting> */}
          {/* <Mural></Mural> */}
        </div>
      </LocalizationProvider>
    </ThemeProvider>
  )
}

export default App
