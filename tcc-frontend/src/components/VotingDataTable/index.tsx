import { Box } from "@mui/material";
import { Component } from "react";
import { DataGrid, GridColDef } from '@mui/x-data-grid';

interface VotingDataTableProps {
    
}
 
interface VotingDataTableState {
    
}
 

const columns: GridColDef[] = [
    {
      field: 'isYearVoting',
      headerName: 'Is Year Voting?',
      type: 'boolean',
      hideable:false,
      editable: false,
      width: 150,
    },
    {
      field: 'yearMonth',
      headerName: 'Month/Year',
      type: 'number',
      hideable:false,
      editable: false,
      width: 150,
    },
    {
      field: 'dateOppened',
      headerName: 'Date Oppened Voting',
      type: 'date',
      hideable:false,
      editable: false,
      width: 200,
    },
    {
      field: 'dateClosed',
      headerName: 'Date Closed Voting',
      type: 'date',
      hideable:false,
      editable: false,
      width: 200,
    },
    {
      field: 'winner',
      headerName: 'Winner',
      width: 350,
      hideable:false,
      editable: false,
    },
  ];
  
  const rows = [
    { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
    { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
    { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
    { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
    { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
    { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
    { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
    { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
    { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
  ];

class VotingDataTable extends Component<VotingDataTableProps, VotingDataTableState> {
    constructor(props: VotingDataTableProps) {
        super(props);
    }

    render() { 
        return (
            <Box className="notSelected" sx={{ height: '39.5rem', width: '100%' }}>
                <DataGrid
                    rows={rows}
                    columns={columns}
                    pageSize={10}
                    rowsPerPageOptions={[10]}
                    disableSelectionOnClick
                    disableColumnSelector
                />
            </Box>
        );
    }
}
 
export default VotingDataTable;