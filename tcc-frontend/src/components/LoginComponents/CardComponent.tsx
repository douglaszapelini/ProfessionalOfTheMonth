import { Box } from "@mui/material";
import { Component } from "react";

interface CardComponentProps {
    children: any
}
 
interface CardComponentState {
    
}
 
class CardComponent extends Component<CardComponentProps, CardComponentState> {
    constructor(props: CardComponentProps) {
        super(props);
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
 
export default CardComponent;