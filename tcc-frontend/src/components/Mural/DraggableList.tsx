import { Card, CardHeader, Grid } from "@mui/material";
import { Component } from "react";
import { MuralModel } from "../../Model/MuralModel";

interface DraggableListProps {
    listMural: Array<MuralModel>
}
 
interface DraggableListState {
    
}

class DraggableList extends Component<DraggableListProps, DraggableListState> {
    constructor(props: DraggableListProps) {
        super(props);
    }


    render() { 
        return (
            <Grid container justifyContent='center'>
                {this.props.listMural.map( mural => {
                    return(
                        <Grid item xs={3} key={mural.id}>
                            <Card>
                                <CardHeader title={mural.name + ' - ' + mural.id}/>
                            </Card>
                        </Grid>
                    )
                })}
            </Grid>
        );
    }
}
 
export default DraggableList;