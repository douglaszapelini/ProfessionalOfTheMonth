import { AppBar, Box, Container, Toolbar } from "@mui/material";
import { Component } from "react";
import FooterComponent from "../components/Footer/FooterComponent";
import MenuComponent from "../components/Menu/MenuComponent";
import VotingCard from "../components/Voting/VotingCard";

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
            <Box sx={{ width: '100%', typography: 'body1' }}>
                <MenuComponent isAdmin={true}/>
                <AppBar/>
                <Toolbar/>
                <Container sx={{marginTop: '2%'}}>
                    <VotingCard></VotingCard>
                </Container>
                <FooterComponent/>
            </Box>
        );
    }
}
 
export default Voting;