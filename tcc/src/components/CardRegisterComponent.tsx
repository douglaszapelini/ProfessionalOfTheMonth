import { Box, Button, Container, IconButton, styled, TextField, Typography } from "@mui/material";
import { Component } from "react";
import CardComponent from "./CardComponent";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

interface CardRegisterProps {
    handleClickFlip: Function
}
 
interface CardRegisterState {
    
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
 
class CardRegister extends Component<CardRegisterProps, CardRegisterState> {
    constructor(props: CardRegisterProps) {
        super(props);
    }
    handleClick = () => {
        this.props.handleClickFlip();
    }
    render() { 
        return (
            <CardComponent>
                <Container>
                    <Box sx={{ marginTop: '5%',display: 'flex', alignContent: 'center',}}>
                        <IconButton onClick={this.handleClick}>
                            <ArrowBackIcon sx={{ fontSize: '1.8rem' }} />
                        </IconButton>
                        
                    </Box> 
                    <Typography variant="h5" sx={{ marginLeft:'28%' }}>
                        Sign Up Entreprise
                    </Typography>
                    <Box sx={{ marginTop: '3%' }}>
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
                            id="emailSignup"
                            label="Email Address"
                            name="emailSignup"
                            autoComplete="email"
                            autoFocus
                        />
                        <CssTextField
                            margin="normal"
                            required
                            fullWidth
                            name="passwordSignup"
                            label="Password"
                            type="password"
                            id="passwordSignup"
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
            </CardComponent>
        );
    }
}
 
export default CardRegister;