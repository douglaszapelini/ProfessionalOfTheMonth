import { Box, Grid, Typography } from "@mui/material";
import { Component } from "react";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

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
                <Box className="notSelected" sx={{textAlign:'center', position: 'relative', bottom: '0', backgroundColor: '#383735', width: '100%'}}>
                    <Grid container justifyContent='center' alignItems='center' >
                        <Grid item alignItems="center" sx={{paddingTop: '10px'}}>
                            <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/douglassz/">
                                <LinkedInIcon />
                            </a>
                        </Grid>
                        <Grid item sx={{margin: '0 10px', paddingTop: '10px'}}>
                            <a target="_blank" rel="noopener noreferrer" href="https://github.com/douglaszapelini">
                                <GitHubIcon />
                            </a>
                        </Grid>
                        <Typography variant="overline" sx={{marginRight: '10px',paddingTop: '5px'}}>|</Typography>
                        <Typography variant="overline" sx={{paddingTop: '8px'}}>Developed by DoG &copy; 2022 </Typography>
                    </Grid>
                </Box>
            </footer>
        );
    }
}
 
export default FooterComponent;