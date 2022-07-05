import { Card, CardContent, CardHeader, FormControl, Grid, styled, TextField } from "@mui/material";
import { Component } from "react";
import DataTableVoting from "./DataTableVoting";
import VotingInsertModal from "./VotingInsertModal";

interface VotingCardProps {
}
 
interface VotingCardState {
}

const CssTextField = styled(TextField)({
    '& label.Mui-focused': {
      color: 'white',
    },
    '& .MuiOutlinedInput-root': {
      '&.Mui-focused fieldset': {
        borderColor: 'white',
      },
    },
  }
);

const CssFormControl= styled(FormControl)({
    '& label.Mui-focused': {
      color: 'white',
    },
    '& .MuiOutlinedInput-root': {
      '&.Mui-focused fieldset': {
        borderColor: 'white',
      },
    },
  }
);

class VotingCard extends Component<VotingCardProps, VotingCardState> {
    constructor(props: VotingCardProps) {
        super(props);
        this.state = { showPassword: false };
    }

    render() { 
        return (
            <>
                <Grid textAlign="right" sx={{maxWidth: '1120px',paddingBottom:'1.5rem'}}>
                    <VotingInsertModal/>
                </Grid>
                
                <Card sx={{maxWidth: '1120px', textAlign: 'center'}}>
                        
                    <CardHeader title="Voting" sx={{backgroundColor: '#4D4B4D'}}/>
                    <CardContent>                        
                        <Grid container direction="row" alignItems="center" justifyContent="center">
                            <DataTableVoting/>
                        </Grid>
                    </CardContent>
                </Card>
            </>
        );
    }
}
 
export default VotingCard;