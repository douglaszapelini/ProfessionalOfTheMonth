import { ThemeProvider, createTheme } from '@mui/material/styles';
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
      <div className="App">
        <Login></Login>
      </div>
    </ThemeProvider>
  )
}

export default App
