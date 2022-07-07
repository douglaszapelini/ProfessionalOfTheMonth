import { Avatar, Box, Card, CardContent, CardHeader, CardMedia, Grid, Radio, Typography } from '@mui/material';
import { Component } from 'react';
import { ParticipantsCardModel } from '../../Model/ParticipantsCardModel';
import { pink } from '@mui/material/colors';

import ParticipantCard from './Participant/ParticipantCard';

interface HomeCardProps {
}
 
interface HomeCardState {
    listParticipants: Array<ParticipantsCardModel>;
    selectedValue: string;
}

// id: number;
//     votingId: number;
//     userId: number;
//     voted: boolean;
//     participant: boolean;

const list: Array<ParticipantsCardModel> = [
    {
        id: 1,
        votingId: 1,
        userId: 1,
        voted: false,
        participant: true,
        username: 'Douglas de Souza Zapelini'
    },
    {
        id: 2,
        votingId: 1,
        userId: 2,
        voted: false,
        participant: true,
        username: 'Douglas',
        profilePicture: 'https://support.apple.com/content/dam/edam/applecare/images/en_US/psp/featured-section-give-back-trade-in_2x.jpg'
    },
    {
        id: 3,
        votingId: 1,
        userId: 3,
        voted: false,
        participant: true,
        username: 'Douglas',
        profilePicture: 'https://support.apple.com/content/dam/edam/applecare/images/en_US/psp/featured-section-give-back-trade-in_2x.jpg'
    },
    {
        id: 4,
        votingId: 1,
        userId: 4,
        voted: false,
        participant: true,
        username: 'Douglas',
        profilePicture: 'https://support.apple.com/content/dam/edam/applecare/images/en_US/psp/featured-section-give-back-trade-in_2x.jpg'
    },
    {
        id: 5,
        votingId: 1,
        userId: 5,
        voted: false,
        participant: true,
        username: 'Douglas',
        profilePicture: 'https://support.apple.com/content/dam/edam/applecare/images/en_US/psp/featured-section-give-back-trade-in_2x.jpg'
    },
    {
        id: 6,
        votingId: 1,
        userId: 6,
        voted: false,
        username: 'Douglas',
        participant: true,
        profilePicture: 'https://support.apple.com/content/dam/edam/applecare/images/en_US/psp/featured-section-give-back-trade-in_2x.jpg'
    },
    {
        id: 7,
        votingId: 1,
        userId: 7,
        username: 'Douglas',
        voted: false,
        participant: true,
        profilePicture: 'https://support.apple.com/content/dam/edam/applecare/images/en_US/psp/featured-section-give-back-trade-in_2x.jpg'
    },
    {
        id: 7,
        votingId: 1,
        userId: 8,
        username: 'Douglas',
        voted: false,
        participant: true,
        profilePicture: 'https://support.apple.com/content/dam/edam/applecare/images/en_US/psp/featured-section-give-back-trade-in_2x.jpg'
    },
    {
        id: 7,
        votingId: 1,
        userId: 9,
        username: 'Douglas',
        voted: false,
        participant: true,
        profilePicture: 'https://support.apple.com/content/dam/edam/applecare/images/en_US/psp/featured-section-give-back-trade-in_2x.jpg'
    },
    {
        id: 7,
        votingId: 1,
        userId: 10,
        username: 'Douglas',
        voted: false,
        participant: true,
        profilePicture: 'https://support.apple.com/content/dam/edam/applecare/images/en_US/psp/featured-section-give-back-trade-in_2x.jpg'
    },
    {
        id: 7,
        votingId: 1,
        userId: 11,
        username: 'Douglas',
        voted: false,
        participant: true,
        profilePicture: 'https://support.apple.com/content/dam/edam/applecare/images/en_US/psp/featured-section-give-back-trade-in_2x.jpg'
    },
    {
        id: 7,
        votingId: 1,
        userId: 12,
        username: 'Douglas',
        voted: false,
        participant: true,
        profilePicture: 'https://support.apple.com/content/dam/edam/applecare/images/en_US/psp/featured-section-give-back-trade-in_2x.jpg'
    },
    {
        id: 7,
        votingId: 1,
        userId: 13,
        username: 'Douglas',
        voted: false,
        participant: true,
        profilePicture: 'https://support.apple.com/content/dam/edam/applecare/images/en_US/psp/featured-section-give-back-trade-in_2x.jpg'
    }

];

const imgDefault = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png';

class HomeCard extends Component <HomeCardProps, HomeCardState>{
    
    constructor(props: HomeCardProps) {
        super(props);
        this.state = {selectedValue: '', listParticipants: []}
    }

    handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({selectedValue: event.target.value});
    };

    render() {
        const participants = list.filter( participant => (participant.participant));
        const {selectedValue} = this.state;

        return (
            <Grid container justifyContent='center' textAlign='center' sx={{marginBottom:'2rem'}}>
                <Card sx={{width: '100%'}}>
                    {/* CARD TITLE*/}
                    <CardHeader title="Voting" sx={{backgroundColor: '#4D4B4D', borderRadius: '4px'}}/>
                    <Grid container justifyContent='center'>
                        {participants.map( participant =>{
                            return(
                                <Card  key={participant.id} sx={{ width:'12rem', height: '14.5rem', backgroundColor: '#808080', border: '1px solid white', margin:'1rem', justifyContent:'center'}}>
                                    
                                    {/* CARD TITLE*/}
                                    <Grid sx={{backgroundColor: '#373737', borderRadius:'4px 4px 0 0', width:'100%'}}>
                                        <Radio
                                            checked={selectedValue === participant.userId.toString()}
                                            onChange={this.handleChange}
                                            value={participant.userId.toString()}
                                            name="radio-buttons"
                                            inputProps={{ 'aria-label': participant.userId.toString() }}
                                            sx={{
                                                color: 'white',
                                                '&.Mui-checked': {
                                                  color: 'green',
                                                },
                                              }}
                                        />
                                    </Grid>
                                    
                                    <Box sx={{justifyContent:'center', display:'flex', margin:'1rem 0'}}>
                                        {!!participant.profilePicture &&
                                            <Avatar
                                                alt="Remy Sharp"
                                                src={participant.profilePicture}
                                                sx={{ width: 80, height: 80 }}
                                            />
                                        }
                                        {!participant.profilePicture &&
                                            <Avatar
                                                alt="Remy Sharp"
                                                src={imgDefault}
                                                sx={{ width: 80, height: 80, textAlign:'center'  }}
                                            />
                                        }
                                        
                                    </Box>
                                    <Box sx={{display:'flex',backgroundColor: '#696969', height:'5rem', alignItems:'center', justifyContent:'center'}} >
                                        <Typography variant="body1" color="text.secondary">
                                            {participant.username}
                                        </Typography>
                                    </Box>
                                </Card>
                            )
                        })}
                    </Grid>
                </Card>
            </Grid>
            
        );
    }
}

export default HomeCard;