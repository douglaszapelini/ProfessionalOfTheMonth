import { Card, CardContent, CardHeader, Grid } from "@mui/material";
import { Component } from "react";

interface CardAccountComponentProps {
    
}
 
interface CardAccountComponentState {
    
}
 
class CardAccountComponent extends Component<CardAccountComponentProps, CardAccountComponentState> {
    constructor(props: CardAccountComponentProps) {
        super(props);
        // this.state = { :  };
    }
    render() { 
        return (
            <Card sx={{maxWidth: '500px'}}>
                <CardHeader>
                    <Grid container>
                        <Grid item>
                            
                        </Grid>
                    </Grid>
                </CardHeader>
                <CardContent>
                    TESTE
                </CardContent>
            </Card>
        );
    }
}
 
export default CardAccountComponent;