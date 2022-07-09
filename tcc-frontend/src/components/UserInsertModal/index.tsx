import { Box, Button, Container, FormControlLabel, Grid, Modal, styled, Switch, TextField } from "@mui/material";
import { Component } from "react";

interface UserInsertModalProps {
    
}
 
interface UserInsertModalState {
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
 
class UserInsertModal extends Component<UserInsertModalProps, UserInsertModalState> {
    constructor(props: UserInsertModalProps) {
        super(props);
        this.state = { showModalInsert: false };
    }

    handleOpen = () => this.setState({showModalInsert: true});
    handleClose = () => this.setState({showModalInsert: false});
    
    render() { 
        return (
            <>
                <Button onClick={this.handleOpen} color="success" sx={{borderRadius:'0 0 4px 4px'}} fullWidth variant="contained">Insert New User</Button>
                <Modal
                    open={this.state.showModalInsert}
                    onClose={this.handleClose}
                >
                    <Box sx={{ ...style, width: 400 }}>
                        <Grid container item>
                            <Grid item xs={12}textAlign="center" sx={{margin: '0'}}>
                                <h1>Insert User</h1>
                            </Grid>
                            <Grid item sx={{paddingBottom:'0.5rem'}}>
                                <p>Fill in the field to insert a new User...</p>
                            </Grid>
                            <Grid item textAlign="center" xs={12} sx={{paddingBottom:'0.8rem'}}>
                                <CssTextField
                                    fullWidth
                                    required
                                    id="name-input"
                                    label="Name"
                                    variant="outlined"
                                />
                            </Grid>
                            <Grid item textAlign="center" xs={12} sx={{paddingBottom:'0.8rem'}}>
                                <CssTextField
                                    fullWidth
                                    required
                                    id="email-input"
                                    label="Email"
                                    variant="outlined"
                                />
                            </Grid>
                            <Grid item textAlign="center" xs={12} sx={{paddingBottom:'0.8rem'}}>
                                <CssTextField
                                    fullWidth
                                    id="office-input"
                                    label="Office"
                                    variant="outlined"
                                />
                            </Grid>
                            <Grid item xs={12} sx={{paddingLeft: '3rem'}} >
                                <FormControlLabel
                                    value="isAdmin"
                                    control={<Switch color="success" />}
                                    label="Is Administrator?"
                                    labelPlacement="end"
                                />
                                <FormControlLabel
                                    value="isEligible"
                                    control={<Switch color="success"/>}
                                    label="Can the employee vote?"
                                    labelPlacement="end"
                                    sx={{paddingRight:'3rem'}}
                                />
                                <FormControlLabel
                                    value="isElection"
                                    control={<Switch color="success" />}
                                    label="Participe in the votation?"
                                    labelPlacement="end"
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
 
export default UserInsertModal;