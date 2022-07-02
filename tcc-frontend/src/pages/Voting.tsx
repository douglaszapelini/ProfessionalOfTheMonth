import { AppBar, Box, Container, Toolbar } from "@mui/material";
import { Component } from "react";
import MenuComponent from "../components/MenuComponents/MenuComponent";
import VotingCard from "../components/VotingComponents/VotingCard";

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
                <Container fixed sx={{marginTop: '2%'}}>
                    <VotingCard></VotingCard>
                </Container>
            </Box>
        );
    }
}
 
export default Voting;