import { Button, Card, CardContent, CardHeader, Grid } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { MuralModel } from "../../model/MuralModel";
import MuralList from "../MuralList";
import MuralModal from "../MuralModal";


const listMural: Array<MuralModel> = [
    {
        id:1,
        name: 'Mural',
        enterpriseId: 1,
        icUse: true,
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
        enterpriseId: 1,
        icUse: false
    },
    {
        id:4,
        name: 'Mural teste',
        enterpriseId: 1,
        icUse: false,
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


export const MuralContainer = () => {

    const navigate = useNavigate();

    const redirectToShowMural = () =>{
        return navigate('/showMural', {replace: true})
    }

    return (
        <>
            <Card className="notSelected" sx={{textAlign: 'center'}}>
                <Grid container textAlign="right">
                    <Button onClick={redirectToShowMural}  fullWidth color="warning" variant="contained" sx={{borderRadius:'0'}}><b>Go to Mural exibition</b></Button>
                </Grid>
                <CardHeader title="Mural" sx={{backgroundColor: '#4D4B4D'}}/>
                {listMural.length < 4 && 
                    <Grid container textAlign="right" sx={{paddingBottom:'1.5rem'}}>
                        <MuralModal isInsertModal={true}/>
                    </Grid>
                }
                {listMural.length > 0 &&
                    <CardContent>                        
                        <Grid container direction="row" alignItems="center" justifyContent="center">
                            <MuralList listMural={listMural}></MuralList>
                        </Grid>
                    </CardContent>
                }
            </Card>
        </>
    );
}