import { Card, CardContent, CardHeader, Grid } from "@mui/material";
import { Component } from "react";
import { MuralModel } from "../../Model/MuralModel";
import MuralList from "./MuralList";
import MuralModal from "./MuralModal";

interface MuralCardProps {
}
 
interface MuralCardState {
}

const listMural: Array<MuralModel> = [
    {
        id:1,
        name: 'Mural',
        enterpriseId: 1,
        listMuralItem: [
            {
                id: 1,
                title: 'CARD 01',
                description: 'TESTE CARD 01',
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
            },
        ]
    },
    {
        id:3,
        name: 'Mural teste',
        enterpriseId: 1
    },
    {
        id:4,
        name: 'Mural teste',
        enterpriseId: 1,
        listMuralItem: [
            {
                id: 1,
                title: 'CARD 01',
                description: 'TESTE CARD 01',
                sequence: 1,
                muralId: 3,
                srcImage: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png'
            },
            {
                id: 2,
                title: 'CARD 02',
                description: 'TESTE CARD 02',
                sequence: 2,
                muralId: 3
            },
            {
                id: 3,
                title: 'CARD 03',
                description: 'TESTE CARD 03',
                sequence: 3,
                muralId: 3,
                srcImage: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png'
            },
            {
                id: 4,
                title: 'CARD 04',
                description: 'TESTE CARD 04',
                sequence: 4,
                muralId: 3,
                srcImage: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png'
            },
        ]
    }
    
]

class MuralCard extends Component<MuralCardProps, MuralCardState> {
    constructor(props: MuralCardProps) {
        super(props);
    }

    render() { 
        return (
            <>
                <Card sx={{textAlign: 'center'}}>
                    <CardHeader title="Mural" sx={{backgroundColor: '#4D4B4D'}}/>
                    {listMural.length < 4 && 
                        <Grid container textAlign="right" sx={{paddingBottom:'1.5rem'}}>
                            <MuralModal isInsertModal={true}/>
                        </Grid>
                    }
                    <CardContent>                        
                        <Grid container direction="row" alignItems="center" justifyContent="center">
                            <MuralList listMural={listMural}></MuralList>
                        </Grid>
                    </CardContent>
                </Card>
            </>
        );
    }
}
 
export default MuralCard;