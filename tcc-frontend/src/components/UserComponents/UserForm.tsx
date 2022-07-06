import { Visibility, VisibilityOff } from "@mui/icons-material";
import { Button, Card, CardContent, CardHeader, FormControl, FormControlLabel, Grid, IconButton, Input, InputAdornment, InputLabel, OutlinedInput, styled, Switch, TextField } from "@mui/material";
import { Component } from "react";

interface UserFormProps {
}
 
interface UserFormState {
    showPassword: boolean;
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
        this.state = { showPassword: false };
    }

    hundleShowPassword = () =>{
        this.setState({showPassword: !this.state.showPassword});
    }

    render() { 
        return (
            <Card sx={{maxWidth: '1120px', textAlign: 'center'}}>
                <CardHeader title={"User Profile"} sx={{backgroundColor: '#4D4B4D'}}/>
                <CardContent>
                    <Grid container direction="row" alignItems="center" justifyContent="center">
                        <Grid item xs={8} sx={{paddingBottom: '0.8rem'}}>
                            <CssTextField
                                fullWidth
                                id="name-input"
                                label="Name"
                                variant="outlined"
                            />
                        </Grid>
                        {/* CASO NÃO SEJA CADASTRO, MOSTRAR O CAMPO DE SENHA PARA ALTERAR
                                                AJUSTAR DEPOIS
                        */}
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
                        <Grid item xs={10}>
                            <FormControlLabel
                                value="isEligible"
                                control={<Switch color="success" />}
                                label="Can the employee vote?"
                                labelPlacement="start"
                                sx={{paddingRight:'3rem'}}
                            />
                            <FormControlLabel
                                value="isElection"
                                control={<Switch color="success" />}
                                label="Participe in the votation?"
                                labelPlacement="start"
                            />
                        </Grid>
                        <Grid container alignItems="center" justifyContent="center" xs={10}>
                            <Grid container direction="row" xs={5}>
                                <Button sx={{marginLeft: '0.8rem'}} variant="contained" color="error">Back</Button>
                            </Grid>
                            <Grid container direction="row-reverse" xs={5}>
                                <Button sx={{marginRight: '0.8rem'}} variant="contained" color="success">Save</Button>
                            </Grid>
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>
        );
    }
}
 
export default UserForm;