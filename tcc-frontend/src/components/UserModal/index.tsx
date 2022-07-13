import { Box, Button, FormControlLabel, Grid, Modal, styled, Switch, TextField } from "@mui/material";
import { Component } from "react";
import { UserModel } from "../../model/UserModel";
import EditIcon from '@mui/icons-material/Edit';

interface UserModalProps {
    user?: UserModel;
}
 
interface UserModalState {
    showModal: boolean
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
 
class UserModal extends Component<UserModalProps, UserModalState> {
    constructor(props: UserModalProps) {
        super(props);
        this.state = { showModal: false };
    }

    handleOpen = () => this.setState({showModal: true});
    handleClose = () => this.setState({showModal: false});
    
    render() { 

        const { user } = this.props;
        const isUpdate = !!user;

        return (
            <>  
                {isUpdate && <Button color= 'warning' onClick={this.handleOpen}  size="small"variant="outlined"><EditIcon/></Button>}
                {!isUpdate && <Button onClick={this.handleOpen} color="success" sx={{borderRadius:'0 0 4px 4px'}} fullWidth variant="contained">Insert New User</Button>}
                <Modal
                    open={this.state.showModal}
                    onClose={this.handleClose}
                >
                    <Box sx={{ ...style, width: 400 }}>
                        <Grid container item>
                            <Grid item xs={12}textAlign="center" sx={{margin: '0'}}>
                                {!isUpdate &&  <h1>Insert User</h1>}
                                {isUpdate &&  <h1>Edit User</h1>}
                            </Grid>
                            <Grid item sx={{paddingBottom:'0.5rem'}}>
                                {!isUpdate &&  <p>Fill in the field to insert a new User...</p>}
                                {!isUpdate &&  <p>Fill in the field to update User...</p>}
                            </Grid>
                            <Grid item textAlign="center" xs={12} sx={{paddingBottom:'0.8rem'}}>
                                <CssTextField
                                    fullWidth
                                    required
                                    id="name-input"
                                    label="Name"
                                    defaultValue={isUpdate && !!user ? user.name : ""}
                                    variant="outlined"
                                />
                            </Grid>
                            <Grid item textAlign="center" xs={12} sx={{paddingBottom:'0.8rem'}}>
                                <CssTextField
                                    fullWidth
                                    required
                                    id="email-input"
                                    label="Email"
                                    defaultValue={isUpdate && !!user ? user.email : ""}
                                    variant="outlined"
                                />
                            </Grid>
                            <Grid item textAlign="center" xs={12} sx={{paddingBottom:'0.8rem'}}>
                                <CssTextField
                                    fullWidth
                                    id="office-input"
                                    label="Office"
                                    defaultValue={isUpdate && !!user ? user.office : ""}
                                    variant="outlined"
                                />
                            </Grid>
                            <Grid item xs={12} sx={{paddingLeft: '3rem'}} >
                                <FormControlLabel
                                    value="isAdmin"
                                    control={<Switch color="success" checked={isUpdate && !!user ? user.icAdmin : false} />}
                                    label="Is Administrator?"
                                    labelPlacement="end"
                                />
                                <FormControlLabel
                                    value="isUse"
                                    control={<Switch color="success" checked={isUpdate && !!user ? user.icUse : true} />}
                                    label="Active?"
                                    labelPlacement="end"
                                />
                                <FormControlLabel
                                    value="isEligible"
                                    control={<Switch color="success" checked={isUpdate && !!user ? user.icEligible : false}/>}
                                    label="Can the employee vote?"
                                    labelPlacement="end"
                                    sx={{paddingRight:'3rem'}}
                                />
                                <FormControlLabel
                                    value="isElection"
                                    control={<Switch color="success" checked={isUpdate && !!user ? user.icElection : false} />}
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
 
export default UserModal;