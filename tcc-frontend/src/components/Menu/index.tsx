import { Component, useState } from "react";
import LogoutIcon from '@mui/icons-material/Logout';
import FaceIcon from '@mui/icons-material/Face';
import SettingsIcon from '@mui/icons-material/Settings';
import BadgeIcon from '@mui/icons-material/Badge';
import HowToVoteIcon from '@mui/icons-material/HowToVote';
import WallpaperIcon from '@mui/icons-material/Wallpaper';
import DashboardIcon from '@mui/icons-material/Dashboard';
import HomeIcon from '@mui/icons-material/Home';
import EmojiEventsTwoToneIcon from '@mui/icons-material/EmojiEventsTwoTone';
import { AppBar, Avatar, Grid, Menu, Toolbar, Typography, MenuItem, Button } from "@mui/material";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/useAuth";

interface MenuComponentProps {
    isAdmin: boolean;
}
 
interface MenuComponentState {
    anchorElAvatar: null | HTMLElement;
}
 
export const MenuComponent = (props: MenuComponentProps) => {

    const [anchorElAvatar, setAnchorElAvatar] = useState<null | HTMLElement>(null);

    const handleCloseAvatar= () =>{
        setAnchorElAvatar(null)
    }
    
    const handleMenuAvatar = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElAvatar(event.currentTarget);
    };

    const auth = useAuth();

    const isAdmin = props.isAdmin;

    return (<AppBar>
            <Toolbar >
                <Grid container direction="row" sx={{maxWidth: '12rem'}}>
                    <Grid item sx={{display:'flex', alignItems: 'center'}}>
                        <EmojiEventsTwoToneIcon color="warning"  sx={{fontSize:'35px'}}/>
                    </Grid>
                    <Grid item sx={{ padding: '8px'}}>
                        <Typography className="notSelected" sx={{display:'flex',justifyContent:'center',fontSize:'15px', fontWeight: 'bolder'}}>
                            Professional 
                        </Typography>
                        <Typography className="notSelected" sx={{display:'flex', justifyContent:'center', fontSize:'15px', fontWeight: 'bolder'}}>
                            Of The Month
                        </Typography>
                    </Grid>
                    <Grid item sx={{display:'flex', alignItems: 'center'}}>
                        <EmojiEventsTwoToneIcon color="warning"  sx={{fontSize:'35px'}}/>
                    </Grid>
                </Grid>
                <Grid container direction="row" textAlign="center">

                    <MenuItem>
                        <HomeIcon sx={{paddingRight: '0.2rem'}}/>
                        <Typography>
                            <Link to="/">Home</Link>
                        </Typography>
                    </MenuItem>

                    {isAdmin && 
                        <MenuItem>
                            <DashboardIcon sx={{paddingRight: '0.2rem'}}/>
                            <Typography>
                                <Link to="/dashboard">Dashboard</Link>
                            </Typography>
                        </MenuItem>
                    }

                    {isAdmin && 
                        <MenuItem>
                            <BadgeIcon sx={{paddingRight: '0.2rem'}}/>
                            <Typography>
                                <Link to="/user">User</Link>
                            </Typography>
                        </MenuItem>
                    }

                    {isAdmin && 
                        <MenuItem>
                            <HowToVoteIcon sx={{paddingRight: '0.2rem'}}/>
                            <Typography>
                                <Link to="/voting">Voting</Link>
                            </Typography>
                        </MenuItem>
                    }
                    {isAdmin && 
                        <MenuItem>
                            <WallpaperIcon sx={{paddingRight: '0.2rem'}}/>
                            <Typography>
                                <Link to="/mural">Mural</Link>
                            </Typography>
                        </MenuItem>
                    }
                    {isAdmin && 
                        <MenuItem>
                            <SettingsIcon/>
                            <Typography>
                                <Link to="/settings">Settings</Link>
                            </Typography>
                        </MenuItem>
                    }
                </Grid>
                <Grid container direction="row-reverse" sx={{maxWidth: '5rem'}}>
                    <Grid item sx={{display:'flex', alignItems: 'center'}}>
                        <Avatar
                            sx={{ width: '2.2rem', height: '2.2rem', cursor: 'pointer' }}
                            onClick={handleMenuAvatar}
                        />
                        <Menu
                            sx={{ mt: '45px' }}
                            id="menu-appbar"
                            anchorEl={anchorElAvatar}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            open={Boolean(anchorElAvatar)}
                            onClose={handleCloseAvatar}
                        >
                            <MenuItem onClick={handleCloseAvatar}>
                                <FaceIcon sx={{paddingRight: '0.2rem'}}/>
                                <Typography variant="button">
                                    <Link to="/profile">Profile</Link>
                                </Typography>
                            </MenuItem>
                            <MenuItem onClick={auth.logout}>
                                <LogoutIcon sx={{paddingRight: '0.2rem'}} />
                                <Typography> 
                                    <Button sx={{color: 'white', margin: '0', padding: '0'}}>Logout</Button>
                                </Typography>
                            </MenuItem>
                        </Menu>
                    </Grid>
                </Grid>
            </Toolbar>
        </AppBar>
    );
}