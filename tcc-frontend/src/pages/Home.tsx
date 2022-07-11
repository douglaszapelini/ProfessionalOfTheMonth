import { AppBar, Box, Toolbar } from "@mui/material";
import { Component } from "react";
import FooterComponent from "../components/Footer";
import HomeCard from "../components/Home";
import {MenuComponent} from "../components/Menu";

interface HomeProps {
}
 
interface HomeState {
    value: string
}
 
class Home extends Component<HomeProps, HomeState> {
    constructor(props: HomeProps) {
        super(props);
    }

    render() {
        return(
            <>
                <Box className="notSelected" sx={{ width: '100%', typography: 'body1' }}>
                    <MenuComponent isAdmin={true}/>
                    <AppBar/>
                    <Toolbar/>
                    <Box sx={{margin: '3rem'}}>
                        <HomeCard></HomeCard>
                    </Box>
                    <FooterComponent/>
                </Box>

            </>    
        )
    }
}

export default Home;