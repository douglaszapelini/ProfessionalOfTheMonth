import { Avatar, Box, Card, CardContent, Grid, Typography } from '@mui/material';
import { Component } from 'react';
import { ParticipantsCardModel } from '../../model/ParticipantsCardModel';
import VoteModal from '../VoteModal';

interface ParticipantCardProps {
    participant: ParticipantsCardModel

}
 
interface ParticipantCardState {
}

const imgDefault = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png';

class ParticipantCard extends Component <ParticipantCardProps, ParticipantCardState>{
    
    constructor(props: ParticipantCardProps) {
        super(props);
    }

    render() {

        const {participant} = this.props;

        return (
            <Card sx={{ width: '15rem', backgroundColor: '#808080', border: '1px solid black', margin:'1.5rem', justifyContent:'center'}}>
                {/* CARD BUTTON*/}
                <Grid sx={{borderRadius:'4px 4px 0 0'}}>
                    <VoteModal participant={participant}/>
                </Grid>
                {/* CARD AVATAR*/}
                <Box sx={{justifyContent:'center', display:'flex', margin:'1rem 0'}}>
                    {!!participant.profilePicture &&
                        <Avatar
                            alt="Remy Sharp"
                            src={participant.profilePicture}
                            sx={{ width: 100, height: 100 }}
                        />
                    }
                    {!participant.profilePicture &&
                        <Avatar
                            alt="Remy Sharp"
                            src={imgDefault}
                            sx={{ width: 100, height: 100, textAlign:'center'  }}
                        />
                    }
                </Box>
                {/* CARD NAME*/}
                <CardContent sx={{display:'flex', alignItems:'center', justifyContent:'center',backgroundColor: '#696969', height: '5rem'}}>
                    <Box>
                        <Typography variant="body2" color="text.secondary">
                            <b>{participant.username}</b>
                        </Typography>
                    </Box>
                </CardContent>
            </Card>
        )
    }
}

export default ParticipantCard;