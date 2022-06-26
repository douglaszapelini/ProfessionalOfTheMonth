import {Component, SyntheticEvent} from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { AppBar, Container, Toolbar } from '@mui/material';
import CardAccountComponent from '../components/CardAccountComponent';
import MenuComponent from '../components/MenuComponent';

interface AccountProps {
    children?: React.ReactNode;
    dir?: string;
    index: number;
    value: string;
}
 
interface AccountState {
    value: string
}
 
class Account extends Component<AccountProps, AccountState> {
    constructor(props: AccountProps) {
        super(props);
        this.state = { value: props.value};
    }

    handleChange = (event: SyntheticEvent, newValue: string) => {
        this.setState({value: newValue});
    };

    render() { 
        return (
            <Box sx={{ width: '100%', typography: 'body1' }}>
                <MenuComponent/>
                <AppBar/>
                <Toolbar/>
                <Container fixed sx={{marginTop: '2%'}}>
                    <CardAccountComponent></CardAccountComponent>
                </Container>
            </Box>
        );
    }
}
 
export default Account;