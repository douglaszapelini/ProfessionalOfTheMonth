import { Box, Card, CardContent, CardHeader, Grid } from "@mui/material";
import {UserDataTable} from "../UserDataTable";
import {UserModal} from "../UserModal";

export const UserCard = () => {
  return (
    <Box sx={{ width: '92rem'}}>
      <Card className="notSelected" sx={{ textAlign: 'center'}}>
          <CardHeader title="Users" sx={{backgroundColor: '#4D4B4D'}}/>
          <UserModal/>
          <CardContent>                        
              <Grid container direction="row" alignItems="center" justifyContent="center">
                  <UserDataTable/>
              </Grid>
          </CardContent>
      </Card>
    </Box>
  )
}