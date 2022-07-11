import { Visibility, VisibilityOff } from "@mui/icons-material";
import { Avatar, Button, Card, CardContent, CardHeader, FormControl, FormControlLabel, Grid, IconButton, InputAdornment, InputLabel, OutlinedInput, styled, Switch, TextField } from "@mui/material";
import { Component } from "react";
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';

interface UserFormProps {
}
 
interface UserFormState {
    showPassword: boolean;
    profileImg: string | ArrayBuffer | null;
    sendImage?: File;
}

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

const CssFormControl= styled(FormControl)({
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

class UserForm extends Component<UserFormProps, UserFormState> {
    constructor(props: UserFormProps) {
        super(props);
        this.state = { showPassword: false, profileImg: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png' };
    }

    hundleShowPassword = () =>{
        this.setState({showPassword: !this.state.showPassword});
    }

    teste =() =>{
        console.log(this.state.sendImage)
    }

    imageHandler = (e : any) => {
        const reader = new FileReader();
        reader.onload = () =>{
            if(reader.readyState === 2){
                this.setState({profileImg: reader.result})
            }
        }
        this.setState({sendImage: e.target.files[0]});
        reader.readAsDataURL(e.target.files[0])
    };

    render() { 

        const {profileImg} = this.state;

        return (
            <Card className="notSelected" sx={{maxWidth: '1120px', textAlign: 'center'}}>
                <CardHeader title={"User Profile"} sx={{backgroundColor: '#4D4B4D'}}/>
                <CardContent>
                    <Grid container direction="row" alignItems="center" justifyContent="center">
                        <Grid item xs={8} sx={{paddingBottom: '0.8rem', display:'flex', justifyContent:'center'}}>
                            <Avatar
                                alt="Remy Sharp"
                                src={profileImg?.toString()}
                                sx={{ width: 300, height: 300 }}
                            />
                        </Grid>
                        <Grid item xs={8} sx={{paddingBottom: '0.8rem', display:'flex', justifyContent:'center'}}>
                        {/* Input Image */}
                            <label htmlFor="input-file">
                                <input type="file" name="input-file" style={{ display: 'none', }} id="input-file" accept="image/*" onChange={this.imageHandler}/>
                                <Grid container>
                                    <Button color="success" variant="contained" component="span" sx={{width:'100%'}}>
                                        <Grid item>
                                            <AddPhotoAlternateIcon/>
                                        </Grid>
                                        <Grid item sx={{paddingLeft:'0.5rem'}}>
                                            change profile picture
                                        </Grid>
                                    </Button>
                                </Grid>
                            </label>
                        </Grid>
                        <Grid item xs={8} sx={{paddingBottom: '0.8rem'}}>
                            <CssTextField
                                fullWidth
                                id="name-input"
                                label="Name"
                                variant="outlined"
                            />
                        </Grid>
                        <Grid item xs={8} sx={{paddingBottom: '0.8rem'}}>
                            <CssFormControl sx={{ width: '40%', marginRight:'2%' }} variant="outlined">
                                <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                                <OutlinedInput
                                    id="password-input"
                                    type={this.state.showPassword ? 'text' : 'password'}
                                    autoComplete="current-password"
                                    endAdornment={
                                        <InputAdornment position="end">
                                        <IconButton
                                            onClick={this.hundleShowPassword}
                                            edge="end"
                                        >
                                            {this.state.showPassword ? <VisibilityOff /> : <Visibility />}
                                        </IconButton>
                                        </InputAdornment>
                                    }
                                    label="Password"
                                />
                            </CssFormControl>
                            <CssTextField
                                sx={{ width: '58%'}}
                                id="office-input"
                                label="Office"
                                variant="outlined"
                            />
                        </Grid>
                        <Grid item xs={8} sx={{display: 'flex', justifyContent: 'space-between'}}>
                            <Button variant="contained" color="error">Back</Button>
                            <Button onClick={this.teste}variant="contained" color="success">Save</Button>
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>
        );
    }
}
 
export default UserForm;