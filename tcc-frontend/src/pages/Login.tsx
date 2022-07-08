import {Box, Button, Card, CardContent, FormControl, Grid, IconButton, InputAdornment, InputLabel, OutlinedInput, styled, 
        TextField, 
        Typography} from "@mui/material";
import { Component } from "react";
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import { Visibility, VisibilityOff } from "@mui/icons-material";
import FooterComponent from "../components/Footer/FooterComponent";
import { Link } from "react-router-dom";
interface LoginProps {
    
}
 
interface LoginState {
    showPassword: boolean;
}

const CssTextField = styled(TextField)({
    '& label.Mui-focused': {
      color: 'white',
    },
    '& .MuiOutlinedInput-root': {
      '&.Mui-focused fieldset': {
        borderColor: 'white',
      },
    },
  });

const CssFormControl= styled(FormControl)({
    '& label.Mui-focused': {
      color: 'white',
    },
    '& .MuiOutlinedInput-root': {
      '&.Mui-focused fieldset': {
        borderColor: 'white',
      },
    },
  }
);
 
class Login extends Component<LoginProps, LoginState> {
    constructor(props: LoginProps) {
        super(props);
        this.state = { showPassword: false };
    }

    hundleShowPassword = () =>{
        this.setState({showPassword: !this.state.showPassword});
    }

    render() { 
        return (
            <>
            <Grid container className="notSelected" justifyContent= 'center'  alignItems='center' sx={{height:'96vh'}}>
                <Box sx={{maxWidth: '35rem', height: 'auto'}}>
                    <Card >
                        <CardContent>
                            <Grid container >
                                <Grid item textAlign="center" xs={12} sx={{ backgroundColor: '#454546', padding: '1.5rem', borderRadius: '4px 4px 0 0', border: '2px solid black'}}>
                                    <EmojiEventsIcon color="warning" sx={{fontSize:"3rem"}}/> 
                                    <Typography variant="h5">
                                        Professional of the Month 
                                    </Typography>
                                </Grid>
                                <Grid item xs={12} sx={{ backgroundColor: '#4D4B4D', borderRadius: '0 0 4px 4px', border: '2px solid black'}}>
                                    <Grid item textAlign="center" xs={12} sx={{margin: '1.5rem'}}>
                                        <Typography variant="h3">
                                            Login
                                        </Typography>
                                    </Grid>
                                    <Grid item textAlign="center" xs={12} sx={{marginTop: '1.5rem', marginLeft: '1.5rem', marginRight: '1.5rem'}}>
                                        <CssTextField
                                            fullWidth
                                            required
                                            label="Email"
                                        />
                                    </Grid>
                                    <Grid item textAlign="center" xs={12} sx={{marginTop: '1rem', marginLeft: '1.5rem', marginRight: '1.5rem', marginBottom: '1.5rem'}}>
                                        <CssFormControl variant="outlined" sx={{width: '100%'}}>
                                            <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                                            <OutlinedInput
                                                id="password-input"
                                                type={this.state.showPassword ? 'text' : 'password'}
                                                autoComplete="current-password"
                                                endAdornment={
                                                    <InputAdornment position="end">
                                                    <IconButton
                                                        onClick={this.hundleShowPassword}
                                                        edge="end"
                                                    >
                                                        {this.state.showPassword ? <VisibilityOff /> : <Visibility />}
                                                    </IconButton>
                                                    </InputAdornment>
                                                }
                                                label="Password"
                                            />
                                        </CssFormControl>
                                    </Grid>
                                    <Grid item textAlign="center" xs={12} sx={{marginTop: '1rem', marginLeft: '1.5rem', marginRight: '1.5rem', marginBottom: '1.5rem'}}>
                                        <Button color="success" variant="contained" fullWidth  sx={{ height: '3rem'}}>Login</Button>
                                    </Grid>
                                    <Grid item textAlign="center" xs={12} sx={{marginTop: '1rem', marginLeft: '1.5rem', marginRight: '1.5rem', marginBottom: '1.5rem'}}>
                                        <Link to="/signup">
                                            <Button variant="outlined" fullWidth color="inherit" sx={{ height: '3rem'}}>Sign up</Button>
                                        </Link>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </CardContent>
                    </Card>
                </Box>
            </Grid>
            <FooterComponent/>
            </>
        );
    }
}
 
export default Login;