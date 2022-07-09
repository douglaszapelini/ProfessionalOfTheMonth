import { AppBar, Box, Card, CardContent, Container, Toolbar } from "@mui/material"
import FooterComponent from "../components/Footer"
import MenuComponent from "../components/Menu"



export const Settings = () => {

    return(
        <>
            <Box sx={{ width: '100%', typography: 'body1', height: 'calc(100vh - 41px)' }}>
                <MenuComponent isAdmin={true}/>
                <AppBar/>
                <Toolbar/>
                <Container sx={{marginTop: '2%', paddingBottom: '3rem'}}>
                    <Card>
                        <CardContent>
                            
                        </CardContent>
                    </Card>
                </Container>
            </Box>
            <FooterComponent/>
        </>
    )
}