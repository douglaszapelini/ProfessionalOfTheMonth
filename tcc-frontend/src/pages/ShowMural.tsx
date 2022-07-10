import { Box, Card, CardContent, CardMedia, Container, Grid, Typography } from "@mui/material";
import { Carousel } from "react-responsive-carousel";
import FooterComponent from "../components/Footer";
import { ShowMuralItem } from "../components/ShowMuralItem/ShowMuralItem";
import { MuralItemModel } from "../model/MuralItemModel";
import { MuralModel } from "../model/MuralModel";

import 'react-responsive-carousel/lib/styles/carousel.css';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const mural: MuralModel = {
    id:1,
    name: 'Mural',
    enterpriseId: 1,
    listMuralItem: [
        {
            id: 1,
            title: 'CARD 01',
            description: 'treste \n asasdasdasdaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
            sequence: 1,
            muralId: 1,
            srcImage: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png'
        },
        {
            id: 2,
            title: 'CARD 02',
            description: 'TESTE CARD 02',
            sequence: 2,
            muralId: 1
        },
        {
            id: 3,
            title: 'CARD 03',
            description: 'TESTE CARD 03',
            sequence: 3,
            muralId: 1,
            srcImage: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png'
        },
        {
            id: 4,
            title: 'CARD 04',
            description: 'TESTE CARD 04',
            sequence: 4,
            muralId: 1,
            srcImage: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png'
        }
    ]
}

export const ShowMural = () => {

    const listCards: Array<MuralItemModel> | undefined = mural.listMuralItem;

    return (
        <>
            <Box sx={{ typography: 'body1', height: 'calc(100vh - 41px)', overflow:'hidden'}}>
                <Container sx={{marginTop: '2%', paddingBottom: '3rem'}} >
                    <Grid container justifyContent='center'>

                        {!!listCards &&
                            <Carousel 
                                showArrows={false} 
                                showStatus={false} 
                                transitionTime={800} 
                                showThumbs={false}
                                showIndicators={true} 
                                infiniteLoop={true} 
                                dynamicHeight={false} 
                                autoPlay={true} 
                                interval={2000}
                            >
                                {listCards.map(card =>{
                                    return(
                                        <ShowMuralItem key={card.id} card={card}></ShowMuralItem>
                                    );                                    
                                })}
                            </Carousel>
                        }

                        {!listCards &&
                            <Card sx={{width: '100%'}}>
                                <CardContent>
                                    <Grid container justifyContent= 'center'  alignItems='center'>
                                        <Grid item>
                                            <Typography variant='h3'>There isn't any mural avaible to you right now.</Typography>
                                        </Grid>
                                        <Grid item>
                                            <Typography variant='h3'>Please, insert de cards on mural! 😄 </Typography>
                                        </Grid>
                                    </Grid>
                                </CardContent>
                            </Card>
                        }
                    </Grid>
                </Container>
            </Box>
            <FooterComponent/>
        </>
    );
}