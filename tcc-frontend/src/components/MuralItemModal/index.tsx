import { Box, Button, Grid, ImageListItem, Modal, styled, TextField, Tooltip } from "@mui/material";
import { Component } from "react";
import AddBoxIcon from '@mui/icons-material/AddBox';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import { MuralItemModel } from "../../model/MuralItemModel";
import EditIcon from '@mui/icons-material/Edit';

interface MuralItemModalProps {
    muralItem?: MuralItemModel,
    isInsertModal: boolean
}
 
interface MuralItemModalState {
    showModal: boolean,
    srcMuralItemImage: string | ArrayBuffer | null
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
 
class MuralItemModal extends Component<MuralItemModalProps, MuralItemModalState> {
    constructor(props: MuralItemModalProps) {
        super(props);
        this.state = { showModal: false, srcMuralItemImage: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png'};

        if(!!props.muralItem && !!props.muralItem.srcImage){
            this.state = { showModal: false, srcMuralItemImage: props.muralItem.srcImage};
        }
    }

    handleOpen = () => this.setState({showModal: true});
    handleClose = () => this.setState({showModal: false});

    imageHandler = (e : any) => {
        const reader = new FileReader();
        reader.onload = () =>{
            if(reader.readyState === 2){
                this.setState({srcMuralItemImage: reader.result})
            }
        }
        reader.readAsDataURL(e.target.files[0])
    };
    
    render() { 

        const {isInsertModal, muralItem} = this.props;

        return (
            <>
                {/* Button Insert */}
                {isInsertModal &&
                    <Tooltip title="Add New Card">
                        <Button onClick={this.handleOpen} variant="contained" fullWidth color="success" sx={{borderRadius:'0'}}>
                            <AddBoxIcon/>
                        </Button>
                    </Tooltip>
                }

                {/* Button Edit */}
                {!isInsertModal &&
                    <Tooltip title="Edit Card">
                        <Button variant="contained" onClick={this.handleOpen} fullWidth  sx={{ width: '100%'}}>
                            <EditIcon color="warning"/>
                        </Button>
                    </Tooltip>
                }

                {/* Modal */}
                <Modal
                    open={this.state.showModal}
                    onClose={this.handleClose}
                >
                    <Box sx={{ ...style, width: 400, borderRadius: '4px' }}>
                        <Grid container>
                            <Grid item xs={12} textAlign="center" sx={{margin: '0', backgroundColor: '#4D4B4D', borderRadius: '4px'}}>
                                {isInsertModal && <h1>NEW Card</h1>}
                                {!isInsertModal && <h1>EDIT Card</h1>}
                            </Grid>
                            <Grid item sx={{padding:'0.5rem 0'}}>
                                {isInsertModal && <p>Fill in the field to insert a new CARD...</p>}
                                {!isInsertModal && <p>Fill in the field to edit a new CARD...</p>}
                            </Grid>
                            <Grid item xs={12} >

                                {/* Title */}
                                <CssTextField
                                    fullWidth
                                    id="mural-item-title-input"
                                    label="Title Card"
                                    variant="outlined"
                                    required
                                    defaultValue={!isInsertModal && !!muralItem ? muralItem.title : ""}
                                    contentEditable
                                    sx={{paddingBottom: '1rem'}}
                                    inputProps={{ maxLength: 25 }}
                                />

                                {/* IMAGE */}
                                <Box
                                    sx={{height: 'auto', marginBottom: '1rem', maxHeight:'20rem', overflow: 'hidden'}}
                                >
                                     <ImageListItem  sx={{ width:'100%', height: 'auto', maxHeight:'20rem', border: '1px solid white', borderRadius:'4px', }} cols={1}>
                                        <img src={this.state.srcMuralItemImage?.toString()} alt="Image Mural Card" />
                                     </ImageListItem >
                                </Box>
                                {/* Input Image */}
                                <label htmlFor="input-file">
                                    <input type="file" name="input-file" style={{ display: 'none', }} id="input-file" accept="image/*" onChange={this.imageHandler}/>
                                    <Grid container>
                                        <Button color="success" variant="contained" component="span" sx={{width:'100%'}}>
                                            <Grid item>
                                                <AddPhotoAlternateIcon/>
                                            </Grid>
                                            <Grid item sx={{paddingLeft:'0.5rem'}}>
                                                Insert a image on card...
                                            </Grid>
                                        </Button>
                                    </Grid>
                                </label>

                                {/* Description */}
                                <CssTextField
                                    fullWidth
                                    id="mural-item-description-input"
                                    label="Description Card"
                                    variant="outlined"
                                    multiline
                                    defaultValue={!isInsertModal && !!muralItem ? muralItem.description : ""}
                                    required
                                    maxRows={4}
                                    sx={{marginTop: '1rem'}}
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
                                        {isInsertModal && 'Insert'}
                                        {!isInsertModal && 'Save'}
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
 
export default MuralItemModal;