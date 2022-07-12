import { Card, CardContent, FormControl, FormControlLabel, Grid, Radio, RadioGroup, Tooltip, Typography } from "@mui/material";
import { Component } from "react";
import { MuralModel } from "../../model/MuralModel";
import { DeleteModal } from "../DeleteModal";
import MuralItemCard from "../MuralItemCard";
import MuralItemModal from "../MuralItemModal";
import MuralModal from "../MuralModal";

interface MuralListProps {
    listMural: Array<MuralModel>
}
 
interface MuralListState {
    listMurais: Array<MuralModel>
    muralIDActive: number;
}

class MuralList extends Component<MuralListProps, MuralListState> {
    constructor(props: MuralListProps) {
        super(props);
        const {listMural} = props;
        const mural:MuralModel | undefined = listMural.find(mural => mural.icUse === true);
        this.state = { muralIDActive: !!mural?.id ? mural.id : 0, listMurais: listMural };
    }

    handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newId = Number.parseInt((event.target as HTMLInputElement).value)
        this.setState({muralIDActive: newId});
        this.changeActive(newId);
    };

    changeActive =(newActive: number) => {
        
        const {listMurais} = this.state;
        const indexList = listMurais.findIndex(mural => mural.id === newActive);
        listMurais[indexList].icUse = true;

        const murais = listMurais.filter(mural => mural.id !== newActive).map( mural => listMurais.findIndex(item => item.id === mural.id));
        murais.forEach(mural => listMurais[mural].icUse = false);
    }

    render() { 
        return (
            <FormControl>
                <RadioGroup row value={this.state.muralIDActive} onChange={this.handleChange}>
                    <Grid container justifyContent='center'>
                        {this.state.listMurais.map( mural => {
                            return(
                                <Grid item xs={3} key={mural.id}>
                                    {/* Inativo #2E2E2E, Ativo '#A9A9A9' */}
                                    <Card sx={{backgroundColor: mural.icUse ? '#A9A9A9' : '#2E2E2E', margin:'0 0.5rem'}}>
                                        <CardContent sx={{margin:"0.5rem", padding:"0"}}>
                                            <FormControlLabel control={<Radio color="success" />} value={mural.id} label='' sx={{margin: '0'}}/>
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
                                            {/* DELETE BUTTON */}
                                            <Grid item xs={12}  sx={{width:'100%'}}>
                                                <DeleteModal item="Mural"></DeleteModal>
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
                </RadioGroup>
            </FormControl>
        );
    }
}
 
export default MuralList;