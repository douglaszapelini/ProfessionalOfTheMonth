import { AppBar, Box, Container, Toolbar } from "@mui/material";
import { Component } from "react";
import FooterComponent from "../components/Footer";
import {MenuComponent} from "../components/Menu";
import {MuralContainer} from "../components/MuralContainer";

interface MuralProps {
    
}
 
interface MuralState {
    
}
 
class Mural extends Component<MuralProps, MuralState> {
    constructor(props: MuralProps) {
        super(props);
        // this.state = { :  };
    }
    render() { 
        return (
            <Box sx={{ width: '100%', typography: 'body1' }}>
                <MenuComponent/>
                <AppBar/>
                <Toolbar/>
                <Container sx={{marginTop: '2%', paddingBottom: '3rem'}}>
                    <MuralContainer></MuralContainer>
                </Container>
                <FooterComponent/>
            </Box>
        );
    }
}
 
export default Mural;