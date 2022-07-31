import { Box, Button, Grid, Modal, styled, TextField } from "@mui/material";
import { Component } from "react";
import { ParticipantsCardModel } from "../../model/ParticipantsCardModel";

interface VoteModalProps {
    participant: ParticipantsCardModel
}
 
interface VoteModalState {
    showModalInsert: boolean
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

const CssTextField = styled(TextField)({
    '& label.Mui-focused': {
      color: 'white',
    },
    '& .MuiOutlinedInput-root': {
      '&.Mui-focused fieldset': {
        borderColor: 'white',
      },
    },
  }
);
 
class VoteModal extends Component<VoteModalProps, VoteModalState> {
    constructor(props: VoteModalProps) {
        super(props);
        this.state = { showModalInsert: false };
    }

    handleOpen = () => this.setState({showModalInsert: true});
    handleClose = () => this.setState({showModalInsert: false});
    
    render() { 
        
        const { participant } = this.props;

        return (
            <>
                <Button onClick={this.handleOpen} color="success" sx={{borderRadius:'4px 4px 0 0'}} fullWidth variant="contained" className="notSelected">VOTE</Button>
                <Modal
                    className="notSelected"
                    open={this.state.showModalInsert}
                    onClose={this.handleClose}
                >
                    <Box sx={{ ...style, width: 400, borderRadius: '4px' }}>
                        <Grid container>
                            <Grid item xs={12}textAlign="center" sx={{margin: '0', backgroundColor: '#4D4B4D', borderRadius: '4px'}}>
                                <h1>VOTE</h1>
                            </Grid>
                            <Grid container sx={{padding:'0.5rem 0'}} justifyContent= 'center'>
                                <p>Do you <b>confirm</b> vote to {participant.username}?</p>
                            </Grid>
                            <Grid container sx={{paddingTop: '0.3rem'}} >
                                <Grid item xs={3}>
                                    <Button onClick={this.handleClose} color="error" variant="contained">
                                       no
                                    </Button>
                                </Grid>
                                <Grid item xs={9} sx={{display: 'flex', justifyContent: 'right'}}>
                                    <Button onClick={this.handleClose} color="success" variant="contained">
                                        confirm
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
 
export default VoteModal;