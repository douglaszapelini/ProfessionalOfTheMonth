import { AppBar, Box, Container, Toolbar } from "@mui/material";
import { Component } from "react";
import MenuComponent from "../components/MenuComponents/MenuComponent";
import MuralContainer from "../components/Mural/MuralContainer";

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
                <MenuComponent isAdmin={true}/>
                <AppBar/>
                <Toolbar/>
                <Container sx={{marginTop: '2%'}}>
                    <MuralContainer></MuralContainer>
                </Container>
            </Box>
        );
    }
}
 
export default Mural;