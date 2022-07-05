import { Box, Button, Container, Grid, Modal, styled, TextField } from "@mui/material";
import { Component } from "react";

interface MuralInsertModalProps {
    
}
 
interface MuralInsertModalState {
    showModalInsert: boolean
}


const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #FFF',
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
 
class MuralInsertModal extends Component<MuralInsertModalProps, MuralInsertModalState> {
    constructor(props: MuralInsertModalProps) {
        super(props);
        this.state = { showModalInsert: false};
    }

    handleOpen = () => this.setState({showModalInsert: true});
    handleClose = () => this.setState({showModalInsert: false});
    
    render() { 
        return (
            <Container>
                <Button onClick={this.handleOpen} color="success" variant="contained">Insert New Mural</Button>
                <Modal
                    open={this.state.showModalInsert}
                    onClose={this.handleClose}
                >
                    <Box sx={{ ...style, width: 400, borderRadius: '4px' }}>
                        <Grid container item>
                            <Grid item xs={12} textAlign="center" sx={{margin: '0', backgroundColor: '#4D4B4D', borderRadius: '4px'}}>
                                <h1>NEW Mural</h1>
                            </Grid>
                            <Grid item sx={{padding:'0.5rem 0'}}>
                                <p>Fill in the field to insert a new mural...</p>
                            </Grid>
                            <Grid item xs={12} >
                                <CssTextField
                                    fullWidth
                                    id="mural-name-input"
                                    label="Mural name"
                                    variant="outlined"
                                    inputProps={{ maxLength: 25 }}
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
            </Container>
        );
    }
}
 
export default MuralInsertModal;