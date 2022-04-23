import { Box, Button, Container, CssBaseline, IconButton, styled, TextField, Typography } from "@mui/material";
import { Component } from "react";
import ReactCardFlip from "react-card-flip";
import { CardsLogin } from "../components/CardLogin";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

interface LoginProps {
    
}
 
interface LoginState {
    isFlipped:boolean
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
 
class Login extends Component<LoginProps, LoginState> {
    constructor(props: LoginProps) {
        super(props);
        this.state = { isFlipped: true };
    }

    style = {
        paperContainer:{
            backgroundImage: `url("/images/backgroundLogin4.svg")`,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            backgroundSize: '100% 100%'
        }
    }

    handleClickFlip = () =>{
        this.setState({ isFlipped: !this.state.isFlipped})
    }

    render() { 
        return (
            <div style={this.style.paperContainer}>
                <CssBaseline/>
                <Box
                    sx={{
                        width: '100vw',
                        height: '100vh',
                        overflow: 'hidden',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}
                    >
                    <ReactCardFlip isFlipped={this.state.isFlipped} flipDirection="horizontal">
                        <CardsLogin>
                            <Container>
                                <Typography variant="h4" sx={{paddingTop: '35px', marginBottom: '35px', textAlign: 'center'}}>
                                    Login
                                </Typography>
                                <CssTextField
                                    margin="normal"
                                    required
                                    fullWidth
                                    id="email"
                                    label="Email Address"
                                    name="email"
                                    autoComplete="email"
                                    autoFocus
                                />
                                <CssTextField
                                    margin="normal"
                                    required
                                    fullWidth
                                    name="password"
                                    label="Password"
                                    type="password"
                                    id="password"
                                    autoComplete="current-password"
                                />
                                <button onClick={this.handleClickFlip}>Click to flip</button>
                            </Container>
                        </CardsLogin>
                        <CardsLogin>
                            <Container>
                                {/* HEADER */}
                                <Box sx={{ marginTop: '5%',display: 'flex', alignContent: 'center',}}>
                                    <IconButton onClick={this.handleClickFlip}>
                                        <ArrowBackIcon sx={{ fontSize: '1.8rem' }} />
                                    </IconButton>
                                    <Typography variant="h4" sx={{ marginLeft:'8%' }}>
                                        Register Entreprise
                                    </Typography>
                                </Box> 
                                 {/* Form Fields */}
                                <Box sx={{ marginTop: '10%' }}>
                                    <CssTextField
                                        margin="normal"
                                        required
                                        fullWidth
                                        id="enterpriseName"
                                        label="Enter a enterprise name"
                                        name="enterpriseName"
                                        autoComplete="enterpriseName"
                                        autoFocus
                                    />
                                    <CssTextField
                                        margin="normal"
                                        required
                                        fullWidth
                                        id="email"
                                        label="Email Address"
                                        name="email"
                                        autoComplete="email"
                                        autoFocus
                                    />
                                    <CssTextField
                                        margin="normal"
                                        required
                                        fullWidth
                                        name="password"
                                        label="Password"
                                        type="password"
                                        id="password"
                                        autoComplete="current-password"
                                    />
                                    <Button
                                        type="submit"
                                        fullWidth
                                        variant="contained"
                                        sx={{ mt: 3, mb: 2 }}
                                        >
                                        Sign Up
                                    </Button>
                                </Box>
                            </Container>
                        </CardsLogin>
                    </ReactCardFlip>
                </Box>
            </div>
        );
    }
}
 
export default Login;