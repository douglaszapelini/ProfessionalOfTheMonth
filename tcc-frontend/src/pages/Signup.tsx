import {Box, Button, Card, CardContent, FormControl, Grid, styled, TextField, Typography} from "@mui/material";
import { Component } from "react";
import EmojiEventsTwoToneIcon from '@mui/icons-material/EmojiEventsTwoTone';
import FooterComponent from "../components/Footer";
import { Link } from "react-router-dom";

interface SignupProps {
    
}
 
interface SignupState {
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
 
class Signup extends Component<SignupProps, SignupState> {
    constructor(props: SignupProps) {
        super(props);
        this.state = { showPassword: false };
    }

    hundleShowPassword = () =>{
        this.setState({showPassword: !this.state.showPassword});
    }

    render() { 
        return (
            <>
            <Grid container className="notSelected" justifyContent= 'center'  alignItems='center' sx={{height: 'calc(100vh - 41px)'}}>
                <Box sx={{maxWidth: '35rem', height: 'auto'}}>
                    <Card >
                        <CardContent>
                            <Grid container >
                                <Grid item textAlign="center" xs={12} sx={{ backgroundColor: '#454546', padding: '1.5rem', borderRadius: '4px 4px 0 0', border: '2px solid black'}}>
                                    <Grid container justifyContent='center'  alignItems='center'>
                                        <Grid item >
                                            <EmojiEventsTwoToneIcon color="warning" sx={{fontSize:"3rem"}}/> 
                                        </Grid>
                                        <Grid item xs={8}>
                                            <Typography variant="h5">
                                                <b>Professional of the Month</b>
                                            </Typography>
                                        </Grid>
                                        <Grid item>
                                            <EmojiEventsTwoToneIcon color="warning" sx={{fontSize:"3rem"}}/> 
                                        </Grid>
                                    </Grid>
                                </Grid>
                                <Grid item xs={12} sx={{ backgroundColor: '#4D4B4D', borderRadius: '0 0 4px 4px', border: '2px solid black'}}>
                                    <Grid item textAlign="center" xs={12} sx={{margin: '1.5rem'}}>
                                        <Typography variant="h3">
                                            Sign Up
                                        </Typography>
                                    </Grid>
                                    <Grid item textAlign="center" xs={12} sx={{marginTop: '1.5rem', marginLeft: '1.5rem', marginRight: '1.5rem'}}>
                                        <CssTextField
                                            fullWidth
                                            required
                                            label="Enterprise Name"
                                        />
                                    </Grid>
                                    <Grid item textAlign="center" xs={12} sx={{marginTop: '1rem', marginLeft: '1.5rem', marginRight: '1.5rem'}}>
                                        <CssTextField
                                            fullWidth
                                            required
                                            label="Email"
                                        />
                                    </Grid>
                                    <Grid item textAlign="center" xs={12} sx={{marginTop: '1rem', marginLeft: '1.5rem', marginRight: '1.5rem', marginBottom: '1.5rem'}}>
                                        <Button color="success" variant="contained" fullWidth  sx={{ height: '3rem'}}>Sign Up</Button>
                                    </Grid>
                                    <Grid item textAlign="center" xs={12} sx={{marginTop: '1rem', marginLeft: '1.5rem', marginRight: '1.5rem', marginBottom: '1.5rem'}}>
                                        <Link to="/login">
                                            <Button variant="outlined" fullWidth color="inherit" sx={{ height: '3rem'}}>Login</Button>
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
 
export default Signup;