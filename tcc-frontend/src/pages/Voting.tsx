import { Box, Button, Container, Grid, Modal, TextField, Toolbar } from "@mui/material";
import { Component } from "react";
import MenuComponent from "../components/MenuComponents/MenuComponent";

import {DatePicker} from '@mui/lab';
import VotingCard from "../components/VotingComponents/VotingCard";

interface VotingProps {
    
}
 
interface VotingState {
    showModalInsert: boolean
    monthYearInsert: Date | null
}


const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};
 
class Voting extends Component<VotingProps, VotingState> {
    constructor(props: VotingProps) {
        super(props);
        this.state = { showModalInsert: false, monthYearInsert: new Date };
    }

    handleOpen = () => this.setState({showModalInsert: true});
    handleClose = () => this.setState({showModalInsert: false});
    hundleMonthYearInsert = ( newMonthYearInsert:Date ) =>{
        this.setState({monthYearInsert: newMonthYearInsert});
    }

    render() { 
        return (
            
            <Box sx={{ width: '100%', typography: 'body1' }}>
                <MenuComponent isAdmin={true}/>
                <Toolbar/>
                <Container fixed sx={{marginTop: '2%'}}>
                    <VotingCard></VotingCard>
                    <Button onClick={this.handleOpen} color="success" variant="contained">Insert New Voting</Button>
                    <Modal
                        open={this.state.showModalInsert}
                        onClose={this.handleClose}
                    >
                        <Box sx={{ ...style, width: 400 }}>
                            <Grid container item>
                                <Grid xs={12}textAlign="center">
                                    <h2>Insert voting</h2>
                                </Grid>
                                <Grid item sx={{paddingBottom:'0.5rem'}}>
                                    <p>Fill in the field to insert a new voting...</p>
                                </Grid>
                                <Grid item>
                                    <DatePicker
                                        views={['year', 'month']}
                                        label="Year and Month"
                                        minDate={new Date('2000-01-01')}
                                        maxDate={new Date('2099-12-31')}
                                        value={this.state.monthYearInsert}
                                        onChange={(newValue) => {
                                            this.setState({monthYearInsert: newValue});
                                        }}
                                        renderInput={(params) => <TextField {...params} helperText={null} />}
                                    />
                                </Grid>
                                <Grid container sx={{paddingTop: '0.5rem'}}>
                                    <Grid item xs={9}>
                                        <Button onClick={this.handleClose} color="error">
                                            Cancel
                                        </Button>
                                    </Grid>
                                    <Grid item>
                                        <Button onClick={this.handleClose} color="success">
                                            Insert
                                        </Button>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Box>
                    </Modal>
                </Container>
            </Box>
        );
    }
}
 
export default Voting;