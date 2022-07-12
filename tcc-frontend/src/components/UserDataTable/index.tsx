import { Avatar, Box, Button } from "@mui/material";
import { Component } from "react";
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';

interface UserDataTableProps {
    
}
 
interface UserDataTableState {
    
}
 

const columns: GridColDef[] = [
  {
    field: 'name',
    headerName: 'Name',
    width: 300,
    hideable:false,
    editable: false,
  },
  {
    field: 'email',
    headerName: 'Email',
    width: 300,
    hideable:false,
    editable: false,
  },
  {
    field: 'office',
    headerName: 'Office',
    width: 300,
    hideable:false,
    editable: false,
  },
  {
    field: 'isAdmin',
    headerName: 'Admin?',
    type: 'boolean',
    hideable:false,
    editable: false,
  },
  {
    field: 'isUse',
    headerName: 'Active?',
    type: 'boolean',
    hideable:false,
    editable: false,
  },
  {
    field: 'isEligible',
    headerName: 'Eligible?',
    type: 'boolean',
    hideable:false,
    editable: false,
  },
  {
    field: 'isElect',
    headerName: 'Elect?',
    type: 'boolean',
    hideable:false,
    editable: false,
  },
  {
    field: 'edit',
    type: 'actions',
    sortable: false,
    hideable:false,
    filterable: false,
    disableColumnMenu: true,
    hideSortIcons: false,
    renderCell:(params) =>{
      return <Button color="warning" variant="contained">edit</Button>
    }
  },
];
  
const rows = [
  { id: 1, name: 'Jon', email: 'jon@gmail.com', office:'Desenvolvedor'},
  { id: 2, name: 'Douglas de Souza Zapelini', email: 'douglas@logpro.com', office:'Desenvolvedor Fullstack Junior', isAdmin: true, isEligible: true},
  { id: 3, name: 'Jaime',  },
  { id: 4, name: 'Arya',  },
  { id: 5, name: 'Daenerys',  },
  { id: 6, name: null,  },
  { id: 7, name: 'Ferrara',  },
  { id: 8, name: 'Rossini',  },
  { id: 9, name: 'Harvey',  },
  { id: 10, name: 'Douglas de Souza Zapelini', email: 'douglas@logpro.com', office:'Desenvolvedor Fullstack Junior', isAdmin: true, isEligible: true},
];

class UserDataTable extends Component<UserDataTableProps, UserDataTableState> {
    constructor(props: UserDataTableProps) {
        super(props);
        // this.state = { :  };
    }

    render() { 
        return (
            <Box sx={{ height: '39.5rem', width: '100%' }}>
                <DataGrid
                    rows={rows}
                    columns={columns}
                    pageSize={10}
                    rowsPerPageOptions={[8]}
                    disableSelectionOnClick
                    disableColumnSelector
                />
            </Box>
        );
    }
}
 
export default UserDataTable;