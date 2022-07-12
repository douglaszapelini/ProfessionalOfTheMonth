import { Box, Button, Grid, Modal } from "@mui/material";
import { useState } from "react";
import DeleteIcon from '@mui/icons-material/Delete';

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

interface DeleteModalProps {
    item: string;
}

export function DeleteModal(props: DeleteModalProps) {

    const [showModal, setShowModal] = useState(false);

    const handleOpen = () => setShowModal(true);
    const handleClose = () => setShowModal(false);

    return (
        <>
            <Button onClick={handleOpen} color="error" sx={{borderRadius:'0 0 4px 4px'}} fullWidth variant="contained"><DeleteIcon/></Button>
                <Modal
                    open={showModal}
                    onClose={handleClose}
                >
                    <Box sx={{ ...style, width: 400, borderRadius: '4px' }}>
                        <Grid container>
                            <Grid item xs={12}textAlign="center" sx={{margin: '0', backgroundColor: '#4D4B4D', borderRadius: '4px'}}>
                                <h1>Delete {props.item}</h1>
                            </Grid>
                            <Grid container sx={{padding:'0.5rem 0'}} justifyContent= 'center'>
                                <p>Do you <b>confirm</b> delete {props.item}?</p>
                            </Grid>
                            <Grid container sx={{paddingTop: '0.3rem'}} >
                                <Grid item xs={3}>
                                    <Button onClick={handleClose} color="error" variant="contained">
                                       cancel
                                    </Button>
                                </Grid>
                                <Grid item xs={9} sx={{display: 'flex', justifyContent: 'right'}}>
                                    <Button onClick={handleClose} color="success" variant="contained">
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