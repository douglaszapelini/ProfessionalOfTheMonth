import { Box, Button, IconButton } from "@mui/material";
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import EditIcon from '@mui/icons-material/Edit';
import { useState } from "react";
import UserModal from "../UserModal";
import { UserModel } from "../../model/UserModel";

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
    renderCell: (params) =>{

      const row = params.row;
      
      const user: UserModel = {
        id: row.id,
        name: row.name,
        password: row.password,
        email: row.email,
        office: row.office,
        enterpriseId: row.enterpriseId,
        icAdmin: row.isAdmin,
        icUse: row.isUse,
        icEligible: row.isEligible,
        icElection: row.isElect,
        icFirstAccess: false
      }
      
      return(
        <UserModal user={user}/>
      )}
  },
];
  
const rowss = [
  { id: 1, name: 'Jon', email: 'jon@gmail.com', office:'Desenvolvedor'},
  { id: 2, name: 'Douglas de Souza Zapelini', email: 'douglas@logpro.com', office:'Desenvolvedor Fullstack Junior', isAdmin: true,isUse: true, isEligible: true},
  { id: 3, name: 'Jaime',  },
  { id: 4, name: 'Arya',  },
  { id: 5, name: 'Daenerys',  },
  { id: 6, name: null,  },
  { id: 7, name: 'Ferrara',  },
  { id: 8, name: 'Rossini',  },
  { id: 9, name: 'Harvey',  },
  { id: 10, name: 'Douglas de Souza Zapelini', email: 'douglas@logpro.com', office:'Desenvolvedor Fullstack Junior', isAdmin: true, isEligible: true},
  { id: 11, name: 'Douglas de Souza Zapelini', email: 'douglas@logpro.com', office:'Desenvolvedor Fullstack Junior', isAdmin: true, isEligible: true},
];

export const UserDataTable = () =>{

  const [rows, setRows] = useState([]);
  const [showModal, setShowModal] = useState(false);


  return (
      <Box sx={{ height: '39.5rem', width: '100%' }}>
          <DataGrid
              rows={rowss}
              columns={columns}
              pageSize={10}
              rowsPerPageOptions={[10]}
              disableSelectionOnClick
              disableColumnSelector
          />
      </Box>
  )
}