import { AppBar, Toolbar } from "@mui/material";
import { Component } from "react";

interface SideBarProps {
    openSidebar:boolean
}
 
interface SideBarState {
    
}
 
class SideBar extends Component<SideBarProps, SideBarState> {
    constructor(props: SideBarProps) {
        super(props);
    }
    render() { 
        return (  
            this.props.openSidebar && <div className="sidebar">
                <AppBar/>
                <Toolbar/>
                <>
                    TESTE
                </>
            </div>
        );
    }
}
 
export default SideBar;