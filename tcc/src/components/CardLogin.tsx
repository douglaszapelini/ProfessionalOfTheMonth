import Box from "@mui/material/Box";
import { Component } from "react";

interface CardsLoginProps {
    children:any
}
 
interface CardsLoginState {
    
}
 
export class CardsLogin extends Component<CardsLoginProps, CardsLoginState> {
    constructor(props: CardsLoginProps) {
        super(props);
        // this.state = { :  };
    }
    render() { 
        return (
            <Box
                sx={{
                    width: '35vw',
                    height: '70vh',
                    border: '3.5px solid rgba( 255, 255, 255, 0.18 )',
                    borderRadius: '10px',
                    background: "rgba( 19, 45, 70, 0.6 )",
                    backdropFilter: "blur( 2px )",
                    display: 'flex',
                    justifyContent: 'center',
                    alignItens: 'center'
                }}
            >
                {this.props.children}
            </Box>
        );
    }
}