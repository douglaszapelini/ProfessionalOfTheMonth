import { AppBar, Box, Card, CardContent, CardHeader, Container, Grid, Toolbar, Typography } from "@mui/material";
import { DashboardCard } from "../components/DashboardCard";
import FooterComponent from "../components/Footer";
import {MenuComponent} from "../components/Menu";

import {
    Chart as ChartJS,
    RadialLinearScale,
    PointElement,
    LineElement,
    Filler,
    Tooltip,
    Legend,
  } from 'chart.js';
  
import { Radar } from 'react-chartjs-2';
  
ChartJS.register(
    RadialLinearScale,
    PointElement,
    LineElement,
    Filler,
    Tooltip,
    Legend
);

ChartJS.defaults.color = '#ffffff';
ChartJS.defaults.borderColor = '#ffffff';

export const data = {
    labels: ['Douglas', 'Gabriel', 'Heitor', 'Roger', 'Gustavo', 'Caio',"douglas de souza zapelini"],
    datasets: [
      {
        label: '# of Votes',
        data: [8, 9, 3, 5, 2, 3,8],
        backgroundColor: 'rgba(49, 192, 244, 0.2)',
        borderColor: 'white',
        borderWidth: 1,

      },
    ],
};

const options = {
    scales:{
        r:{
            ticks: {
                backdropColor: 'rgb(0, 0, 0)',
                color: '#fff',
            },
            grid:{
                color: 'white'
            }
        }
    }
}


export const Dashboard = () => {

    return(
        <>
            <Box sx={{ width: '100%', typography: 'body1', marginBottom: '2%' }}>
                <MenuComponent isAdmin={true}/>
                <AppBar/>
                <Toolbar/>
                <Container fixed sx={{marginTop: '2%' }}>
                    <Card className="notSelected" sx={{maxWidth: '1120px', textAlign: 'center'}}>
                        <CardHeader title={"Dashboard"} sx={{backgroundColor: '#4D4B4D'}}/>
                        <CardContent>
                            <Grid container direction="row" alignItems="center" justifyContent="center">
                                <Grid item xs={3} sx={{paddingBottom: '0.8rem', display:'flex', justifyContent:'center'}}>
                                    <Grid container direction="column" alignItems="center" justifyContent="center">
                                        <DashboardCard srcAvatar="https://i.pinimg.com/originals/3d/a1/c2/3da1c204207bec1124d5a7c8f945346f.gif" title="Last Winner Month" name="Douglas de Souza Zapelini"/>
                                        <DashboardCard srcAvatar="https://i.pinimg.com/originals/3d/a1/c2/3da1c204207bec1124d5a7c8f945346f.gif" title="Last Winner Year" name="Douglas de Souza Zapelini"/>
                                        <Card sx={{border:'2px solid grey', margin: '0.5rem', backgroundColor:'#494949'}}>
                                            <CardHeader sx={{backgroundColor:'#333333'}} title="Active Mural Name"/>
                                            <CardContent >
                                                <Grid container justifyContent="center" textAlign="center">
                                                    <Grid item xs={12} sx={{display: 'flex', justifyContent: 'center', width: '14rem',}}>
                                                        <Typography variant="h6">
                                                            Mural - 01
                                                        </Typography>
                                                    </Grid>
                                                </Grid>
                                            </CardContent>
                                        </Card>
                                    </Grid>
                                </Grid>
                                <Grid item xs={9} sx={{ display:'flex', justifyContent:'center', padding: '1rem'}}>
                                    <Radar data={data} options={options}/>
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