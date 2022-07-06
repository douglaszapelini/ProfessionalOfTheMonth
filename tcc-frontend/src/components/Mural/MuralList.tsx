import { Card, CardContent, Grid, Typography } from "@mui/material";
import { Component } from "react";
import { MuralModel } from "../../Model/MuralModel";
import MuralItemCard from "../MuralItem/MuralItemCard";
import MuralItemModal from "../MuralItem/MuralItemModal";

interface MuralListProps {
    listMural: Array<MuralModel>
}
 
interface MuralListState {
    
}

class MuralList extends Component<MuralListProps, MuralListState> {
    constructor(props: MuralListProps) {
        super(props);
    }


    render() { 
        return (
            <Grid container justifyContent='center'>
                {this.props.listMural.map( mural => {
                    return(
                        <Grid item xs={3} key={mural.id}>
                            <Card>
                                <CardContent sx={{margin:"0.5rem    ", padding:"0"}}>
                                    {/* CARD HEADER*/}
                                    <Grid container sx={{margin:"0", padding:"0", backgroundColor: '#4D4B4D'}}>
                                        <Grid item xs={9} sx={{paddingLeft:'0.5rem'}}> 
                                            <Typography variant="h6">
                                                {mural.name}
                                            </Typography>
                                        </Grid>
                                        <Grid item xs={3}>
                                            <MuralItemModal isInsertModal={true}/>
                                        </Grid>
                                    </Grid>
                                    {/* CARD ITEMS */}
                                    {!!mural.listMuralItem &&
                                        <MuralItemCard listMuralItem={mural.listMuralItem} />
                                    }
                                </CardContent>

                            </Card>
                        </Grid>
                    )
                })}
            </Grid>
        );
    }
}
 
export default MuralList;