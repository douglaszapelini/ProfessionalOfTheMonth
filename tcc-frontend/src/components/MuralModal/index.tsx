import { Box, Button, Grid, Modal, styled, TextField, Tooltip } from "@mui/material";
import { Component } from "react";
import EditIcon from '@mui/icons-material/Edit';
import { MuralModel } from "../../model/MuralModel";

interface MuralModalProps {
    isInsertModal: boolean
    mural?: MuralModel
}
 
interface MuralModalState {
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
 
class MuralModal extends Component<MuralModalProps, MuralModalState> {
    constructor(props: MuralModalProps) {
        super(props);
        this.state = { showModalInsert: false};
    }

    handleOpen = () => this.setState({showModalInsert: true});
    handleClose = () => this.setState({showModalInsert: false});
    
    render() { 

        const {isInsertModal, mural} = this.props;

        return (
            <>

                {/* INSERT BUTTON */}
                {isInsertModal && <Button onClick={this.handleOpen}  fullWidth color="success" variant="contained" sx={{borderRadius:'0 0 4px 4px'}}>Insert New Mural</Button>}
                
                {/* EDIT BUTTON */}
                {!isInsertModal && 
                    <Tooltip title="Edit Mural">
                        <Button variant="contained" onClick={this.handleOpen} fullWidth sx={{borderRadius:'0'}}>
                            <EditIcon color="warning"/>
                        </Button>
                    </Tooltip>
                }
                
                <Modal
                    open={this.state.showModalInsert}
                    onClose={this.handleClose}
                >
                    <Box sx={{ ...style, width: 400, borderRadius: '4px' }}>
                        <Grid container item>
                            <Grid item xs={12} textAlign="center" sx={{margin: '0', backgroundColor: '#4D4B4D', borderRadius: '4px'}}>
                                {isInsertModal && <h1>NEW Mural</h1>}
                                {!isInsertModal && <h1>EDIT Mural</h1>}
                            </Grid>
                            <Grid item sx={{padding:'0.5rem 0'}}>
                                {isInsertModal &&  <p>Fill in the field to insert a new mural...</p>}
                                {!isInsertModal &&  <p>Fill in the field to edit mural...</p>}
                            </Grid>
                            <Grid item xs={12} >
                                <CssTextField
                                    fullWidth
                                    id="mural-name-input"
                                    label="Mural name"
                                    variant="outlined"
                                    defaultValue={!isInsertModal && !!mural ? mural.name : ""}
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
            </>
        );
    }
}
 
export default MuralModal;