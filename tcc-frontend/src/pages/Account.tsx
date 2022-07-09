import {Component, SyntheticEvent} from 'react';
import Box from '@mui/material/Box';
import { AppBar, Container, Toolbar } from '@mui/material';
import UserForm from '../components/UserForm';
import MenuComponent from '../components/Menu';
import FooterComponent from '../components/Footer';

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
                    <UserForm></UserForm>
                </Container>
                <FooterComponent/>
            </Box>
        );
    }
}
 
export default Account;