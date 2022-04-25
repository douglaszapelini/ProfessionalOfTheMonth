import SettingsIcon from '@mui/icons-material/Settings';
import BadgeIcon from '@mui/icons-material/Badge';
import HowToVoteIcon from '@mui/icons-material/HowToVote';
import WallpaperIcon from '@mui/icons-material/Wallpaper';
import DashboardIcon from '@mui/icons-material/Dashboard';

export const MenuItems = [
    {
        title: 'Dashboard',
        icon: <DashboardIcon/>,
        path: '/dashboard'
    },
    {
        title: 'User',
        icon: <BadgeIcon/>,
        path: '/user'
    },
    {
        title: 'Voting',
        icon: <HowToVoteIcon/>,
        path: '/voting'
    },
    {
        title: 'Mural',
        icon: <WallpaperIcon/>,
        path: '/mural'
    },
    {
        title: 'Configuration',
        icon: <SettingsIcon/>,
        path: '/configuration'
    }
]