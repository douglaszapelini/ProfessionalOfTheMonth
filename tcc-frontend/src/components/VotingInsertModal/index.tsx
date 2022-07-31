import { Box, Button, Grid, Modal, TextField } from "@mui/material";
import { Component } from "react";

import {DatePicker} from '@mui/lab';

interface VotingInsertModalProps {
    
}
 
interface VotingInsertModalState {
    showModalInsert: boolean
    yearMonthInsert: Date | null
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
 
class VotingInsertModal extends Component<VotingInsertModalProps, VotingInsertModalState> {
    constructor(props: VotingInsertModalProps) {
        super(props);
        this.state = { showModalInsert: false, yearMonthInsert: new Date };
    }

    handleOpen = () => this.setState({showModalInsert: true});
    handleClose = () => this.setState({showModalInsert: false});
    
    render() { 
        return (
            <>
                <Button onClick={this.handleOpen} fullWidth color="success" sx={{borderRadius:'0'}} variant="contained" className="notSelected">Insert New Voting</Button>
                <Modal
                    open={this.state.showModalInsert}
                    onClose={this.handleClose}
                    className="notSelected"
                >
                    <Box sx={{ ...style, width: 400 }}>
                        <Grid container item>
                            <Grid item xs={12}textAlign="center" sx={{margin: '0', backgroundColor: '#4D4B4D', borderRadius: '4px'}}>
                                <h1>Insert voting</h1>
                            </Grid>
                            <Grid item sx={{paddingBottom:'0.5rem'}}>
                                <p>Fill in the field to insert a new voting...</p>
                            </Grid>
                            <Grid item textAlign="center" xs={12} sx={{paddingBottom:'0.5rem'}}>
                                <DatePicker
                                    views={['year', 'month']}
                                    label="Year and Month"
                                    minDate={new Date('2022-01-01')}
                                    maxDate={new Date('2099-12-31')}
                                    value={this.state.yearMonthInsert}
                                    onChange={(newValue) => {
                                        this.setState({yearMonthInsert: newValue});
                                    }}
                                    renderInput={(params) => <TextField {...params} helperText={null} />}
                                />
                            </Grid>
                            <Grid container sx={{paddingTop: '1rem'}}>
                                <Grid item xs={9}>
                                    <Button onClick={this.handleClose} color="error" variant="contained">
                                        Cancel
                                    </Button>
                                </Grid>
                                <Grid item>
                                    <Button onClick={this.handleClose} color="success" variant="contained">
                                        Insert
                                    </Button>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Box>
                </Modal>
            </>
        );
    }
}
 
export default VotingInsertModal;