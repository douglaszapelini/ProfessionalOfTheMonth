import { AppBar, Box, Grid, Toolbar } from "@mui/material";
import FooterComponent from "../components/Footer";
import {MenuComponent} from "../components/Menu";
import {UserCard} from "../components/UserCard";
 
export const User = () =>{
    return (
        <>
            <Box sx={{typography: 'body1', height: 'calc(100vh - 41px)' }}>
                <MenuComponent/>
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