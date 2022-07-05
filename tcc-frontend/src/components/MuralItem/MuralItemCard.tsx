import { Card, CardContent, CardMedia, Grid, Typography } from "@mui/material";
import { Component } from "react";
import { MuralItemModel } from "../../Model/MuralItemModel";

interface MuralItemCardProps {
    listMuralItem: Array<MuralItemModel>
}
 
interface MuralItemCardState {
    
}

class MuralItemCard extends Component<MuralItemCardProps, MuralItemCardState> {
    constructor(props: MuralItemCardProps) {
        super(props);
    }


    render() { 
        return (
            <Grid container justifyContent='center'>
                {this.props.listMuralItem.map( muralItem => {
                    return(
                        <Card sx={{ width:'100%', marginTop: '1rem',backgroundColor: '#808080', border: '1px solid white'}}>
                            {!!muralItem.srcImage &&
                                <CardMedia
                                    component="img"
                                    image={muralItem.srcImage}
                                />
                            }
                            <CardContent>
                                {/* CARD TITLE*/}
                                <Grid sx={{backgroundColor: '#373737'}}>
                                    <Typography variant="h6">
                                        {muralItem.title}
                                    </Typography>
                                </Grid>
                                {/* CARD DESCRIPTION*/}
                                <Typography variant="body2" color="text.secondary">
                                    {muralItem.title}
                                </Typography>
                            </CardContent>

                        </Card>
                    )
                })}
            </Grid>
        );
    }
}
 
export default MuralItemCard;