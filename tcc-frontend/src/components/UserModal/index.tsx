import { Box, Button, FormControlLabel, Grid, Modal, styled, Switch, TextField } from "@mui/material";
import { useState } from "react";
import { UserModel } from "../../model/UserModel";
import EditIcon from '@mui/icons-material/Edit';

interface UserModalProps {
    user?: UserModel;
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
 
export const UserModal = (props: UserModalProps) => {
    
    const {user} = props;
    const isUpdate = !!user;
    
    const [showModal, setShowModal] = useState(false);
    const [userData, setUseData] = useState<UserModel>({
        id: isUpdate ? user.id : new Number(), 
        name: isUpdate ? user.name : "", 
        email:  isUpdate ? user.email :"", 
        office: isUpdate ? user.office : "", 
        enterpriseId:  isUpdate ? user.enterpriseId : new Number(), 
        icAdmin:  isUpdate ? user.icAdmin : false, 
        icUse: isUpdate ? user.icUse : true, 
        icEligible: isUpdate ? user.icEligible : false, 
        icElection:  isUpdate ? user.icElection : false, 
        icFirstAccess:  isUpdate ? user.icFirstAccess : true
    });

    const handleOpen = () => setShowModal(true);
    const handleClose = () => setShowModal(false);
    const handleAdmin = () =>{ setUseData({...userData, icAdmin:!userData.icAdmin});}
    const handleUse = () =>{ setUseData({...userData, icUse:!userData.icUse});}
    const handleEligible = () =>{ setUseData({...userData, icEligible:!userData.icEligible});}
    const handleElection = () =>{ setUseData({...userData, icElection:!userData.icElection});}

    return (
        <>  
            {isUpdate && <Button color= 'warning' onClick={handleOpen}  size="small"variant="outlined"><EditIcon/></Button>}
            {!isUpdate && <Button onClick={handleOpen} color="success" sx={{borderRadius:'0 0 4px 4px'}} fullWidth variant="contained">Insert New User</Button>}
            <Modal
                open={showModal}
                onClose={handleClose}
            >
                <Box sx={{ ...style, width: 400 }}>
                    <Grid container item>
                        <Grid item xs={12}textAlign="center" sx={{margin: '0', backgroundColor: '#4D4B4D', borderRadius: '4px'}}>
                            {!isUpdate &&  <h1>Insert User</h1>}
                            {isUpdate &&  <h1>Edit User</h1>}
                        </Grid>
                        <Grid item sx={{paddingBottom:'0.5rem'}}>
                            {!isUpdate &&  <p>Fill in the field to insert a new User...</p>}
                            {isUpdate &&  <p>Fill in the field to update User...</p>}
                        </Grid>
                        <Grid item textAlign="center" xs={12} sx={{paddingBottom:'0.8rem'}}>
                            <CssTextField
                                fullWidth
                                required
                                id="name-input"
                                label="Name"
                                defaultValue={userData.name}
                                variant="outlined"
                            />
                        </Grid>
                        <Grid item textAlign="center" xs={12} sx={{paddingBottom:'0.8rem'}}>
                            <CssTextField
                                fullWidth
                                required
                                id="email-input"
                                label="Email"
                                defaultValue={userData.email}
                                variant="outlined"
                            />
                        </Grid>
                        <Grid item textAlign="center" xs={12} sx={{paddingBottom:'0.8rem'}}>
                            <CssTextField
                                fullWidth
                                id="office-input"
                                label="Office"
                                defaultValue={userData.office}
                                variant="outlined"
                            />
                        </Grid>
                        <Grid item xs={12} sx={{paddingLeft: '3rem'}} >
                            <FormControlLabel
                                value="isAdmin"
                                control={<Switch color="success" checked={userData.icAdmin} />}
                                label="Is Administrator?"
                                labelPlacement="end"
                                onChange={handleAdmin}
                            />
                            <FormControlLabel
                                value="isUse"
                                control={<Switch color="success" checked={userData.icUse} />}
                                label="Active?"
                                labelPlacement="end"
                                onChange={handleUse}
                            />
                            <FormControlLabel
                                value="isEligible"
                                control={<Switch color="success" checked={userData.icEligible}/>}
                                label="Can the employee vote?"
                                labelPlacement="end"
                                sx={{paddingRight:'3rem'}}
                                onChange={handleEligible}
                            />
                            <FormControlLabel
                                value="isElection"
                                control={<Switch color="success" checked={userData.icElection} />}
                                label="Participe in the votation?"
                                labelPlacement="end"
                                onChange={handleElection}
                            />
                        </Grid>
                        <Grid container sx={{paddingTop: '1rem'}}>
                            <Grid item xs={9}>
                                <Button onClick={handleClose} color="error" variant="contained">
                                    Cancel
                                </Button>
                            </Grid>
                            <Grid item>
                                <Button onClick={handleClose} color="success" variant="contained">
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