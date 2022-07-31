import {Alert, Backdrop, Box, Button, Card, CardContent, CircularProgress, Grid, Snackbar, styled, TextField, Typography} from "@mui/material";
import EmojiEventsTwoToneIcon from '@mui/icons-material/EmojiEventsTwoTone';
import FooterComponent from "../components/Footer";
import { Link, useNavigate } from "react-router-dom";
import { api } from "../services/api/api";
import { useState } from "react";


const CssTextField = styled(TextField)({
    '& label.Mui-focused': {
        color: 'white',
    },
    '& .MuiOutlinedInput-root': {
        '&.Mui-focused fieldset': {
        borderColor: 'white',
        },
    },
});
export const Signup = () => {

    const navigate = useNavigate();

    const [loading, setLoading] = useState(false);
    const [showAlert, setShowAlert] = useState(false);

    const handleSubmit = async (event:any) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        setLoading(true);
        try{
            await api.post("enterprise/insert", {email: data.get('email'),name: data.get('name')})
                    .then(() =>{
                        return navigate('/login', {replace: true});
                    })
                    .finally(() =>{
                        setLoading(false);
                    });
        }catch(err){
            setShowAlert(true);
            setLoading(false);
        }
    };

    const handleClose = () => {
        setShowAlert(false);
        setLoading(false);
    };

    return (
        <>
        <Snackbar open={showAlert} autoHideDuration={6000} onClose={handleClose} anchorOrigin={{vertical:'top' , horizontal:'center'}}>
            <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
                    Incorrect name or email!
            </Alert>
        </Snackbar>
        <Backdrop
            sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
            open={loading}
            onClick={handleClose}
        >
            <>
                <Grid container justifyContent="center" className="notSelected">
                    <Grid item xs={12} sx={{marginBottom: '1rem'}}>
                        <Typography variant="h6" sx={{ textAlign: 'center' }}>Loading...</Typography>
                    </Grid>
                    <Grid item>
                        <CircularProgress color="inherit" />
                    </Grid>
                </Grid>
            </>
        </Backdrop>
        <Grid container className="notSelected" justifyContent= 'center'  alignItems='center' sx={{height: 'calc(100vh - 41px)'}}>
            <Box sx={{maxWidth: '35rem', height: 'auto'}}>
                <Card >
                    <CardContent>
                        <Grid container >
                            <Grid item textAlign="center" xs={12} sx={{ backgroundColor: '#454546', padding: '1.5rem', borderRadius: '4px 4px 0 0', border: '2px solid black'}}>
                                <Grid container justifyContent='center'  alignItems='center'>
                                    <Grid item >
                                        <EmojiEventsTwoToneIcon color="warning" sx={{fontSize:"3rem"}}/> 
                                    </Grid>
                                    <Grid item xs={8}>
                                        <Typography variant="h5">
                                            <b>Professional of the Month</b>
                                        </Typography>
                                    </Grid>
                                    <Grid item>
                                        <EmojiEventsTwoToneIcon color="warning" sx={{fontSize:"3rem"}}/> 
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item xs={12} sx={{ backgroundColor: '#4D4B4D', borderRadius: '0 0 4px 4px', border: '2px solid black'}}>
                                <form onSubmit={handleSubmit}>
                                    <Grid item textAlign="center" xs={12} sx={{margin: '1.5rem'}}>
                                        <Typography variant="h3">
                                            Sign Up
                                        </Typography>
                                    </Grid>
                                    <Grid item textAlign="center" xs={12} sx={{marginTop: '1.5rem', marginLeft: '1.5rem', marginRight: '1.5rem'}}>
                                        <CssTextField
                                            name="name"
                                            id="name"
                                            fullWidth
                                            required
                                            label="Enterprise Name"
                                        />
                                    </Grid>
                                    <Grid item textAlign="center" xs={12} sx={{marginTop: '1rem', marginLeft: '1.5rem', marginRight: '1.5rem'}}>
                                        <CssTextField
                                            name="email"
                                            id="email"
                                            fullWidth
                                            required
                                            label="Email"
                                        />
                                    </Grid>
                                    <Grid item textAlign="center" xs={12} sx={{marginTop: '1rem', marginLeft: '1.5rem', marginRight: '1.5rem', marginBottom: '1.5rem'}}>
                                        <Button type="submit" color="success" variant="contained" fullWidth  sx={{ height: '3rem'}}>Sign Up</Button>
                                    </Grid>
                                    <Grid item textAlign="center" xs={12} sx={{marginTop: '1rem', marginLeft: '1.5rem', marginRight: '1.5rem', marginBottom: '1.5rem'}}>
                                        <Link to="/login">
                                            <Button variant="outlined" fullWidth color="inherit" sx={{ height: '3rem'}}>Login</Button>
                                        </Link>
                                    </Grid>
                                </form>
                            </Grid>
                        </Grid>
                    </CardContent>
                </Card>
            </Box>
        </Grid>
        <FooterComponent/>
        </>
    );
}