import { getUsers, createUser, updateUser, deleteUser } from '../api/userService';


import * as React from 'react';
import { useState ,useEffect} from 'react';
import { styled } from '@mui/material/styles';
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TablePagination, TextField, Button, IconButton, Container, Box, Dialog, DialogActions, DialogContent, DialogTitle, MenuItem } from '@mui/material';
import { Edit, Delete } from '@mui/icons-material';
import { tableCellClasses } from '@mui/material/TableCell';
import AddIcon from "@mui/icons-material/Add";
import CircularProgress from '@mui/material/CircularProgress';


// Styled TableCell
const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    background: 'linear-gradient(135deg, #5A8FDF, #4D6CB5)',
    color: theme.palette.common.white,
    fontWeight: 'bold',
    fontSize: '16px',
    textAlign: 'center',
    boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
    padding: '12px',
    borderBottom: '1px solid #e0e0e0',
  },
}));

const columns = [
  { id: 'id', label: 'ID', minWidth: 100 },
  { id: 'firstName', label: 'First Name', minWidth: 150 },
  { id: 'lastName', label: 'Last Name', minWidth: 150 },
  { id: 'gender', label: 'Gender', minWidth: 100 },
  { id: 'mobileNo', label: 'Mobile No', minWidth: 150 },
  { id: 'joiningDate', label: 'Joining Date', minWidth: 150 },
  { id: 'actions', label: 'Actions', minWidth: 150 },
];

