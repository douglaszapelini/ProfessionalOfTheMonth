import { CssBaseline } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import MenuComponent from './components/MenuComponent';
import Account from './pages/Account';
import Login from './pages/Login';

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
      <CssBaseline/>
      <div className="App">
        <Account index={1} value={"1"}/>
        {/* <Login></Login> */}
      </div>
    </ThemeProvider>
  )
}

export default App
