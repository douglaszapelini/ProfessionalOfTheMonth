import { Component } from "react";

import {Box, 
    Button, 
    Checkbox, 
    Container, 
    FormControlLabel, 
    styled, 
    TextField, 
    Typography } from "@mui/material";
import CardComponent from "./CardComponent";
interface CardLoginProps {
    handleClickFlip: Function
}
 
interface CardLoginState {
    
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
class CardLogin extends Component<CardLoginProps, CardLoginState> {
    constructor(props: CardLoginProps) {
        super(props);
    }
    
    handleClick = () => {
        this.props.handleClickFlip();
    }

    render() { 
        return (
            <CardComponent>
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
                    <FormControlLabel
                        control={
                            <Checkbox value="remember" color="default"/>
                        }
                        label="Remember me"
                    />
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                        >
                        Login
                    </Button>
                    <Box sx={{display: 'flex', justifyContent: 'right', cursor: 'pointer'}} > 
                        <Typography variant="button" onClick={this.handleClick}>
                            Don't have an enterprise account? Sign Up
                        </Typography>
                    </Box>
                </Container>
            </CardComponent>
        );
    }
}

export default CardLogin;