const UserTable = () => {
  

  const [rows, setRows] = useState([]);
  const [totalRows, setTotalRows] = useState(0);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [editingId, setEditingId] = useState(null);
  const [editedData, setEditedData] = useState({
    firstName: '',
    lastName: '',
    gender: '',
    mobileNo: '',
    joiningDate: '',
  });

  const [openDialog, setOpenDialog] = useState(false);
  const [newPerson, setNewPerson] = useState({
    firstName: '',
    lastName: '',
    gender: '',
    mobileNo: '',
    joiningDate: '',
  });

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const handleEdit = (id, userData) => {
    setEditingId(id);
    setEditedData(userData);
  };

 
  const handleUpdate = async (id) => {
    try {
      await updateUser(id, editedData);
      setEditingId(null);
      fetchUsers(); // Refresh the list
    } catch (error) {
      console.error('Failed to update user:', error);
    }
  };

  

  const handleDelete = async (id) => {
    try {
      await deleteUser(id);
      fetchUsers(); // Refresh the list
    } catch (error) {
      console.error('Failed to delete user:', error);
    }
  };


  useEffect(() => {
    const loadUsers = async () => {
      setLoading(true);
      try {
        const data = await fetchUsers(page + 1, rowsPerPage);
        setRows(data.data);
        setTotalRows(data.total);
      } catch (error) {
        console.error('Error:', error);
        // Add error handling (toast/message)
      } finally {
        setLoading(false);
      }
    };
    loadUsers();
  }, [page, rowsPerPage]);

  const fetchUsers = async () => {
    try {
      const data = await getUsers(page + 1, rowsPerPage);
      setRows(data.data);
      setTotalRows(data.total);
    } catch (error) {
      console.error('Failed to fetch users:', error);
    }
    finally {
      setLoading(false);
    }
  };

  

  const handleOpenDialog = () => {
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };



  const handleAddPerson = async () => {
    try {
      await createUser(newPerson);
      fetchUsers(); // Refresh the list
      setNewPerson({
        firstName: '',
        lastName: '',
        gender: '',
        mobileNo: '',
        joiningDate: '',
      });
      setOpenDialog(false);
    } catch (error) {
      console.error('Failed to add user:', error);
    }
  };


  return (
    <Container maxWidth="lg" sx={{ padding: '20px', height: '100vh', backgroundColor: '#f4f7fc' }}>
      <Box sx={{ 
        display: 'flex', 
        justifyContent: 'space-between', 
        marginBottom: '20px',
        alignItems: 'center'
      }}>
        <Button 
          variant="contained"
          onClick={handleOpenDialog}
          startIcon={<AddIcon />}
          sx={{
            backgroundColor: '#4caf50',
            color: '#fff',
            padding: '10px 24px',
            borderRadius: '8px',
            textTransform: 'none',
            fontSize: 16,
            fontWeight: 600,
            boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
            '&:hover': {
              backgroundColor: '#388e3c',
              boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
              transform: 'translateY(-1px)',
            },
            '&:active': {
              transform: 'translateY(0)',
            },
          }}
        >
          Add New Person
        </Button>

        {editingId && (
          <Button
            onClick={() => handleUpdate(editingId)}
            variant="contained"
            sx={{
              backgroundColor: '#1976d2',
              color: '#fff',
              padding: '8px 20px',
              borderRadius: '6px',
              textTransform: 'none',
              fontSize: 15,
              fontWeight: 500,
              border: '1px solid #1565c0',
              transition: 'all 0.2s ease-in-out',
              '&:hover': {
                backgroundColor: '#1565c0',
                borderColor: '#0d47a1',
              },
            }}
          >
            Update
          </Button>
        )}
      </Box>

      <Paper sx={{ 
        width: '100%', 
        overflow: 'hidden', 
        display: 'flex', 
        flexDirection: 'column', 
        height: '100%',
        borderRadius: '12px',
        boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)'
      }}>

{loading ? (
  <Box display="flex" justifyContent="center" p={4}>
    <CircularProgress />
  </Box>
) : (
  <TableContainer sx={{ flex: 1, minHeight: 500, overflowY: 'auto' }}>
  <Table stickyHeader aria-label="sticky table">
    <TableHead>
      <TableRow>
        {columns.map((column) => (
          <StyledTableCell key={column.id} align="center" style={{ minWidth: column.minWidth }}>
            {column.label}
          </StyledTableCell>
        ))}
      </TableRow>
    </TableHead>
    <TableBody>
      {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => (
        <TableRow
          hover
          role="checkbox"
          tabIndex={-1}
          key={row.id}
          sx={{
            '&:hover': {
              backgroundColor: '#e3f2fd',
              cursor: 'pointer',
            },
            ...(editingId === row.id && {
              backgroundColor: 'rgba(33, 150, 243, 0.08)',
              boxShadow: '0px 2px 4px rgba(0,0,0,0.1)',
              '&:hover': {
                backgroundColor: 'rgba(33, 150, 243, 0.12)',
              },
              '& td': {
                padding: '8px',
              }
            }),
          }}
        >
          {columns.map((column) => {
            if (column.id === 'actions') {
              return (
                <TableCell key={column.id} align="center">
                  <IconButton
                    onClick={() => handleEdit(row.id, row)}
                    sx={{
                      color: editingId === row.id ? '#1976d2' : 'inherit',
                      backgroundColor: editingId === row.id ? 'rgba(25, 118, 210, 0.08)' : 'transparent',
                      '&:hover': {
                        backgroundColor: '#3f51b5',
                        color: 'white',
                      },
                      marginRight: '8px',
                      transition: 'all 0.2s',
                    }}
                  >
                    <Edit />
                  </IconButton>
                  <IconButton
                    onClick={() => handleDelete(row.id)}
                    sx={{
                      color: editingId === row.id ? '#f44336' : 'inherit',
                      backgroundColor: editingId === row.id ? 'rgba(244, 67, 54, 0.08)' : 'transparent',
                      '&:hover': {
                        backgroundColor: '#f44336',
                        color: 'white',
                      },
                      transition: 'all 0.2s',
                    }}
                  >
                    <Delete />
                  </IconButton>
                </TableCell>
              );
            }
            return (
              <TableCell 
                key={column.id} 
                align="center"
                sx={{
                  py: 1.5,
                  ...(editingId === row.id && {
                    backgroundColor: 'rgba(255, 255, 255, 0.9)',
                  }),
                }}
              >
                {editingId === row.id ? (
                  <TextField
                    value={editedData[column.id] || ''}
                    onChange={(e) => setEditedData({ ...editedData, [column.id]: e.target.value })}
                    variant="outlined"
                    size="small"
                    fullWidth
                    sx={{ 
                      maxWidth: '150px',
                      '& .MuiOutlinedInput-root': {
                        backgroundColor: '#fff',
                        '&:hover .MuiOutlinedInput-notchedOutline': {
                          borderColor: '#1976d2',
                        },
                        '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                          borderColor: '#1976d2',
                          borderWidth: '1px',
                        },
                      },
                      '& .MuiOutlinedInput-input': {
                        padding: '8px 12px',
                        fontSize: '0.875rem',
                      }
                    }}
                  />
                ) : (
                  <span style={{ 
                    display: 'inline-block',
                    padding: '6px 0',
                    minHeight: '36px',
                    lineHeight: '24px'
                  }}>
                    {row[column.id]}
                  </span>
                )}
              </TableCell>
            );
          })}
        </TableRow>
      ))}
    </TableBody>
  </Table>
</TableContainer>
)}
        


