import { Card, CardContent, CardMedia, Grid, Typography } from "@mui/material";
import { MuralItemModel } from "../../model/MuralItemModel";
import EmojiEventsTwoToneIcon from '@mui/icons-material/EmojiEventsTwoTone';

interface ShowMuralItemProps{
    card: MuralItemModel
}

export const ShowMuralItem = (props: ShowMuralItemProps) => {

    const { card } = props;

    return (
        <>
            <Grid className="notSelected" container justifyContent='center'>
                <Card 
                    sx={{ 
                          width:'1100px', 
                          marginTop: '1rem',
                          backgroundColor: '#808080', 
                          border: '1px solid black',
                        }}
                >
                    <CardContent sx={{width: '1100px', height: '870px'}}>
                        {/* CARD TITLE*/}
                        <Grid sx={{backgroundColor: '#373737', borderRadius:'4px 4px 0 0'}}>
                            <Typography variant="h2">
                                {card.title}
                            </Typography>
                        </Grid>
                        {!!card.srcImage &&
                           
                                <CardMedia
                                    component="img"
                                    image={card.srcImage}
                                    sx={{ maxHeight: '39rem'}}
                                />
                        }
                        {!card.srcImage &&
                            <>
                                <Grid container justifyContent='center'  alignItems='center' sx={{backgroundColor: '#373737'}}>
                                    <Grid item >
                                        <EmojiEventsTwoToneIcon color="warning" sx={{fontSize:"3rem"}}/> 
                                    </Grid>
                                    <Grid item xs={8}>
                                        <Typography variant="h5">
                                            <b>Professional of the Month</b>
                                        </Typography>
                                    </Grid>
                                    <Grid item>
                                        <EmojiEventsTwoToneIcon color="warning" sx={{fontSize:"3rem"}}/> 
                                    </Grid>
                                </Grid>
                                <CardMedia
                                    component="img"
                                    image="https://i.pinimg.com/originals/3d/a1/c2/3da1c204207bec1124d5a7c8f945346f.gif"
                                    sx={{ maxHeight: '39rem'}}
                                />
                            </>
                        }
                    {/* CARD DESCRIPTION*/}
                        <Grid sx={{backgroundColor: '#696969', padding: '0.8rem', maxWidth: '1100px'}}>
                            <Typography variant="h4" color="text.secondary" sx={{display:'block', maxWidth: '1100px'}}>
                                {card.description}
                            </Typography>
                        </Grid>
                    </CardContent>
                    
                </Card>
            </Grid>
        </>
    );
}