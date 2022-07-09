import { AppBar, Box, Container, Toolbar } from "@mui/material";
import { Component } from "react";
import FooterComponent from "../components/Footer";
import MenuComponent from "../components/Menu";
import VotingCard from "../components/VotingCard";

interface VotingProps {
    
}
 
interface VotingState {
    
}
 
class Voting extends Component<VotingProps, VotingState> {
    constructor(props: VotingProps) {
        super(props);
        // this.state = { :  };
    }
    render() { 
        return (
            <>
                <Box sx={{ width: '100%', typography: 'body1', height: 'calc(100vh - 41px)' }}>
                    <MenuComponent isAdmin={true}/>
                    <AppBar/>
                    <Toolbar/>
                    <Container sx={{marginTop: '2%'}}>
                        <VotingCard></VotingCard>
                    </Container>
                </Box>
                <FooterComponent/>
            </>
        );
    }
}
 
export default Voting;