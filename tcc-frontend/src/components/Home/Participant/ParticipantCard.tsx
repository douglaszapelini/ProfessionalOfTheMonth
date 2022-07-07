import { Avatar, Box, Card, CardContent, CardHeader, CardMedia, FormControlLabel, Grid, Radio, Typography } from '@mui/material';
import { Component } from 'react';
import { ParticipantsCardModel } from '../../../Model/ParticipantsCardModel';

interface ParticipantCardProps {
    participantList: Array<ParticipantsCardModel>
    selectedValue: string
    handleChange: Function

}
 
interface ParticipantCardState {
}

const imgDefault = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png';

class ParticipantCard extends Component <ParticipantCardProps, ParticipantCardState>{
    
    constructor(props: ParticipantCardProps) {
        super(props);
        console.log('teste',this.props.participantList)
    }

    render() {

        const {participantList, selectedValue,handleChange} = this.props;

        return (
            <>
                {participantList.map( participant =>{
                    return(
                        <Card  key={participant.id} sx={{ width:'12rem', height: '12rem', backgroundColor: '#808080', border: '1px solid black', margin:'1rem', justifyContent:'center'}}>
                            
                            {/* CARD TITLE*/}
                            <Grid sx={{backgroundColor: '#373737', borderRadius:'4px 4px 0 0'}}>
                            <Radio
                                checked={selectedValue === 'a'}
                                onChange={handleChange()}
                                value="a"
                                name="radio-buttons"
                                inputProps={{ 'aria-label': 'A' }}
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
            </>
        );
    }
}

export default ParticipantCard;