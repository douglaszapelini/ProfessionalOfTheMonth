import { Card, CardContent, CardHeader, Grid, Typography } from '@mui/material';
import { Component } from 'react';
import { ParticipantsCardModel } from '../../model/ParticipantsCardModel';

import ParticipantCard from '../ParticipantCard';

interface HomeCardProps {
}
 
interface HomeCardState {
    listParticipants: Array<ParticipantsCardModel>;
    voted: boolean;
}

const list: Array<ParticipantsCardModel> = [
    {
        id: 1,
        votingId: 1,
        userId: 1,
        voted: false,
        participant: true,
        username: 'Douglas de Souza Zapelini antonio'
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
        id: 8,
        votingId: 1,
        userId: 8,
        username: 'Douglas',
        voted: false,
        participant: true,
        profilePicture: 'https://support.apple.com/content/dam/edam/applecare/images/en_US/psp/featured-section-give-back-trade-in_2x.jpg'
    },
    {
        id:9,
        votingId: 1,
        userId: 9,
        username: 'Douglas',
        voted: false,
        participant: true,
        profilePicture: 'https://support.apple.com/content/dam/edam/applecare/images/en_US/psp/featured-section-give-back-trade-in_2x.jpg'
    },
    {
        id: 10,
        votingId: 1,
        userId: 10,
        username: 'Douglas',
        voted: false,
        participant: true,
        profilePicture: 'https://support.apple.com/content/dam/edam/applecare/images/en_US/psp/featured-section-give-back-trade-in_2x.jpg'
    },
    {
        id: 11,
        votingId: 1,
        userId: 11,
        username: 'Douglas',
        voted: false,
        participant: true,
        profilePicture: 'https://support.apple.com/content/dam/edam/applecare/images/en_US/psp/featured-section-give-back-trade-in_2x.jpg'
    },
    {
        id: 12,
        votingId: 1,
        userId: 12,
        username: 'Douglas',
        voted: false,
        participant: true,
        profilePicture: 'https://support.apple.com/content/dam/edam/applecare/images/en_US/psp/featured-section-give-back-trade-in_2x.jpg'
    },
    {
        id: 13,
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
        this.state = {voted: false, listParticipants: []}
    }

    render() {
        const participants = list.filter( participant => (participant.participant));
        const {voted} = this.state;

        return (
            <>
            {voted &&
                    <Grid container justifyContent='center' textAlign='center' sx={{marginBottom:'2rem', height: 'calc(100vh - 201px)'}}>
                        <Card sx={{width: '100%'}}>
                            <CardContent>
                                <Typography variant='h3'>There isn't any voting avaible to you right now.</Typography>
                                <Typography variant='h3'>See you next, good lucky! 😄 </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
            }

            {!voted &&
                <Grid container justifyContent='center' textAlign='center' sx={{marginBottom:'2rem'}}>
                    <Card sx={{width: '100%'}}>
                        {/* CARD TITLE*/}
                        <CardHeader title="Voting" sx={{backgroundColor: '#4D4B4D', borderRadius: '4px'}}/>
                        <Grid container justifyContent='center' sx={{marginTop:'0.5rem'}}>
                            {participants.map( participant =>{
                                return(
                                    <ParticipantCard participant={participant}  key={participant.id}/>
                                )
                            })}
                        </Grid>
                    </Card>
                </Grid>
            }
            </>
        );
    }
}

export default HomeCard;