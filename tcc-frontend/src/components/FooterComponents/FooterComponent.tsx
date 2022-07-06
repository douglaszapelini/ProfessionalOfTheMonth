import { Box, Typography } from "@mui/material";
import { Component } from "react";
import FavoriteIcon from '@mui/icons-material/Favorite';
interface FooterComponentProps {
}
 
interface FooterComponentState {
    anchorElAvatar: null | HTMLElement;
}
 
class FooterComponent extends Component<FooterComponentProps, FooterComponentState> {

    constructor(props: FooterComponentProps) {
        super(props);
    }

    render() { 
        return (
            <footer>
                <Box sx={{textAlign:'center', position: 'absolute', bottom: '0', backgroundColor: '#383735', width: '100%'}}>
                    <Typography variant="overline"> Developed by DoG &copy; 2022 </Typography>
                </Box>
            </footer>
        );
    }
}
 
export default FooterComponent;