import { AppBar, Box, Container, Toolbar } from "@mui/material";
import { Component } from "react";
import FooterComponent from "../components/FooterComponents/FooterComponent";
import MenuComponent from "../components/MenuComponents/MenuComponent";
import MuralCard from "../components/Mural/MuralCard";

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
                <Container sx={{marginTop: '2%', paddingBottom: '3rem'}}>
                    <MuralCard></MuralCard>
                </Container>
                <FooterComponent/>
            </Box>
        );
    }
}
 
export default Mural;