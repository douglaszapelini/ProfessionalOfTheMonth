import { Card, CardContent, CardHeader, FormControl, Grid, styled, TextField } from "@mui/material";
import { Component } from "react";
import VotingDataTable from "./VotingDataTable";
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
                <Card sx={{maxWidth: '1120px', textAlign: 'center'}}>
                        
                    <CardHeader title="Voting" sx={{backgroundColor: '#4D4B4D'}}/>
                    <VotingInsertModal/>
                    <body>
                      <CardContent>                        
                          <Grid container direction="row" alignItems="center" justifyContent="center">
                              <VotingDataTable/>
                          </Grid>
                      </CardContent>
                    </body>
                </Card>
            </>
        );
    }
}
 
export default VotingCard;