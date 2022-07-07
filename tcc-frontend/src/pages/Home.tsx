import { AppBar, Box, Container, Toolbar } from "@mui/material";
import { Component } from "react";
import FooterComponent from "../components/FooterComponents/FooterComponent";
import HomeCard from "../components/Home/HomeCard";
import MenuComponent from "../components/MenuComponents/MenuComponent";

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
                <Box sx={{ width: '100%', typography: 'body1' }}>
                    <MenuComponent isAdmin={true}/>
                    <AppBar/>
                    <Toolbar/>
                    <Container sx={{marginTop: '1rem'}}>
                        <HomeCard></HomeCard>
                    </Container>
                    <FooterComponent/>
                </Box>

            </>    
        )
    }
}

export default Home;