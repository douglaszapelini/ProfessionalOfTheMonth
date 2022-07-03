import { Card, CardContent, CardHeader, FormControl, Grid, styled, TextField } from "@mui/material";
import { Component } from "react";
import DraggableList from "./DraggableList";

interface MuralCardProps {
}
 
interface MuralCardState {
}

class MuralCard extends Component<MuralCardProps, MuralCardState> {
    constructor(props: MuralCardProps) {
        super(props);
        this.state = { showPassword: false };
    }

    render() { 
        return (
            <Card sx={{textAlign: 'center'}}>
                    
                <CardHeader title="Mural" sx={{backgroundColor: '#4D4B4D'}}/>
                <CardContent>                        
                    <Grid container direction="row" alignItems="center" justifyContent="center">

                        <DraggableList></DraggableList>

                    </Grid>
                </CardContent>
            </Card>
        );
    }
}
 
export default MuralCard;