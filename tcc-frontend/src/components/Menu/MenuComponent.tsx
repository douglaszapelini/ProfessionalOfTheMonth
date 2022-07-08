import { Component } from "react";
import LogoutIcon from '@mui/icons-material/Logout';
import FaceIcon from '@mui/icons-material/Face';
import SettingsIcon from '@mui/icons-material/Settings';
import BadgeIcon from '@mui/icons-material/Badge';
import HowToVoteIcon from '@mui/icons-material/HowToVote';
import WallpaperIcon from '@mui/icons-material/Wallpaper';
import DashboardIcon from '@mui/icons-material/Dashboard';
import EmojiEventsOutlinedIcon from '@mui/icons-material/EmojiEventsOutlined';
import { AppBar, Avatar, Grid, Menu, Toolbar, Typography, MenuItem } from "@mui/material";
import { Link } from "react-router-dom";

interface MenuComponentProps {
    isAdmin: boolean;
}
 
interface MenuComponentState {
    anchorElAvatar: null | HTMLElement;
}
 
class MenuComponent extends Component<MenuComponentProps, MenuComponentState> {

    constructor(props: MenuComponentProps) {
        super(props);
        this.state = { anchorElAvatar: null };
    }

    handleCloseAvatar= () =>{
        this.setState({anchorElAvatar: null});
    }
    
    handleMenuAvatar = (event: React.MouseEvent<HTMLElement>) => {
        this.setState({anchorElAvatar:(event.currentTarget)});
    };

    render() { 
        return (
            <AppBar>
                <Toolbar >
                    <Grid container direction="row" sx={{maxWidth: '10rem'}}>
                        <Grid item sx={{display:'flex', alignItems: 'center'}}>
                            <EmojiEventsOutlinedIcon  sx={{fontSize:'35px'}}/>
                        </Grid>
                        <Grid item sx={{ padding: '8px'}}>
                            <Typography className="notSelected" sx={{display:'flex',justifyContent:'center',fontSize:'15px', fontWeight: 'bolder'}}>
                                Professional 
                            </Typography>
                            <Typography className="notSelected" sx={{display:'flex', justifyContent:'center', fontSize:'15px', fontWeight: 'bolder'}}>
                                Of The Month
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid container direction="row" textAlign="center">
                        {this.props.isAdmin && 
                            <MenuItem>
                                <DashboardIcon sx={{paddingRight: '0.2rem'}}/>
                                <Typography>
                                    <Link to="/dashboard">Dashboard</Link>
                                </Typography>
                            </MenuItem>
                        }

                        {!this.props.isAdmin && 
                            <MenuItem>
                                <DashboardIcon sx={{paddingRight: '0.2rem'}}/>
                                <Typography>
                                    <Link to="/">Home</Link>
                                </Typography>
                            </MenuItem>
                        }

                        {this.props.isAdmin && 
                            <MenuItem>
                                <BadgeIcon sx={{paddingRight: '0.2rem'}}/>
                                <Typography>
                                    <Link to="/user">User</Link>
                                </Typography>
                            </MenuItem>
                        }

                        {this.props.isAdmin && 
                            <MenuItem>
                                <HowToVoteIcon sx={{paddingRight: '0.2rem'}}/>
                                <Typography>
                                    <Link to="/voting">Voting</Link>
                                </Typography>
                            </MenuItem>
                        }
                        {this.props.isAdmin && 
                            <MenuItem>
                                <WallpaperIcon sx={{paddingRight: '0.2rem'}}/>
                                <Typography>
                                    <Link to="/mural">Mural</Link>
                                </Typography>
                            </MenuItem>
                        }
                        {this.props.isAdmin && 
                            <MenuItem>
                                <SettingsIcon/>
                                <Typography>
                                    <Link to="/settings">Settings</Link>
                                </Typography>
                            </MenuItem>
                        }
                    </Grid>
                    <Grid container direction="row-reverse">
                        <Grid item sx={{display:'flex', alignItems: 'center'}}>
                            <Avatar
                                sx={{ width: '2.2rem', height: '2.2rem', cursor: 'pointer' }}
                                onClick={this.handleMenuAvatar}
                            />
                            <Menu
                                sx={{ mt: '45px' }}
                                id="menu-appbar"
                                anchorEl={this.state.anchorElAvatar}
                                anchorOrigin={{
                                  vertical: 'top',
                                  horizontal: 'right',
                                }}
                                keepMounted
                                transformOrigin={{
                                  vertical: 'top',
                                  horizontal: 'right',
                                }}
                                open={Boolean(this.state.anchorElAvatar)}
                                onClose={this.handleCloseAvatar}
                            >
                                <MenuItem onClick={this.handleCloseAvatar}>
                                    <FaceIcon sx={{paddingRight: '0.2rem'}}/>
                                    <Typography>
                                        <Link to="/profile">Profile</Link>
                                    </Typography>
                                </MenuItem>
                                <MenuItem onClick={this.handleCloseAvatar}>
                                    <LogoutIcon sx={{paddingRight: '0.2rem'}} />
                                    <Typography> 
                                        <Link to="/login">Logout</Link>
                                    </Typography>
                                </MenuItem>
                            </Menu>
                        </Grid>
                    </Grid>
                </Toolbar>
            </AppBar>
        );
    }
}
 
export default MenuComponent;