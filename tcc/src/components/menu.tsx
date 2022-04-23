import { Component } from "react";
import SideBar from "./sidebar";
import { AppBar, Button, IconButton, Toolbar, Typography } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';

interface MenuProps {
    
}
 
interface MenuState {
    openSidebar:boolean;
}
 
class Menu extends Component<MenuProps, MenuState> {

    constructor(props: MenuProps) {
        super(props);
        this.state = {openSidebar: false}
    }

    handdlerToggleSidebar = () => {
        this.setState({ openSidebar: !this.state.openSidebar})
    };

    render() { 
        return (
            <div className="App">
                <SideBar openSidebar={this.state.openSidebar}></SideBar>
                <AppBar>
                    <Toolbar>
                        <IconButton 
                            onClick={this.handdlerToggleSidebar}
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{ mr: 2 }}
                            >
                            <MenuIcon/>
                        </IconButton>
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                            TCC Front
                        </Typography>
                    </Toolbar>
                </AppBar>
            </div>
        );
    }
}
 
export default Menu;