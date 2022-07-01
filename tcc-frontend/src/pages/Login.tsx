import {Box, 
        CssBaseline, 
        styled, 
        TextField } from "@mui/material";
import { Component } from "react";
import CardLogin from "../components/LoginComponents/CardLoginComponent";
import CardRegister from "../components/LoginComponents/CardRegisterComponent";

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
        this.state = { isFlipped: false };
    }

    style = {
        paperContainer:{
            backgroundImage: `url("/images/backgroundLogin.svg")`,
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
                    {/* <ReactCardFlip isFlipped={this.state.isFlipped} flipDirection="horizontal"> */}
                        <CardLogin handleClickFlip={this.handleClickFlip}/>
                        <CardRegister handleClickFlip={this.handleClickFlip}/>
                    {/* </ReactCardFlip> */}
                </Box>
            </div>
        );
    }
}
 
export default Login;