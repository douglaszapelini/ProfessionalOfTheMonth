import { AppBar, Box, Toolbar } from "@mui/material";
import FooterComponent from "../components/Footer";
import HomeCard from "../components/Home";
import {MenuComponent} from "../components/Menu";

export const Home = () =>{

    return(
        <>
            <Box className="notSelected" sx={{ width: '100%', typography: 'body1' }}>
                <MenuComponent/>
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