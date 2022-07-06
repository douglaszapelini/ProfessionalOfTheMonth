import { Card, CardContent, CardHeader, FormControl, Grid, styled, TextField } from "@mui/material";
import { Component } from "react";
import DataTableUser from "./DataTableUser";
import UserInsertModal from "./UserInsertModal";

interface UserCardProps {
}
 
interface UserCardState {
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

class UserCard extends Component<UserCardProps, UserCardState> {
    constructor(props: UserCardProps) {
        super(props);
        this.state = { showPassword: false };
    }

    render() { 
        return (
            <>
                <Grid textAlign="right" sx={{maxWidth: '1120px',paddingBottom:'1.5rem'}}>
                    <UserInsertModal/>
                </Grid>
                
                <Card sx={{maxWidth: '1120px', textAlign: 'center'}}>
                        
                    <CardHeader title="Users" sx={{backgroundColor: '#4D4B4D'}}/>
                    <CardContent>                        
                        <Grid container direction="row" alignItems="center" justifyContent="center">
                            <DataTableUser/>
                        </Grid>
                    </CardContent>
                </Card>
            </>
        );
    }
}
 
export default UserCard;