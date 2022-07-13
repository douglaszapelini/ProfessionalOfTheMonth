import { Avatar, Card, CardContent, CardHeader, Grid, Typography } from "@mui/material";

interface DashboardCardProps{
    srcAvatar: string;
    title: string;
    name: string;
}

export function DashboardCard(props: DashboardCardProps) {
    
    return (
        <Card sx={{border:'2px solid grey', margin: '0.5rem'}}>
            <CardHeader title={props.title} sx={{backgroundColor:'#333333'}}/>
            <CardContent sx={{backgroundColor:'#494949'}}>
                <Grid container justifyContent="center" textAlign="center">
                        <Grid item xs={12} sx={{display: 'flex', justifyContent: 'center'}}>
                            <Avatar src={props.srcAvatar} sx={{width: '10rem', height: '10rem'}}/>
                        </Grid>
                        <Grid item xs={12} sx={{ marginTop:'1rem', display: 'flex', justifyContent: 'center'}}>
                            <Typography variant="body1">{props.name}</Typography>
                        </Grid>
                </Grid>
            </CardContent>
        </Card>
    );
}