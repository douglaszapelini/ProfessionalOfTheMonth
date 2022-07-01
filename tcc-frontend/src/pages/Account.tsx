import {Component, SyntheticEvent} from 'react';
import Box from '@mui/material/Box';
import { AppBar, Container, Toolbar } from '@mui/material';
import UserForm from '../components/UserComponents/UserForm';
import MenuComponent from '../components/MenuComponents/MenuComponent';

interface AccountProps {
}
 
interface AccountState {
    value: string
}
 
class Account extends Component<AccountProps, AccountState> {
    constructor(props: AccountProps) {
        super(props);
    }

    handleChange = (event: SyntheticEvent, newValue: string) => {
        this.setState({value: newValue});
    };

    render() { 
        return (
            <Box sx={{ width: '100%', typography: 'body1' }}>
                <MenuComponent isAdmin={true}/>
                <AppBar/>
                <Toolbar/>
                <Container fixed sx={{marginTop: '2%'}}>
                    <UserForm isRegistration={false}></UserForm>
                </Container>
            </Box>
        );
    }
}
 
export default Account;