<TablePagination
  rowsPerPageOptions={[10, 25, 100, { value: -1, label: 'All' }]}
  count={totalRows}
  rowsPerPage={rowsPerPage}
  page={page}
  onPageChange={handleChangePage}
  onRowsPerPageChange={(event) => {
    const value = event.target.value === -1 ? totalRows : parseInt(event.target.value, 10);
    handleChangeRowsPerPage(value);
  }}
  sx={{
    '& .MuiTablePagination-select': {
      fontSize: '14px',
    },
    '& .MuiTablePagination-actions': {
      color: '#3f51b5',
    },
    borderTop: '1px solid #e0e0e0',
  }}
/>

      </Paper>

      {/* Dialog for adding new person */}
      <Dialog open={openDialog} onClose={handleCloseDialog} maxWidth="sm" fullWidth>
        <DialogTitle sx={{ 
          backgroundColor: '#4caf50',
          color: '#fff',
          padding: '16px 24px',
          fontSize: '18px',
          fontWeight: 600,
        }}>
          Add New Person
        </DialogTitle>
        <DialogContent sx={{ padding: '24px' }}>
          <TextField
            label="First Name"
            fullWidth
            value={newPerson.firstName}
            onChange={(e) => setNewPerson({ ...newPerson, firstName: e.target.value })}
            sx={{ marginTop:'16px' ,marginBottom: '16px' }}
          />
          <TextField
            label="Last Name"
            fullWidth
            value={newPerson.lastName}
            onChange={(e) => setNewPerson({ ...newPerson, lastName: e.target.value })}
            sx={{ marginBottom: '16px' }}
          />
          <TextField
            label="Gender"
            fullWidth
            select
            value={newPerson.gender}
            onChange={(e) => setNewPerson({ ...newPerson, gender: e.target.value })}
            sx={{ marginBottom: '16px' }}
          > 
          <MenuItem value="Male">Male</MenuItem>
          <MenuItem value="Female">Female</MenuItem>
          <MenuItem value="Other">Other</MenuItem>
          </TextField>
          <TextField
            label="Mobile No"
            fullWidth
            value={newPerson.mobileNo}
            onChange={(e) => setNewPerson({ ...newPerson, mobileNo: e.target.value })}
            sx={{ marginBottom: '16px' }}
          />
        </DialogContent>
        <DialogActions sx={{ padding: '16px 24px', borderTop: '1px solid #e0e0e0' }}>
          <Button 
            onClick={handleCloseDialog}
            sx={{
              color: '#757575',
              '&:hover': {
                backgroundColor: 'rgba(0, 0, 0, 0.04)',
              },
            }}
          >
            Cancel
          </Button>
          <Button 
            onClick={handleAddPerson} 
            variant="contained" 
            sx={{
              backgroundColor: '#4caf50',
              color: '#fff',
              '&:hover': {
                backgroundColor: '#388e3c',
              },
            }}
          >
            Add
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
};

export default UserTable;