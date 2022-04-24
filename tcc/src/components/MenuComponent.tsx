import { Component } from "react";
import EmojiEventsOutlinedIcon from '@mui/icons-material/EmojiEventsOutlined';
import { AppBar, Avatar, Grid, Menu, Toolbar, Typography } from "@mui/material";
import MenuItem from '@mui/material/MenuItem';

interface MenuComponentProps {
    
}
 
interface MenuComponentState {
    anchorEl: null | HTMLElement;
}
 
class MenuComponent extends Component<MenuComponentProps, MenuComponentState> {
    constructor(props: MenuComponentProps) {
        super(props);
        this.state = { anchorEl: null };
    }

    handleClose= () =>{
        this.setState({anchorEl: null});
    }
    
    handleMenu = (event: React.MouseEvent<HTMLElement>) => {
        this.setState({anchorEl:(event.currentTarget)});
    };

    render() { 
        return (
            <AppBar>
                <Toolbar >
                    <Grid container direction="row" md={10}>
                        <Grid item sx={{display:'flex', alignItems: 'center'}}>
                            <EmojiEventsOutlinedIcon/>
                        </Grid>
                        <Grid item>
                            <Typography variant="h6">
                                Featured Contributor
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid container direction="row-reverse" md={2}>
                        <Grid item sx={{display:'flex', alignItems: 'center'}}>
                            <Avatar
                                sx={{ width: '1.8rem', height: '1.8rem', cursor: 'pointer' }}
                                onClick={this.handleMenu}
                            />
                            <Menu
                                id="menu-appbar"
                                anchorEl={this.state.anchorEl}
                                anchorOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                open={Boolean(this.state.anchorEl)}
                                onClose={this.handleClose}
                            >
                                <MenuItem onClick={this.handleClose}>Profile</MenuItem>
                                <MenuItem onClick={this.handleClose}>My account</MenuItem>
                            </Menu>
                        </Grid>
                    </Grid>
                </Toolbar>
            </AppBar>
        );
    }
}
 
export default MenuComponent;