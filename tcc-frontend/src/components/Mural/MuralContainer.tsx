import { Card, CardContent, CardHeader, FormControl, Grid, styled, TextField } from "@mui/material";
import { Component } from "react";
import { MuralModel } from "../../Model/MuralModel";
import DraggableList from "./DraggableList";

interface MuralCardProps {
}
 
interface MuralCardState {
}

const listMural: Array<MuralModel> = [
    {
        id:1,
        name: 'Mural teste',
        enterpriseId: 1,
        listMuralItem: [
            {
                id: 1,
                title: 'CARD 01',
                description: 'TESTE CARD 01',
                sequence: 1
            },
            {
                id: 2,
                title: 'CARD 02',
                description: 'TESTE CARD 02',
                sequence: 2
            },
            {
                id: 3,
                title: 'CARD 03',
                description: 'TESTE CARD 03',
                sequence: 3
            },
            {
                id: 4,
                title: 'CARD 04',
                description: 'TESTE CARD 04',
                sequence: 4
            },
        ]
    },
    {
        id:2,
        name: 'Mural teste',
        enterpriseId: 1
    }
]




class MuralCard extends Component<MuralCardProps, MuralCardState> {
    constructor(props: MuralCardProps) {
        super(props);
    }

    render() { 
        return (
            <Card sx={{textAlign: 'center'}}>
                    
                <CardHeader title="Mural" sx={{backgroundColor: '#4D4B4D'}}/>
                <CardContent>                        
                    <Grid container direction="row" alignItems="center" justifyContent="center">

                        <DraggableList listMural={listMural}></DraggableList>

                    </Grid>
                </CardContent>
            </Card>
        );
    }
}
 
export default MuralCard;