import { AppBar, Avatar, Box, Button, Card, CardContent, CardHeader, Container, Grid, styled, TextField, Toolbar } from "@mui/material";
import FooterComponent from "../components/Footer";
import {MenuComponent} from "../components/Menu";

const CssTextField = styled(TextField)({
    '& label.Mui-focused': {
      color: 'white',
    },
    '& .MuiOutlinedInput-root': {
      '&.Mui-focused fieldset': {
        borderColor: 'white',
      },
    },
  }
);

export const Dashboard = () => {

    return(
        <>
            <Box sx={{ width: '100%', typography: 'body1', height: 'calc(100vh - 41px)' }}>
                <MenuComponent isAdmin={true}/>
                <AppBar/>
                <Toolbar/>
                <Container fixed sx={{marginTop: '2%'}}>
                    <Card className="notSelected" sx={{maxWidth: '1120px', textAlign: 'center'}}>
                        <CardHeader title={"Dashboard"} sx={{backgroundColor: '#4D4B4D'}}/>
                        <CardContent>
                            <Grid container direction="row" alignItems="center" justifyContent="center">
                                <Grid item xs={6} sx={{paddingBottom: '0.8rem', display:'flex', justifyContent:'center'}}>
                                    <Avatar
                                        alt="Remy Sharp"
                                        src={'profileImg?.toString()'}
                                        sx={{ width: 80, height: 80 }}
                                    />
                                </Grid>
                            </Grid>
                        </CardContent>
                    </Card>
                </Container>
            </Box>            
            <FooterComponent/>
        </>
    );
}