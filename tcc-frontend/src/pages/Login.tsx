import {Alert, Box, Button, Card, CardContent, FormControl, Grid, IconButton, InputAdornment, InputLabel, OutlinedInput, Snackbar, styled, 
        TextField, 
        Typography} from "@mui/material";
import { FormEvent, useCallback, useRef, useState } from "react";
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import { Visibility, VisibilityOff } from "@mui/icons-material";
import FooterComponent from "../components/Footer";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { useAuth } from "../context/useAuth";

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

export const Login = () => {

    const emailInputRef = useRef<HTMLInputElement>(null);
    const passwordInputRef = useRef<HTMLInputElement>(null);

    const [showPassword, setShowPassword] = useState(false);
    const [showAlert, setShowAlert] = useState(false);

    const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
        if (reason === 'clickaway') {
          return;
        }
        setShowAlert(false);
    };

    const navigate = useNavigate();

    const auth = useAuth();

    const hundleShowPassword = () =>{
        setShowPassword(!showPassword);
    }

    const hundleSubmit = useCallback(async (e: FormEvent) =>{
        e.preventDefault();
        try{
            const emailInputValue = emailInputRef.current?.value;
            const passwordInputValue = passwordInputRef.current?.value;
            const isAuthenticated = await auth.authenticate(!!emailInputValue ? emailInputValue : '',!!passwordInputValue ? passwordInputValue : '');
            console.log(isAuthenticated)
            if(isAuthenticated){
                return navigate('/', {replace: true});
            }else{
                setShowAlert(true);
            }
        }catch(error){
            setShowAlert(true);
        }
    }, [])

    return (
        <>
        <Grid container className="notSelected" justifyContent= 'center'  alignItems='center' sx={{height:'96vh'}}>
            <Box sx={{maxWidth: '35rem', height: 'auto'}}>
                <form onSubmit={hundleSubmit}>
                    <Card >
                        <CardContent>
                            <Snackbar open={showAlert} autoHideDuration={6000} onClose={handleClose}>
                                <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
                                    Incorrect login or password!
                                </Alert>
                            </Snackbar>
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
                                            inputRef={emailInputRef}
                                            id="email-input"
                                            fullWidth
                                            required
                                            label="Email"
                                        />
                                    </Grid>
                                    <Grid item textAlign="center" xs={12} sx={{marginTop: '1rem', marginLeft: '1.5rem', marginRight: '1.5rem', marginBottom: '1.5rem'}}>
                                        <CssFormControl variant="outlined" sx={{width: '100%'}} >
                                            <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                                            <OutlinedInput
                                                inputRef={passwordInputRef}
                                                id="password-input"
                                                required
                                                type={showPassword ? 'text' : 'password'}
                                                autoComplete="current-password"
                                                endAdornment={
                                                    <InputAdornment position="end">
                                                    <IconButton
                                                        onClick={hundleShowPassword}
                                                        edge="end"
                                                    >
                                                        {showPassword ? <VisibilityOff /> : <Visibility />}
                                                    </IconButton>
                                                    </InputAdornment>
                                                }
                                                label="Password"
                                            />
                                        </CssFormControl>
                                    </Grid>
                                    <Grid item textAlign="center" xs={12} sx={{marginTop: '1rem', marginLeft: '1.5rem', marginRight: '1.5rem', marginBottom: '1.5rem'}}>
                                        <Button type="submit" color="success" variant="contained" fullWidth  sx={{ height: '3rem'}}>Login</Button>
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
                </form>
            </Box>
        </Grid>
        <FooterComponent/>
        </>
    );
}