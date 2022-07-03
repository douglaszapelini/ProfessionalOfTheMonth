import { Card, Grid } from "@mui/material";
import { Component } from "react";

interface DraggableListProps {
    
}
 
interface DraggableListState {
    
}
 
class DraggableList extends Component<DraggableListProps, DraggableListState> {
    constructor(props: DraggableListProps) {
        super(props);
        // this.state = { :  };
    }
    render() { 
        return ( 
            <>
                <Grid container justifyContent='center'>
                    <Grid item xs={3}>
                        <Card>
                            Mural - 1
                        </Card>
                    </Grid>
                </Grid>

            </>
        );
    }
}
 
export default DraggableList;