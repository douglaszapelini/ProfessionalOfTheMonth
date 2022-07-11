import { AppBar, Box, Card, CardContent, CardHeader, Container, Divider, FormControlLabel, Grid, Input, Slider, styled, Switch, TextField, Toolbar, Typography } from "@mui/material"
import { useState } from "react";
import FooterComponent from "../components/Footer"
import {MenuComponent} from "../components/Menu"
import { SettingsModel } from "../model/SettingsModel";

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

const settingsConfig: SettingsModel = {
    id: 1,
    enterprise: {
        id: 1,
        name: 'LOGPRO'
    },
    secondsPerCard: 6,
    isSendEmailInsertVoting: false,
    isSendEmailFinishedVoting: true,
    isShowWinner: false
}

export const Settings = () => {

    const [seconds, setSeconds] = useState<number | number[]>(!!settingsConfig.secondsPerCard ? settingsConfig.secondsPerCard : 5);
    const [isSendEmailFinishedVoting, setIsSendEmailFinishedVoting] = useState<boolean>(settingsConfig.isSendEmailFinishedVoting);
    const [isShowWinner, setIsShowWinner] = useState<boolean>(settingsConfig.isShowWinner);
    const [isSendEmailInsertVoting, setIsSendEmailInsertVoting] = useState<boolean>(settingsConfig.isSendEmailInsertVoting);

    const handleSendEmailInsertVoting = () => {
        setIsSendEmailInsertVoting(!isSendEmailInsertVoting);
    }

    const handleSendEmailFinishedVoting = () => {
        setIsSendEmailFinishedVoting(!isSendEmailFinishedVoting);
    }

    const handleShowWinner = () => {
        setIsShowWinner(!isShowWinner);
    }

    const handleSliderChange = (event: Event, newValue: number | number[]) => {
        setSeconds(newValue);
    };

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSeconds(Number(event.target.value));
    };

    const handleBlur = () => {
        if (seconds < 3) {
            setSeconds(3);
        } else if (seconds > 15) {
            setSeconds(15);
        }
    };

    return(
        <>
            <Box sx={{ width: '100%', typography: 'body1', height: 'calc(100vh - 41px)' }}>
                <MenuComponent isAdmin={true}/>
                <AppBar/>
                <Toolbar/>
                <Container sx={{marginTop: '2%', paddingBottom: '3rem'}}>
                    <Card className="notSelected" sx={{maxWidth: '1120px', textAlign: 'center'}}>
                        <CardHeader title="Settings" sx={{backgroundColor: '#4D4B4D'}}/>
                        <CardContent>
                            <form>
                                <Typography variant="h4"><b>Enterprise</b></Typography>
                                <Grid container justifyContent= 'center'  alignItems='center' sx={{margin:'1rem 0'}}>
                                    <Grid item xs={8}>
                                        <CssTextField
                                            fullWidth
                                            id="name-input"
                                            label="Enterprise name"
                                            variant="outlined"
                                            defaultValue={settingsConfig.enterprise.name ? settingsConfig.enterprise.name : ''}
                                        />
                                    </Grid>
                                </Grid>
                                <Divider />
                                <Typography variant="h4" sx={{margin:'1rem 0'}}><b>Mural</b></Typography>
                                <Grid container justifyContent= 'center'  alignItems='center' sx={{margin: '1rem '}}>
                                    <Grid item alignItems= 'left' sx={{marginRight: '1rem'}}>
                                        <Typography sx={{fontSize:'1.4rem'}}>
                                            How many seconds the cards will be on page?
                                        </Typography>
                                    </Grid>
                                    <Grid item sx={{marginRight: '1rem'}}>
                                        <Input
                                            value={seconds}
                                            size="small"
                                            onChange={handleInputChange}
                                            onBlur={handleBlur}
                                            inputProps={{
                                                step: 1,
                                                min: 3,
                                                max: 15,
                                                type: 'number',
                                                'aria-labelledby': 'input-slider',
                                            }}
                                            sx={{maxWidth: '35px'}}
                                        />
                                        s
                                    </Grid>
                                    <Grid item xs={1.5}>
                                        <Slider
                                            sx={{color:'green'}}
                                            aria-label="Temperature"
                                            min={3}
                                            max={15}
                                            value={seconds}
                                            step={1}
                                            marks
                                            onChange={handleSliderChange}
                                            defaultValue={5}
                                        />
                                    </Grid>
                                </Grid>
                                <Divider/>
                                <Typography variant="h4" sx={{margin:'1rem 0'}}><b>Voting</b></Typography>
                                <Grid container justifyContent= 'center'  alignItems='center' sx={{marginTop: '1rem'}}>
                                    <Grid item>
                                        <FormControlLabel
                                            value="isSendEmailInsertVoting"
                                            control={<Switch color="success" defaultChecked={isSendEmailInsertVoting}/>}
                                            label="Send email to all participants when insert new voting?"
                                            onChange={handleSendEmailInsertVoting}
                                            labelPlacement="end"
                                        />
                                    </Grid>
                                </Grid>
                                <Grid container justifyContent= 'center'  alignItems='center' sx={{marginTop: '1rem'}}>
                                    <Grid item>
                                        <FormControlLabel
                                            value="isSendEmailFinishedVoting"
                                            control={<Switch color="success" defaultChecked={isSendEmailFinishedVoting} />}
                                            label="Send email to all participants when finished a voting?"
                                            onChange={handleSendEmailFinishedVoting}
                                            labelPlacement="end"
                                        />
                                    </Grid>
                                </Grid>
                                <Grid container justifyContent= 'center'  alignItems='center' sx={{marginTop: '1rem'}}>
                                    <Grid item>
                                        <FormControlLabel
                                            value="isShowWinner"
                                            control={<Switch color="success" defaultChecked={isShowWinner} disabled={!isSendEmailFinishedVoting}/>}
                                            label="Show voting winner on email?"
                                            onChange={handleShowWinner}
                                            labelPlacement="end"
                                        />
                                    </Grid>
                                </Grid>
                            </form>
                        </CardContent>
                    </Card>
                </Container>
            </Box>
            <FooterComponent/>
        </>
    )
}