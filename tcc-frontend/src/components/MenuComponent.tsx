import { Component } from "react";
import EmojiEventsOutlinedIcon from '@mui/icons-material/EmojiEventsOutlined';
import { AppBar, Avatar, Grid, Menu, Toolbar, Typography, MenuItem } from "@mui/material";

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
                    <Grid container direction="row" md={1.5}>
                        <Grid item sx={{display:'flex', alignItems: 'center'}}>
                            <EmojiEventsOutlinedIcon  sx={{fontSize:'35px'}}/>
                        </Grid>
                        <Grid item sx={{ padding: '8px'}}>
                            <Typography sx={{display:'flex',justifyContent:'center',fontSize:'15px', fontWeight: 'bolder'}}>
                                Featured
                            </Typography>
                            <Typography sx={{display:'flex', justifyContent:'center', fontSize:'15px', fontWeight: 'bolder'}}>
                                    Contributor
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid container direction="row" md={8.5}>
                        <Grid item sx={{marginLeft:'0px'}}>
                            <MenuItem onClick={this.handleClose}>Profile</MenuItem>
                        </Grid>
                        <Grid item>
                            <MenuItem onClick={this.handleClose}>My account</MenuItem>
                        </Grid>
                    </Grid>
                    <Grid container direction="row-reverse" md={2}>
                        <Grid item sx={{display:'flex', alignItems: 'center'}}>
                            <Avatar
                                sx={{ width: '2.2rem', height: '2.2rem', cursor: 'pointer' }}
                                onClick={this.handleMenu}
                            />
                            <Menu
                                sx={{ mt: '45px' }}
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