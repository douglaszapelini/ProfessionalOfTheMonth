import { AppBar, Box, Container, Grid, Toolbar } from "@mui/material";
import { Component } from "react";
import FooterComponent from "../components/Footer";
import {MenuComponent} from "../components/Menu";
import UserCard from "../components/UserCard";

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
                <Box sx={{typography: 'body1', height: 'calc(100vh - 41px)' }}>
                    <MenuComponent isAdmin={true}/>
                    <AppBar/>
                    <Toolbar/>
                    <Grid
                        container
                        justifyContent="center"
                        sx={{marginTop:'2%'}}
                    >
                        <UserCard></UserCard>
                    </Grid>
                </Box>
                <FooterComponent/>
            </>
        );
    }
}
 
export default Voting;