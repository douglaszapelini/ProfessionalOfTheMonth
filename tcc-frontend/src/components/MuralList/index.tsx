import { Card, CardContent, Grid, Tooltip, Typography } from "@mui/material";
import { Component } from "react";
import { MuralModel } from "../../model/MuralModel";
import MuralItemCard from "../MuralItemCard";
import MuralItemModal from "../MuralItemModal";
import MuralModal from "../MuralModal";

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
                            {/* Inativo #2E2E2E, Ativo '#A9A9A9' */}
                            <Card sx={{backgroundColor: '#A9A9A9', margin:'0 0.5rem'}}>
                                <CardContent sx={{margin:"0.5rem", padding:"0"}}>
                                    {/* CARD HEADER*/}
                                    <Grid container sx={{margin:"0", padding:"0", backgroundColor: '#4D4B4D', borderRadius:'4px 4px 0 0'}}>
                                        {/* CARD TITLE */}
                                        <Grid item xs={12}> 
                                            <Typography variant="h6">
                                                {mural.name}
                                            </Typography>
                                        </Grid>
                                        {/* EDIT BUTTON */}
                                        <Grid item xs={12}  sx={{width:'100%'}}>
                                            <MuralModal isInsertModal={false} mural={mural}></MuralModal>
                                        </Grid>
                                        {/* INSERT CARD BUTTON */}
                                        <Grid item xs={12 }  sx={{width:'100%'}}>
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