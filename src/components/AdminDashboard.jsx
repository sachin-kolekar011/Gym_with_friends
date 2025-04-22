

// // import React, { useState, useEffect } from 'react';
// // import {
// //     Container,
// //     Box,
// //     Typography,
// //     Button,
// //     Table,
// //     TableBody,
// //     TableCell,
// //     TableContainer,
// //     TableHead,
// //     TableRow,
// //     CircularProgress,
// //     Tabs,
// //     Tab,
// //     IconButton,
// //     Chip,
// //     Paper
// // } from '@mui/material';
// // import { Delete, Edit, Visibility } from '@mui/icons-material';
// // import { useNavigate } from 'react-router-dom';

// // const TabPanel = (props) => {
// //     const { children, value, index, ...other } = props;
// //     return (
// //         <div
// //             role="tabpanel"
// //             hidden={value !== index}
// //             {...other}
// //         >
// //             {value === index && (
// //                 <Box sx={{ p: 3 }}>
// //                     {children}
// //                 </Box>
// //             )}
// //         </div>
// //     );
// // };

// // const AdminDashboard = () => {
// //     const navigate = useNavigate();
// //     const [tabValue, setTabValue] = useState(0);
// //     const [memberships, setMemberships] = useState([]);
// //     const [demoSessions, setDemoSessions] = useState([]);
// //     const [messages, setMessages] = useState([]);
// //     const [loading, setLoading] = useState(true);
// //     const [error, setError] = useState('');

// //     useEffect(() => {
// //         const fetchData = async () => {
// //             try {
// //                 const [membershipsData, demoData, messagesData] = await Promise.all([
// //                     fetch('http://localhost:4000/api/memberships').then(res => res.json()),
// //                     fetch('http://localhost:4000/api/demos').then(res => res.json()),
// //                     fetch('http://localhost:4000/api/messages').then(res => res.json())
// //                 ]);

// //                 setMemberships(membershipsData);
// //                 setDemoSessions(demoData);
// //                 setMessages(messagesData);
// //             } catch (err) {
// //                 setError('Failed to fetch data');
// //                 console.error("Fetch error:", err);
// //                 // You might not have an admin login route in your current backend,
// //                 // so adjust this part based on your actual authentication flow.
// //                 // if (err.response?.status === 401) {
// //                 //     navigate('/admin/login');
// //                 // }
// //             } finally {
// //                 setLoading(false);
// //             }
// //         };

// //         fetchData();
// //     }, [navigate]);

// //     const handleTabChange = (event, newValue) => {
// //         setTabValue(newValue);
// //     };

// //     const handleLogout = () => {
// //         // Adjust logout logic based on how your admin authentication works.
// //         // If you are using localStorage for a token, clear it.
// //         // localStorage.removeItem('adminToken');
// //         // localStorage.removeItem('adminData');
// //         // navigate('/admin/login');
// //         console.log('Logout clicked (Implement actual logout)');
// //     };

// //     if (loading) {
// //         return (
// //             <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
// //                 <CircularProgress />
// //             </Box>
// //         );
// //     }

// //     if (error) {
// //         return (
// //             <Container maxWidth="lg" sx={{ mt: 4 }}>
// //                 <Typography color="error">{error}</Typography>
// //             </Container>
// //         );
// //     }

// //     return (
// //         <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
// //             <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 3 }}>
// //                 <Typography variant="h4" component="h1">
// //                     Admin Dashboard
// //                 </Typography>
// //                 <Button variant="contained" color="secondary" onClick={handleLogout}>
// //                     Logout
// //                 </Button>
// //             </Box>

// //             <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
// //                 <Tabs value={tabValue} onChange={handleTabChange}>
// //                     <Tab label="Memberships" />
// //                     <Tab label="Demo Sessions" />
// //                     <Tab label="Messages" />
// //                 </Tabs>
// //             </Box>

// //             {/* Memberships Table */}
// //             <TabPanel value={tabValue} index={0}>
// //                 <TableContainer component={Paper}>
// //                     <Table>
// //                         <TableHead>
// //                             <TableRow>
// //                                 <TableCell>Name</TableCell>
// //                                 <TableCell>Gender</TableCell>
// //                                 <TableCell>Weight</TableCell>
// //                                 <TableCell>Height</TableCell>
// //                                 <TableCell>City</TableCell>
// //                                 <TableCell>Email</TableCell>
// //                                 <TableCell>Mobile No</TableCell>
// //                                 <TableCell>Plan Type</TableCell>
// //                                 {/* <TableCell>Joined On</TableCell>
// //                                 <TableCell>Actions</TableCell> */}
// //                             </TableRow>
// //                         </TableHead>
// //                         <TableBody>
// //                             {memberships.map((membership) => (
// //                                 <TableRow key={membership.id}>
// //                                     <TableCell>{`${membership.firstName} ${membership.lastName}`}</TableCell>
// //                                     <TableCell>{membership.gender}</TableCell>
// //                                     <TableCell>{membership.weight}</TableCell>
// //                                     <TableCell>{membership.height}</TableCell>
// //                                     <TableCell>{membership.city}</TableCell>
// //                                     <TableCell>{membership.email}</TableCell>
// //                                     <TableCell>{membership.mobileNo}</TableCell>
// //                                     <TableCell>{membership.membershipType}</TableCell>
// //                                     {/* <TableCell>{new Date(membership.created_at).toLocaleDateString()}</TableCell>
// //                                     <TableCell>
// //                                         <IconButton size="small" color="primary" title="View Details">
// //                                             <Visibility />
// //                                         </IconButton>
// //                                         <IconButton size="small" color="secondary" title="Edit">
// //                                             <Edit />
// //                                         </IconButton>
// //                                         <IconButton size="small" color="error" title="Delete">
// //                                             <Delete />
// //                                         </IconButton>
// //                                     </TableCell> */}
// //                                 </TableRow>
// //                             ))}
// //                         </TableBody>
// //                     </Table>
// //                 </TableContainer>
// //             </TabPanel>

// //             {/* Demo Sessions Table */}
// //             <TabPanel value={tabValue} index={1}>
// //                 <TableContainer component={Paper}>
// //                     <Table>
// //                         <TableHead>
// //                             <TableRow>
// //                                 <TableCell>Name</TableCell>
// //                                 <TableCell>Email</TableCell>
// //                                 <TableCell>Mobile No</TableCell>
// //                                 <TableCell>Message</TableCell>
// //                                 <TableCell>Date</TableCell>
// //                                 <TableCell>Time</TableCell>
// //                                 <TableCell>City</TableCell>
// //                                 {/* <TableCell>Actions</TableCell> */}
// //                             </TableRow>
// //                         </TableHead>
// //                         <TableBody>
// //                             {demoSessions.map((session) => (
// //                                 <TableRow key={session.id}>
// //                                     <TableCell>{session.username}</TableCell>
// //                                     <TableCell>{session.email}</TableCell>
// //                                     <TableCell>{session.mobileNo}</TableCell>
// //                                     <TableCell sx={{ maxWidth: 200, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{session.message}</TableCell>
// //                                     <TableCell>{new Date(session.date).toLocaleDateString()}</TableCell>
// //                                     <TableCell>{session.time}</TableCell>
// //                                     <TableCell>{session.city}</TableCell>
// //                                     {/* <TableCell>
// //                                         <IconButton size="small" color="primary" title="View Details">
// //                                             <Visibility />
// //                                         </IconButton>
// //                                         <IconButton size="small" color="secondary" title="Edit">
// //                                             <Edit />
// //                                         </IconButton>
// //                                         <IconButton size="small" color="error" title="Delete">
// //                                             <Delete />
// //                                         </IconButton>
// //                                     </TableCell> */}
// //                                 </TableRow>
// //                             ))}
// //                         </TableBody>
// //                     </Table>
// //                 </TableContainer>
// //             </TabPanel>

// //             {/* Messages/Queries Table */}
// //             <TabPanel value={tabValue} index={2}>
// //                 <TableContainer component={Paper}>
// //                     <Table>
// //                         <TableHead>
// //                             <TableRow>
// //                                 <TableCell>Name</TableCell>
// //                                 <TableCell>Email</TableCell>
// //                                 <TableCell>Phone</TableCell>
// //                                 <TableCell>Message</TableCell>
// //                                 {/* <TableCell>Received On</TableCell>
// //                                 <TableCell>Actions</TableCell> */}
// //                             </TableRow>
// //                         </TableHead>
// //                         <TableBody>
// //                             {messages.map((message) => (
// //                                 <TableRow key={message.id}>
// //                                     <TableCell>{message.username}</TableCell>
// //                                     <TableCell>{message.email}</TableCell>
// //                                     <TableCell>{message.mobileNo}</TableCell>
// //                                     <TableCell sx={{ maxWidth: 300, overflow: 'hidden', textOverflow: 'ellipsis' }}>{message.message}</TableCell>
// //                                     {/* <TableCell>{new Date(message.createdAt).toLocaleDateString()}</TableCell>
// //                                     <TableCell>
// //                                         <IconButton size="small" color="primary" title="View Full Message">
// //                                             <Visibility />
// //                                         </IconButton>
// //                                         <IconButton size="small" color="error" title="Delete">
// //                                             <Delete />
// //                                         </IconButton>
// //                                     </TableCell> */}
// //                                 </TableRow>
// //                             ))}
// //                         </TableBody>
// //                     </Table>
// //                 </TableContainer>
// //             </TabPanel>
// //         </Container>
// //     );
// // };

// // export default AdminDashboard;


// import React, { useState, useEffect } from 'react';
// import {
//     Container,
//     Box,
//     Typography,
//     Button,
//     Table,
//     TableBody,
//     TableCell,
//     TableContainer,
//     TableHead,
//     TableRow,
//     CircularProgress,
//     Tabs,
//     Tab,
//     IconButton,
//     Paper
// } from '@mui/material';
// import { Visibility } from '@mui/icons-material';
// import { useNavigate } from 'react-router-dom';
// import { styled } from '@mui/material/styles';
// import Dialog from '@mui/material/Dialog';
// import DialogActions from '@mui/material/DialogActions';
// import DialogContent from '@mui/material/DialogContent';
// import DialogTitle from '@mui/material/DialogTitle';

// const TabPanel = (props) => {
//     const { children, value, index, ...other } = props;
//     return (
//         <div
//             role="tabpanel"
//             hidden={value !== index}
//             {...other}
//         >
//             {value === index && (
//                 <Box sx={{ p: 3 }}>
//                     {children}
//                 </Box>
//             )}
//         </div>
//     );
// };

// const StyledTableCell = styled(TableCell)(({ theme }) => ({
//     [`&.MuiTableCell-head`]: {
//         backgroundColor: theme.palette.common.black,
//         color: theme.palette.common.white,
//     },
//     [`&.MuiTableCell-body`]: {
//         fontSize: 14,
//     },
// }));

// const StyledTableRow = styled(TableRow)(({ theme }) => ({
//     '&:nth-of-type(odd)': {
//         backgroundColor: theme.palette.action.hover,
//     },
//     '&:last-child td, &:last-child th': {
//         border: 0,
//     },
// }));

// const AdminDashboard = () => {
//     const navigate = useNavigate();
//     const [tabValue, setTabValue] = useState(0);
//     const [memberships, setMemberships] = useState([]);
//     const [demoSessions, setDemoSessions] = useState([]);
//     const [messages, setMessages] = useState([]);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState('');
//     const [openMessageDialog, setOpenMessageDialog] = useState(false);
//     const [selectedMessage, setSelectedMessage] = useState('');
//     const [openDemoMessageDialog, setOpenDemoMessageDialog] = useState(false);
//     const [selectedDemoMessage, setSelectedDemoMessage] = useState('');

//     useEffect(() => {
//         const fetchData = async () => {
//             try {
//                 const [membershipsData, demoData, messagesData] = await Promise.all([
//                     fetch('http://localhost:4000/api/memberships').then(res => res.json()),
//                     fetch('http://localhost:4000/api/demos').then(res => res.json()),
//                     fetch('http://localhost:4000/api/messages').then(res => res.json())
//                 ]);

//                 setMemberships(membershipsData);
//                 setDemoSessions(demoData);
//                 setMessages(messagesData);
//             } catch (err) {
//                 setError('Failed to fetch data');
//                 console.error("Fetch error:", err);
//             } finally {
//                 setLoading(false);
//             }
//         };

//         fetchData();
//     }, [navigate]);

//     const handleTabChange = (event, newValue) => {
//         setTabValue(newValue);
//     };

//     const handleLogout = () => {
//         console.log('Logout clicked (Implement actual logout)');
//     };

//     const handleOpenMessage = (message) => {
//         setSelectedMessage(message);
//         setOpenMessageDialog(true);
//     };

//     const handleCloseMessage = () => {
//         setOpenMessageDialog(false);
//         setSelectedMessage('');
//     };

//     const handleOpenDemoMessage = (message) => {
//         setSelectedDemoMessage(message);
//         setOpenDemoMessageDialog(true);
//     };

//     const handleCloseDemoMessage = () => {
//         setOpenDemoMessageDialog(false);
//         setSelectedDemoMessage('');
//     };

//     if (loading) {
//         return (
//             <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
//                 <CircularProgress />
//             </Box>
//         );
//     }

//     if (error) {
//         return (
//             <Container maxWidth="lg" sx={{ mt: 4 }}>
//                 <Typography color="error">{error}</Typography>
//             </Container>
//         );
//     }

//     return (
//         <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
//             <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 3 }}>
//                 <Typography variant="h4" component="h1">
//                     Admin Dashboard
//                 </Typography>
//                 {/* <Button variant="contained" color="secondary" onClick={handleLogout}>
//                     Logout
//                 </Button> */}
//             </Box>

//             <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
//                 <Tabs value={tabValue} onChange={handleTabChange}>
//                     <Tab label="Memberships" />
//                     <Tab label="Demo Sessions" />
//                     <Tab label="Messages" />
//                 </Tabs>
//             </Box>

//             {/* Memberships Table */}
//             <TabPanel value={tabValue} index={0}>
//                 <TableContainer component={Paper}>
//                     <Table sx={{ minWidth: 700 }} aria-label="membership table">
//                         <TableHead>
//                             <TableRow>
//                                 <StyledTableCell>Name</StyledTableCell>
//                                 <StyledTableCell>Gender</StyledTableCell>
//                                 <StyledTableCell align="left">Weight</StyledTableCell>
//                                 <StyledTableCell align="left">Height</StyledTableCell>
//                                 <StyledTableCell align="left">City</StyledTableCell>
//                                 <StyledTableCell align="left">Email</StyledTableCell>
//                                 <StyledTableCell align="left">Mobile No</StyledTableCell>
//                                 <StyledTableCell align="left">Plan Type</StyledTableCell>
//                             </TableRow>
//                         </TableHead>
//                         <TableBody>
//                             {memberships.map((membership) => (
//                                 <StyledTableRow key={membership.id}>
//                                     <StyledTableCell component="th" scope="row">
//                                         {`${membership.firstName} ${membership.lastName}`}
//                                     </StyledTableCell>
//                                     <StyledTableCell>{membership.gender}</StyledTableCell>
//                                     <StyledTableCell align="left">{membership.weight}</StyledTableCell>
//                                     <StyledTableCell align="left">{membership.height}</StyledTableCell>
//                                     <StyledTableCell align="left">{membership.city}</StyledTableCell>
//                                     <StyledTableCell align="left">{membership.email}</StyledTableCell>
//                                     <StyledTableCell align="left">{membership.mobileNo}</StyledTableCell>
//                                     <StyledTableCell align="left">{membership.membershipType}</StyledTableCell>
//                                 </StyledTableRow>
//                             ))}
//                         </TableBody>
//                     </Table>
//                 </TableContainer>
//             </TabPanel>

//             {/* Demo Sessions Table */}
//             <TabPanel value={tabValue} index={1}>
//                 <TableContainer component={Paper}>
//                     <Table sx={{ minWidth: 700 }} aria-label="demo sessions table">
//                         <TableHead>
//                             <TableRow>
//                                 <StyledTableCell>Name</StyledTableCell>
//                                 <StyledTableCell align="left">Email</StyledTableCell>
//                                 <StyledTableCell align="left">Mobile No</StyledTableCell>
//                                 <StyledTableCell align="left">Message</StyledTableCell>
//                                 <StyledTableCell align="left">Date</StyledTableCell>
//                                 <StyledTableCell align="left">Time</StyledTableCell>
//                                 <StyledTableCell align="left">City</StyledTableCell>
//                                 <StyledTableCell align="left">Full Message</StyledTableCell>
//                             </TableRow>
//                         </TableHead>
//                         <TableBody>
//                             {demoSessions.map((session) => (
//                                 <StyledTableRow key={session.id}>
//                                     <StyledTableCell component="th" scope="row">
//                                         {session.username}
//                                     </StyledTableCell>
//                                     <StyledTableCell align="left">{session.email}</StyledTableCell>
//                                     <StyledTableCell align="left">{session.mobileNo}</StyledTableCell>
//                                     <StyledTableCell align="left" sx={{ maxWidth: 200, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
//                                         {session.message}
//                                     </StyledTableCell>
//                                     <StyledTableCell align="left">{new Date(session.date).toLocaleDateString()}</StyledTableCell>
//                                     <StyledTableCell align="left">{session.time}</StyledTableCell>
//                                     <StyledTableCell align="left">{session.city}</StyledTableCell>
//                                     <StyledTableCell align="left">
//                                         <IconButton size="small" color="primary" title="View Full Message" onClick={() => handleOpenDemoMessage(session.message)}>
//                                             <Visibility />
//                                         </IconButton>
//                                     </StyledTableCell>
//                                 </StyledTableRow>
//                             ))}
//                         </TableBody>
//                     </Table>
//                 </TableContainer>
//             </TabPanel>

//             {/* Messages/Queries Table */}
//             <TabPanel value={tabValue} index={2}>
//                 <TableContainer component={Paper}>
//                     <Table sx={{ minWidth: 700 }} aria-label="messages table">
//                         <TableHead>
//                             <TableRow>
//                                 <StyledTableCell>Name</StyledTableCell>
//                                 <StyledTableCell align="left">Email</StyledTableCell>
//                                 <StyledTableCell align="left">Phone</StyledTableCell>
//                                 <StyledTableCell align="left">Message</StyledTableCell>
//                                 <StyledTableCell align="left">Full Message</StyledTableCell>
//                             </TableRow>
//                         </TableHead>
//                         <TableBody>
//                             {messages.map((message) => (
//                                 <StyledTableRow key={message.id}>
//                                     <StyledTableCell component="th" scope="row">
//                                         {message.username}
//                                     </StyledTableCell>
//                                     <StyledTableCell align="left">{message.email}</StyledTableCell>
//                                     <StyledTableCell align="left">{message.mobileNo}</StyledTableCell>
//                                     <StyledTableCell align="left" sx={{ maxWidth: 300, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
//                                         {message.message}
//                                     </StyledTableCell>
//                                     <StyledTableCell align="left">
//                                         <IconButton size="small" color="primary" title="View Full Message" onClick={() => handleOpenMessage(message.message)}>
//                                             <Visibility />
//                                         </IconButton>
//                                     </StyledTableCell>
//                                 </StyledTableRow>
//                             ))}
//                         </TableBody>
//                     </Table>
//                 </TableContainer>
//             </TabPanel>

//             {/* Full Message Dialog for Messages */}
//             <Dialog
//                 open={openMessageDialog}
//                 onClose={handleCloseMessage}
//                 aria-labelledby="alert-dialog-title"
//                 aria-describedby="alert-dialog-description"
//             >
//                 <DialogTitle id="alert-dialog-title">
//                     {"Full Message"}
//                 </DialogTitle>
//                 <DialogContent>
//                     <Typography>{selectedMessage}</Typography>
//                 </DialogContent>
//                 <DialogActions>
//                     <Button onClick={handleCloseMessage} color="primary" autoFocus>
//                         Close
//                     </Button>
//                 </DialogActions>
//             </Dialog>

//             {/* Full Message Dialog for Demo Sessions */}
//             <Dialog
//                 open={openDemoMessageDialog}
//                 onClose={handleCloseDemoMessage}
//                 aria-labelledby="alert-dialog-title"
//                 aria-describedby="alert-dialog-description"
//             >
//                 <DialogTitle id="alert-dialog-title">
//                     {"Full Message"}
//                 </DialogTitle>
//                 <DialogContent>
//                     <Typography>{selectedDemoMessage}</Typography>
//                 </DialogContent>
//                 <DialogActions>
//                     <Button onClick={handleCloseDemoMessage} color="primary" autoFocus>
//                         Close
//                     </Button>
//                 </DialogActions>
//             </Dialog>
//         </Container>
//     );
// };

// export default AdminDashboard;


// import React, { useState, useEffect } from 'react';
// import {
//     Container,
//     Box,
//     Typography,
//     Button,
//     Table,
//     TableBody,
//     TableCell,
//     TableContainer,
//     TableHead,
//     TableRow,
//     CircularProgress,
//     Tabs,
//     Tab,
//     IconButton,
//     Paper
// } from '@mui/material';
// import { Visibility, FilePdf, FileExcel } from '@mui/icons-material';
// import { useNavigate } from 'react-router-dom';
// import { styled } from '@mui/material/styles';
// import Dialog from '@mui/material/Dialog';
// import DialogActions from '@mui/material/DialogActions';
// import DialogContent from '@mui/material/DialogContent';
// import DialogTitle from '@mui/material/DialogTitle';
// import jsPDF from 'jspdf';
// import * as XLSX from 'xlsx';

// const TabPanel = (props) => {
//     const { children, value, index, ...other } = props;
//     return (
//         <div
//             role="tabpanel"
//             hidden={value !== index}
//             {...other}
//         >
//             {value === index && (
//                 <Box sx={{ p: 3 }}>
//                     {children}
//                 </Box>
//             )}
//         </div>
//     );
// };

// const StyledTableCell = styled(TableCell)(({ theme }) => ({
//     [`&.MuiTableCell-head`]: {
//         backgroundColor: theme.palette.common.black,
//         color: theme.palette.common.white,
//     },
//     [`&.MuiTableCell-body`]: {
//         fontSize: 14,
//     },
// }));

// const StyledTableRow = styled(TableRow)(({ theme }) => ({
//     '&:nth-of-type(odd)': {
//         backgroundColor: theme.palette.action.hover,
//     },
//     '&:last-child td, &:last-child th': {
//         border: 0,
//     },
// }));

// const AdminDashboard = () => {
//     const navigate = useNavigate();
//     const [tabValue, setTabValue] = useState(0);
//     const [memberships, setMemberships] = useState([]);
//     const [demoSessions, setDemoSessions] = useState([]);
//     const [messages, setMessages] = useState([]);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState('');
//     const [openMessageDialog, setOpenMessageDialog] = useState(false);
//     const [selectedMessage, setSelectedMessage] = useState('');
//     const [openDemoMessageDialog, setOpenDemoMessageDialog] = useState(false);
//     const [selectedDemoMessage, setSelectedDemoMessage] = useState('');

//     useEffect(() => {
//         const fetchData = async () => {
//             try {
//                 const [membershipsData, demoData, messagesData] = await Promise.all([
//                     fetch('http://localhost:4000/api/memberships').then(res => res.json()),
//                     fetch('http://localhost:4000/api/demos').then(res => res.json()),
//                     fetch('http://localhost:4000/api/messages').then(res => res.json())
//                 ]);

//                 setMemberships(membershipsData);
//                 setDemoSessions(demoData);
//                 setMessages(messagesData);
//             } catch (err) {
//                 setError('Failed to fetch data');
//                 console.error("Fetch error:", err);
//             } finally {
//                 setLoading(false);
//             }
//         };

//         fetchData();
//     }, [navigate]);

//     const handleTabChange = (event, newValue) => {
//         setTabValue(newValue);
//     };

//     const handleLogout = () => {
//         console.log('Logout clicked (Implement actual logout)');
//     };

//     const handleOpenMessage = (message) => {
//         setSelectedMessage(message);
//         setOpenMessageDialog(true);
//     };

//     const handleCloseMessage = () => {
//         setOpenMessageDialog(false);
//         setSelectedMessage('');
//     };

//     const handleOpenDemoMessage = (message) => {
//         setSelectedDemoMessage(message);
//         setOpenDemoMessageDialog(true);
//     };

//     const handleCloseDemoMessage = () => {
//         setOpenDemoMessageDialog(false);
//         setSelectedDemoMessage('');
//     };

//     const generatePDF = (data, fileName, headers) => {
//         const doc = new jsPDF();
//         doc.text(fileName, 10, 10);

//         let y = 20;
//         let x = 10;
//         const colWidth = 40;

//         // Add headers
//         headers.forEach((header) => {
//             doc.text(header, x, y);
//             x += colWidth;
//         });

//         y += 10;
//         x = 10;

//         // Add data rows
//         data.forEach((item) => {
//             x = 10;
//             headers.forEach((header) => {
//                 doc.text(String(item[header.toLowerCase()]), x, y);
//                 x += colWidth;
//             });
//             y += 10;
//         });

//         doc.save(`${fileName}.pdf`);
//     };

//     const generateExcel = (data, fileName, headers) => {
//         const worksheet = XLSX.utils.json_to_sheet(data.map((item) => {
//             const row = {};
//             headers.forEach((header) => {
//                 row[header] = item[header.toLowerCase()];
//             });
//             return row;
//         }));
//         const workbook = XLSX.utils.book_new();
//         XLSX.utils.book_append_sheet(workbook, worksheet, fileName);
//         XLSX.writeFile(workbook, `${fileName}.xlsx`);
//     };

//     return (
//         <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
//             <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 3 }}>
//                 <Typography variant="h4" component="h1">
//                     Admin Dashboard
//                 </Typography>
//             </Box>

//             <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
//                 <Tabs value={tabValue} onChange={handleTabChange}>
//                     <Tab label="Memberships" />
//                     <Tab label="Demo Sessions" />
//                     <Tab label="Messages" />
//                 </Tabs>
//             </Box>

//             {/* Memberships Table */}
//             <TabPanel value={tabValue} index={0}>
//                 <Box sx={{ display: 'flex', justifyContent: 'flex-end', mb: 2 }}>
//                     <IconButton onClick={() => generatePDF(memberships, 'Memberships', ['FirstName', 'LastName', 'Gender', 'Weight', 'Height', 'City', 'Email', 'MobileNo', 'MembershipType'])}>
//                         <FilePdf />
//                     </IconButton>
//                     <IconButton onClick={() => generateExcel(memberships, 'Memberships', ['FirstName', 'LastName', 'Gender', 'Weight', 'Height', 'City', 'Email', 'MobileNo', 'MembershipType'])}>
//                         <FileExcel />
//                     </IconButton>
//                 </Box>
//                 <TableContainer component={Paper}>
//                     <Table sx={{ minWidth: 700 }} aria-label="membership table">
//                         <TableHead>
//                             <TableRow>
//                                 <StyledTableCell>Name</StyledTableCell>
//                                 <StyledTableCell>Gender</StyledTableCell>
//                                 <StyledTableCell align="left">Weight</StyledTableCell>
//                                 <StyledTableCell align="left">Height</StyledTableCell>
//                                 <StyledTableCell align="left">City</StyledTableCell>
//                                 <StyledTableCell align="left">Email</StyledTableCell>
//                                 <StyledTableCell align="left">Mobile No</StyledTableCell>
//                                 <StyledTableCell align="left">Plan Type</StyledTableCell>
//                             </TableRow>
//                         </TableHead>
//                         <TableBody>
//                             {memberships.map((membership) => (
//                                 <StyledTableRow key={membership.id}>
//                                     <StyledTableCell component="th" scope="row">
//                                         {`${membership.firstName} ${membership.lastName}`}
//                                     </StyledTableCell>
//                                     <StyledTableCell>{membership.gender}</StyledTableCell>
//                                     <StyledTableCell align="left">{membership.weight}</StyledTableCell>
//                                     <StyledTableCell align="left">{membership.height}</StyledTableCell>
//                                     <StyledTableCell align="left">{membership.city}</StyledTableCell>
//                                     <StyledTableCell align="left">{membership.email}</StyledTableCell>
//                                     <StyledTableCell align="left">{membership.mobileNo}</StyledTableCell>
//                                     <StyledTableCell align="left">{membership.membershipType}</StyledTableCell>
//                                 </StyledTableRow>
//                             ))}
//                         </TableBody>
//                     </Table>
//                 </TableContainer>
//             </TabPanel>

//             {/* Demo Sessions Table */}
//             <TabPanel value={tabValue} index={1}>
//                 <Box sx={{ display: 'flex', justifyContent: 'flex-end', mb: 2 }}>
//                     <IconButton onClick={() => generatePDF(demoSessions, 'DemoSessions', ['Username', 'Email', 'MobileNo', 'Message', 'Date', 'Time', 'City'])}>
//                         <FilePdf />
//                     </IconButton>
//                     <IconButton onClick={() => generateExcel(demoSessions, 'DemoSessions', ['Username', 'Email', 'MobileNo', 'Message', 'Date', 'Time', 'City'])}>
//                         <FileExcel />
//                     </IconButton>
//                 </Box>
//                 <TableContainer component={Paper}>
//                     <Table sx={{ minWidth: 700 }} aria-label="demo sessions table">
//                         <TableHead>
//                             <TableRow>
//                                 <StyledTableCell>Name</StyledTableCell>
//                                 <StyledTableCell align="left">Email</StyledTableCell>
//                                 <StyledTableCell align="left">Mobile No</StyledTableCell>
//                                 <StyledTableCell align="left">Message</StyledTableCell>
//                                 <StyledTableCell align="left">Date</StyledTableCell>
//                                 <StyledTableCell align="left">Time</StyledTableCell>
//                                 <StyledTableCell align="left">City</StyledTableCell>
//                                 <StyledTableCell align="left">Full Message</StyledTableCell>
//                             </TableRow>
//                         </TableHead>
//                         <TableBody>
//                             {demoSessions.map((session) => (
//                                 <StyledTableRow key={session.id}>
//                                     <StyledTableCell component="th" scope="row">
//                                         {session.username}
//                                     </StyledTableCell>
//                                     <StyledTableCell align="left">{session.email}</StyledTableCell>
//                                     <StyledTableCell align="left">{session.mobileNo}</StyledTableCell>
//                                     <StyledTableCell align="left" sx={{ maxWidth: 200, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
//                                         {session.message}
//                                     </StyledTableCell>
//                                     <StyledTableCell align="left">{new Date(session.date).toLocaleDateString()}</StyledTableCell>
//                                     <StyledTableCell align="left">{session.time}</StyledTableCell>
//                                     <StyledTableCell align="left">{session.city}</StyledTableCell>
//                                     <StyledTableCell align="left">
//                                         <IconButton size="small" color="primary" title="View Full Message" onClick={() => handleOpenDemoMessage(session.message)}>
//                                             <Visibility />
//                                         </IconButton>
//                                     </StyledTableCell>
//                                 </StyledTableRow>
//                             ))}
//                         </TableBody>
//                     </Table>
//                 </TableContainer>
//             </TabPanel>

//             {/* Messages/Queries Table */}
//             <TabPanel value={tabValue} index={2}>
//                 <Box sx={{ display: 'flex', justifyContent: 'flex-end', mb: 2 }}>
//                     <IconButton onClick={() => generatePDF(messages, 'Messages', ['Username', 'Email', 'MobileNo', 'Message'])}>
//                         <FilePdf />
//                     </IconButton>
//                     <IconButton onClick={() => generateExcel(messages, 'Messages', ['Username', 'Email', 'MobileNo', 'Message'])}>
//                         <FileExcel />
//                     </IconButton>
//                 </Box>
//                 <TableContainer component={Paper}>
//                     <Table sx={{ minWidth: 700 }} aria-label="messages table">
//                         <TableHead>
//                             <TableRow>
//                                 <StyledTableCell>Name</StyledTableCell>
//                                 <StyledTableCell align="left">Email</StyledTableCell>
//                                 <StyledTableCell align="left">Phone</StyledTableCell>
//                                 <StyledTableCell align="left">Message</StyledTableCell>
//                                 <StyledTableCell align="left">Full Message</StyledTableCell>
//                             </TableRow>
//                         </TableHead>
//                         <TableBody>
//                             {messages.map((message) => (
//                                 <StyledTableRow key={message.id}>
//                                     <StyledTableCell component="th" scope="row">
//                                         {message.username}
//                                     </StyledTableCell>
//                                     <StyledTableCell align="left">{message.email}</StyledTableCell>
//                                     <StyledTableCell align="left">{message.mobileNo}</StyledTableCell>
//                                     <StyledTableCell align="left" sx={{ maxWidth: 300, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
//                                         {message.message}
//                                     </StyledTableCell>
//                                     <StyledTableCell align="left">
//                                         <IconButton size="small" color="primary" title="View Full Message" onClick={() => handleOpenMessage(message.message)}>
//                                             <Visibility />
//                                         </IconButton>
//                                     </StyledTableCell>
//                                 </StyledTableRow>
//                             ))}
//                         </TableBody>
//                     </Table>
//                 </TableContainer>
//             </TabPanel>

//             {/* Full Message Dialog for Messages */}
//             <Dialog
//                 open={openMessageDialog}
//                 onClose={handleCloseMessage}
//                 aria-labelledby="alert-dialog-title"
//                 aria-describedby="alert-dialog-description"
//             >
//                 <DialogTitle id="alert-dialog-title">
//                     {"Full Message"}
//                 </DialogTitle>
//                 <DialogContent>
//                     <Typography>{selectedMessage}</Typography>
//                 </DialogContent>
//                 <DialogActions>
//                     <Button onClick={handleCloseMessage} color="primary" autoFocus>
//                         Close
//                     </Button>
//                 </DialogActions>
//             </Dialog>

//             {/* Full Message Dialog for Demo Sessions */}
//             <Dialog
//                 open={openDemoMessageDialog}
//                 onClose={handleCloseDemoMessage}
//                 aria-labelledby="alert-dialog-title"
//                 aria-describedby="alert-dialog-description"
//             >
//                 <DialogTitle id="alert-dialog-title">
//                     {"Full Message"}
//                 </DialogTitle>
//                 <DialogContent>
//                     <Typography>{selectedDemoMessage}</Typography>
//                 </DialogContent>
//                 <DialogActions>
//                     <Button onClick={handleCloseDemoMessage} color="primary" autoFocus>
//                         Close
//                     </Button>
//                 </DialogActions>
//             </Dialog>
//         </Container>
//     );
// };

// export default AdminDashboard;



// import React, { useState, useEffect } from 'react';
// import {
//     Container,
//     Box,
//     Typography,
//     Button,
//     Table,
//     TableBody,
//     TableCell,
//     TableContainer,
//     TableHead,
//     TableRow,
//     CircularProgress,
//     Tabs,
//     Tab,
//     IconButton,
//     Paper,
//     TextField,
//     Grid,
//     FormControl,
//     InputLabel,
//     Select,
//     MenuItem
// } from '@mui/material';
// import { 
//     Visibility, 
//     InsertDriveFile as FileExcel, 
//     PictureAsPdf as FilePdf 
//   } from '@mui/icons-material';
// import { useNavigate } from 'react-router-dom';
// import { styled } from '@mui/material/styles';
// import Dialog from '@mui/material/Dialog';
// import DialogActions from '@mui/material/DialogActions';
// import DialogContent from '@mui/material/DialogContent';
// import DialogTitle from '@mui/material/DialogTitle';
// import jsPDF from 'jspdf';
// import * as XLSX from 'xlsx';
// import { DatePicker } from '@mui/x-date-pickers/DatePicker';
// import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
// import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';

// const TabPanel = (props) => {
//     const { children, value, index, ...other } = props;
//     return (
//         <div
//             role="tabpanel"
//             hidden={value !== index}
//             {...other}
//         >
//             {value === index && (
//                 <Box sx={{ p: 3 }}>
//                     {children}
//                 </Box>
//             )}
//         </div>
//     );
// };

// const StyledTableCell = styled(TableCell)(({ theme }) => ({
//     [`&.MuiTableCell-head`]: {
//         backgroundColor: theme.palette.common.black,
//         color: theme.palette.common.white,
//     },
//     [`&.MuiTableCell-body`]: {
//         fontSize: 14,
//     },
// }));

// const StyledTableRow = styled(TableRow)(({ theme }) => ({
//     '&:nth-of-type(odd)': {
//         backgroundColor: theme.palette.action.hover,
//     },
//     '&:last-child td, &:last-child th': {
//         border: 0,
//     },
// }));

// const AdminDashboard = () => {
//     const navigate = useNavigate();
//     const [tabValue, setTabValue] = useState(0);
//     const [allMemberships, setAllMemberships] = useState([]);
//     const [allDemoSessions, setAllDemoSessions] = useState([]);
//     const [allMessages, setAllMessages] = useState([]);
//     const [memberships, setMemberships] = useState([]);
//     const [demoSessions, setDemoSessions] = useState([]);
//     const [messages, setMessages] = useState([]);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState('');
//     const [openMessageDialog, setOpenMessageDialog] = useState(false);
//     const [selectedMessage, setSelectedMessage] = useState('');
//     const [openDemoMessageDialog, setOpenDemoMessageDialog] = useState(false);
//     const [selectedDemoMessage, setSelectedDemoMessage] = useState('');
    
//     // Date range states
//     const [startDate, setStartDate] = useState(null);
//     const [endDate, setEndDate] = useState(null);
//     const [dateFilterApplied, setDateFilterApplied] = useState(false);

//     useEffect(() => {
//         const fetchData = async () => {
//             try {
//                 const [membershipsData, demoData, messagesData] = await Promise.all([
//                     fetch('http://localhost:4000/api/memberships').then(res => res.json()),
//                     fetch('http://localhost:4000/api/demos').then(res => res.json()),
//                     fetch('http://localhost:4000/api/messages').then(res => res.json())
//                 ]);

//                 // Convert date strings to Date objects for easier filtering
//                 const processedMemberships = membershipsData.map(item => ({
//                     ...item,
//                     createdAt: new Date(item.createdAt)
//                 }));
                
//                 const processedDemos = demoData.map(item => ({
//                     ...item,
//                     date: new Date(item.date),
//                     createdAt: new Date(item.createdAt)
//                 }));
                
//                 const processedMessages = messagesData.map(item => ({
//                     ...item,
//                     createdAt: new Date(item.createdAt)
//                 }));

//                 setAllMemberships(processedMemberships);
//                 setAllDemoSessions(processedDemos);
//                 setAllMessages(processedMessages);
//                 setMemberships(processedMemberships);
//                 setDemoSessions(processedDemos);
//                 setMessages(processedMessages);
//             } catch (err) {
//                 setError('Failed to fetch data');
//                 console.error("Fetch error:", err);
//             } finally {
//                 setLoading(false);
//             }
//         };

//         fetchData();
//     }, [navigate]);

//     const handleTabChange = (event, newValue) => {
//         setTabValue(newValue);
//     };

//     const handleLogout = () => {
//         console.log('Logout clicked (Implement actual logout)');
//     };

//     const handleOpenMessage = (message) => {
//         setSelectedMessage(message);
//         setOpenMessageDialog(true);
//     };

//     const handleCloseMessage = () => {
//         setOpenMessageDialog(false);
//         setSelectedMessage('');
//     };

//     const handleOpenDemoMessage = (message) => {
//         setSelectedDemoMessage(message);
//         setOpenDemoMessageDialog(true);
//     };

//     const handleCloseDemoMessage = () => {
//         setOpenDemoMessageDialog(false);
//         setSelectedDemoMessage('');
//     };

//     const applyDateFilter = () => {
//         if (!startDate || !endDate) {
//             alert('Please select both start and end dates');
//             return;
//         }
        
//         // Adjust end date to include the entire day
//         const adjustedEndDate = new Date(endDate);
//         adjustedEndDate.setHours(23, 59, 59, 999);
        
//         setDateFilterApplied(true);
        
//         // Filter memberships
//         const filteredMemberships = allMemberships.filter(item => 
//             item.createdAt >= startDate && item.createdAt <= adjustedEndDate
//         );
//         setMemberships(filteredMemberships);
        
//         // Filter demo sessions
//         const filteredDemos = allDemoSessions.filter(item => 
//             item.date >= startDate && item.date <= adjustedEndDate
//         );
//         setDemoSessions(filteredDemos);
        
//         // Filter messages
//         const filteredMessages = allMessages.filter(item => 
//             item.createdAt >= startDate && item.createdAt <= adjustedEndDate
//         );
//         setMessages(filteredMessages);
//     };

//     const resetDateFilter = () => {
//         setStartDate(null);
//         setEndDate(null);
//         setDateFilterApplied(false);
//         setMemberships(allMemberships);
//         setDemoSessions(allDemoSessions);
//         setMessages(allMessages);
//     };

//     const generatePDF = (data, fileName, headers) => {
//         const doc = new jsPDF();
//         doc.text(`${fileName} (${dateFilterApplied ? `From ${startDate.toLocaleDateString()} to ${endDate.toLocaleDateString()}` : 'All Data'})`, 10, 10);

//         let y = 20;
//         let x = 10;
//         const colWidth = 40;

//         // Add headers
//         headers.forEach((header) => {
//             doc.text(header, x, y);
//             x += colWidth;
//         });

//         y += 10;
//         x = 10;

//         // Add data rows
//         data.forEach((item) => {
//             x = 10;
//             headers.forEach((header) => {
//                 const value = item[header.toLowerCase()] || item[header] || '';
//                 doc.text(String(value), x, y);
//                 x += colWidth;
//             });
//             y += 10;
//         });

//         doc.save(`${fileName}_${dateFilterApplied ? `${startDate.toISOString().split('T')[0]}_to_${endDate.toISOString().split('T')[0]}` : 'all_data'}.pdf`);
//     };

//     const generateExcel = (data, fileName, headers) => {
//         const worksheet = XLSX.utils.json_to_sheet(data.map((item) => {
//             const row = {};
//             headers.forEach((header) => {
//                 row[header] = item[header.toLowerCase()] || item[header] || '';
//             });
//             return row;
//         }));
//         const workbook = XLSX.utils.book_new();
//         XLSX.utils.book_append_sheet(workbook, worksheet, fileName);
//         XLSX.writeFile(workbook, `${fileName}_${dateFilterApplied ? `${startDate.toISOString().split('T')[0]}_to_${endDate.toISOString().split('T')[0]}` : 'all_data'}.xlsx`);
//     };

//     return (
//         <LocalizationProvider dateAdapter={AdapterDateFns}>
//             <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
//                 <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 3 }}>
//                     <Typography variant="h4" component="h1">
//                         Admin Dashboard
//                     </Typography>
//                 </Box>

//                 {/* Date Range Filter */}
//                 <Paper elevation={3} sx={{ p: 2, mb: 3 }}>
//                     <Typography variant="h6" gutterBottom>
//                         Filter by Date Range
//                     </Typography>
//                     <Grid container spacing={2} alignItems="center">
//                         <Grid item xs={12} sm={4}>
//                             <DatePicker
//                                 label="Start Date"
//                                 value={startDate}
//                                 onChange={(newValue) => setStartDate(newValue)}
//                                 renderInput={(params) => <TextField {...params} fullWidth />}
//                             />
//                         </Grid>
//                         <Grid item xs={12} sm={4}>
//                             <DatePicker
//                                 label="End Date"
//                                 value={endDate}
//                                 onChange={(newValue) => setEndDate(newValue)}
//                                 renderInput={(params) => <TextField {...params} fullWidth />}
//                                 minDate={startDate}
//                             />
//                         </Grid>
//                         <Grid item xs={12} sm={4}>
//                             <Button
//                                 variant="contained"
//                                 color="primary"
//                                 onClick={applyDateFilter}
//                                 disabled={!startDate || !endDate}
//                                 sx={{ mr: 2 }}
//                             >
//                                 Apply Filter
//                             </Button>
//                             <Button
//                                 variant="outlined"
//                                 color="secondary"
//                                 onClick={resetDateFilter}
//                                 disabled={!dateFilterApplied}
//                             >
//                                 Reset
//                             </Button>
//                         </Grid>
//                     </Grid>
//                 </Paper>

//                 <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
//                     <Tabs value={tabValue} onChange={handleTabChange}>
//                         <Tab label="Memberships" />
//                         <Tab label="Demo Sessions" />
//                         <Tab label="Messages" />
//                     </Tabs>
//                 </Box>

//                 {/* Memberships Table */}
//                 <TabPanel value={tabValue} index={0}>
//                     <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
//                         <Typography variant="subtitle1">
//                             {dateFilterApplied 
//                                 ? `Showing memberships from ${startDate.toLocaleDateString()} to ${endDate.toLocaleDateString()} (${memberships.length} records)`
//                                 : `Showing all memberships (${memberships.length} records)`}
//                         </Typography>
//                         <Box>
//                             <IconButton onClick={() => generatePDF(memberships, 'Memberships', ['FirstName', 'LastName', 'Gender', 'Weight', 'Height', 'City', 'Email', 'MobileNo', 'MembershipType', 'CreatedAt'])}>
//                                 <FilePdf />
//                             </IconButton>
//                             <IconButton onClick={() => generateExcel(memberships, 'Memberships', ['FirstName', 'LastName', 'Gender', 'Weight', 'Height', 'City', 'Email', 'MobileNo', 'MembershipType', 'CreatedAt'])}>
//                                 <FileExcel />
//                             </IconButton>
//                         </Box>
//                     </Box>
//                     <TableContainer component={Paper}>
//                         <Table sx={{ minWidth: 700 }} aria-label="membership table">
//                             <TableHead>
//                                 <TableRow>
//                                     <StyledTableCell>Name</StyledTableCell>
//                                     <StyledTableCell>Gender</StyledTableCell>
//                                     <StyledTableCell align="left">Weight</StyledTableCell>
//                                     <StyledTableCell align="left">Height</StyledTableCell>
//                                     <StyledTableCell align="left">City</StyledTableCell>
//                                     <StyledTableCell align="left">Email</StyledTableCell>
//                                     <StyledTableCell align="left">Mobile No</StyledTableCell>
//                                     <StyledTableCell align="left">Plan Type</StyledTableCell>
//                                     <StyledTableCell align="left">Date</StyledTableCell>
//                                 </TableRow>
//                             </TableHead>
//                             <TableBody>
//                                 {memberships.length > 0 ? (
//                                     memberships.map((membership) => (
//                                         <StyledTableRow key={membership.id}>
//                                             <StyledTableCell component="th" scope="row">
//                                                 {`${membership.firstName} ${membership.lastName}`}
//                                             </StyledTableCell>
//                                             <StyledTableCell>{membership.gender}</StyledTableCell>
//                                             <StyledTableCell align="left">{membership.weight}</StyledTableCell>
//                                             <StyledTableCell align="left">{membership.height}</StyledTableCell>
//                                             <StyledTableCell align="left">{membership.city}</StyledTableCell>
//                                             <StyledTableCell align="left">{membership.email}</StyledTableCell>
//                                             <StyledTableCell align="left">{membership.mobileNo}</StyledTableCell>
//                                             <StyledTableCell align="left">{membership.membershipType}</StyledTableCell>
//                                             <StyledTableCell align="left">{membership.createdAt.toLocaleDateString()}</StyledTableCell>
//                                         </StyledTableRow>
//                                     ))
//                                 ) : (
//                                     <TableRow>
//                                         <TableCell colSpan={9} align="center">
//                                             No data available
//                                         </TableCell>
//                                     </TableRow>
//                                 )}
//                             </TableBody>
//                         </Table>
//                     </TableContainer>
//                 </TabPanel>

//                 {/* Demo Sessions Table */}
//                 <TabPanel value={tabValue} index={1}>
//                     <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
//                         <Typography variant="subtitle1">
//                             {dateFilterApplied 
//                                 ? `Showing demo sessions from ${startDate.toLocaleDateString()} to ${endDate.toLocaleDateString()} (${demoSessions.length} records)`
//                                 : `Showing all demo sessions (${demoSessions.length} records)`}
//                         </Typography>
//                         <Box>
//                             <IconButton onClick={() => generatePDF(demoSessions, 'DemoSessions', ['Username', 'Email', 'MobileNo', 'Message', 'Date', 'Time', 'City', 'CreatedAt'])}>
//                                 <FilePdf />
//                             </IconButton>
//                             <IconButton onClick={() => generateExcel(demoSessions, 'DemoSessions', ['Username', 'Email', 'MobileNo', 'Message', 'Date', 'Time', 'City', 'CreatedAt'])}>
//                                 <FileExcel />
//                             </IconButton>
//                         </Box>
//                     </Box>
//                     <TableContainer component={Paper}>
//                         <Table sx={{ minWidth: 700 }} aria-label="demo sessions table">
//                             <TableHead>
//                                 <TableRow>
//                                     <StyledTableCell>Name</StyledTableCell>
//                                     <StyledTableCell align="left">Email</StyledTableCell>
//                                     <StyledTableCell align="left">Mobile No</StyledTableCell>
//                                     <StyledTableCell align="left">Message</StyledTableCell>
//                                     <StyledTableCell align="left">Date</StyledTableCell>
//                                     <StyledTableCell align="left">Time</StyledTableCell>
//                                     <StyledTableCell align="left">City</StyledTableCell>
//                                     <StyledTableCell align="left">Created At</StyledTableCell>
//                                     <StyledTableCell align="left">Full Message</StyledTableCell>
//                                 </TableRow>
//                             </TableHead>
//                             <TableBody>
//                                 {demoSessions.length > 0 ? (
//                                     demoSessions.map((session) => (
//                                         <StyledTableRow key={session.id}>
//                                             <StyledTableCell component="th" scope="row">
//                                                 {session.username}
//                                             </StyledTableCell>
//                                             <StyledTableCell align="left">{session.email}</StyledTableCell>
//                                             <StyledTableCell align="left">{session.mobileNo}</StyledTableCell>
//                                             <StyledTableCell align="left" sx={{ maxWidth: 200, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
//                                                 {session.message}
//                                             </StyledTableCell>
//                                             <StyledTableCell align="left">{session.date.toLocaleDateString()}</StyledTableCell>
//                                             <StyledTableCell align="left">{session.time}</StyledTableCell>
//                                             <StyledTableCell align="left">{session.city}</StyledTableCell>
//                                             <StyledTableCell align="left">{session.createdAt.toLocaleDateString()}</StyledTableCell>
//                                             <StyledTableCell align="left">
//                                                 <IconButton size="small" color="primary" title="View Full Message" onClick={() => handleOpenDemoMessage(session.message)}>
//                                                     <Visibility />
//                                                 </IconButton>
//                                             </StyledTableCell>
//                                         </StyledTableRow>
//                                     ))
//                                 ) : (
//                                     <TableRow>
//                                         <TableCell colSpan={9} align="center">
//                                             No data available
//                                         </TableCell>
//                                     </TableRow>
//                                 )}
//                             </TableBody>
//                         </Table>
//                     </TableContainer>
//                 </TabPanel>

//                 {/* Messages/Queries Table */}
//                 <TabPanel value={tabValue} index={2}>
//                     <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
//                         <Typography variant="subtitle1">
//                             {dateFilterApplied 
//                                 ? `Showing messages from ${startDate.toLocaleDateString()} to ${endDate.toLocaleDateString()} (${messages.length} records)`
//                                 : `Showing all messages (${messages.length} records)`}
//                         </Typography>
//                         <Box>
//                             <IconButton onClick={() => generatePDF(messages, 'Messages', ['Username', 'Email', 'MobileNo', 'Message', 'CreatedAt'])}>
//                                 <FilePdf />
//                             </IconButton>
//                             <IconButton onClick={() => generateExcel(messages, 'Messages', ['Username', 'Email', 'MobileNo', 'Message', 'CreatedAt'])}>
//                                 <FileExcel />
//                             </IconButton>
//                         </Box>
//                     </Box>
//                     <TableContainer component={Paper}>
//                         <Table sx={{ minWidth: 700 }} aria-label="messages table">
//                             <TableHead>
//                                 <TableRow>
//                                     <StyledTableCell>Name</StyledTableCell>
//                                     <StyledTableCell align="left">Email</StyledTableCell>
//                                     <StyledTableCell align="left">Phone</StyledTableCell>
//                                     <StyledTableCell align="left">Message</StyledTableCell>
//                                     <StyledTableCell align="left">Created At</StyledTableCell>
//                                     <StyledTableCell align="left">Full Message</StyledTableCell>
//                                 </TableRow>
//                             </TableHead>
//                             <TableBody>
//                                 {messages.length > 0 ? (
//                                     messages.map((message) => (
//                                         <StyledTableRow key={message.id}>
//                                             <StyledTableCell component="th" scope="row">
//                                                 {message.username}
//                                             </StyledTableCell>
//                                             <StyledTableCell align="left">{message.email}</StyledTableCell>
//                                             <StyledTableCell align="left">{message.mobileNo}</StyledTableCell>
//                                             <StyledTableCell align="left" sx={{ maxWidth: 300, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
//                                                 {message.message}
//                                             </StyledTableCell>
//                                             <StyledTableCell align="left">{message.createdAt.toLocaleDateString()}</StyledTableCell>
//                                             <StyledTableCell align="left">
//                                                 <IconButton size="small" color="primary" title="View Full Message" onClick={() => handleOpenMessage(message.message)}>
//                                                     <Visibility />
//                                                 </IconButton>
//                                             </StyledTableCell>
//                                         </StyledTableRow>
//                                     ))
//                                 ) : (
//                                     <TableRow>
//                                         <TableCell colSpan={6} align="center">
//                                             No data available
//                                         </TableCell>
//                                     </TableRow>
//                                 )}
//                             </TableBody>
//                         </Table>
//                     </TableContainer>
//                 </TabPanel>

//                 {/* Full Message Dialog for Messages */}
//                 <Dialog
//                     open={openMessageDialog}
//                     onClose={handleCloseMessage}
//                     aria-labelledby="alert-dialog-title"
//                     aria-describedby="alert-dialog-description"
//                     maxWidth="md"
//                     fullWidth
//                 >
//                     <DialogTitle id="alert-dialog-title">
//                         {"Full Message"}
//                     </DialogTitle>
//                     <DialogContent>
//                         <Typography style={{ whiteSpace: 'pre-wrap' }}>{selectedMessage}</Typography>
//                     </DialogContent>
//                     <DialogActions>
//                         <Button onClick={handleCloseMessage} color="primary" autoFocus>
//                             Close
//                         </Button>
//                     </DialogActions>
//                 </Dialog>

//                 {/* Full Message Dialog for Demo Sessions */}
//                 <Dialog
//                     open={openDemoMessageDialog}
//                     onClose={handleCloseDemoMessage}
//                     aria-labelledby="alert-dialog-title"
//                     aria-describedby="alert-dialog-description"
//                     maxWidth="md"
//                     fullWidth
//                 >
//                     <DialogTitle id="alert-dialog-title">
//                         {"Full Message"}
//                     </DialogTitle>
//                     <DialogContent>
//                         <Typography style={{ whiteSpace: 'pre-wrap' }}>{selectedDemoMessage}</Typography>
//                     </DialogContent>
//                     <DialogActions>
//                         <Button onClick={handleCloseDemoMessage} color="primary" autoFocus>
//                             Close
//                         </Button>
//                     </DialogActions>
//                 </Dialog>
//             </Container>
//         </LocalizationProvider>
//     );
// };

// export default AdminDashboard;


import React, { useState, useEffect } from 'react';
import {
    Container,
    Box,
    Typography,
    Button,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Tabs,
    Tab,
    IconButton,
    Paper,
    TextField,
    Grid
} from '@mui/material';
import { 
    Visibility, 
    InsertDriveFile as FileExcel, 
    PictureAsPdf as FilePdf 
} from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';
// import 'jspdf-autotable';
import * as XLSX from 'xlsx';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';

const TabPanel = (props) => {
    const { children, value, index, ...other } = props;
    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    {children}
                </Box>
            )}
        </div>
    );
};

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.MuiTableCell-head`]: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    [`&.MuiTableCell-body`]: {
        fontSize: 14,
    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));

const AdminDashboard = () => {
    const navigate = useNavigate();
    const [tabValue, setTabValue] = useState(0);
    const [allMemberships, setAllMemberships] = useState([]);
    const [allDemoSessions, setAllDemoSessions] = useState([]);
    const [allMessages, setAllMessages] = useState([]);
    const [memberships, setMemberships] = useState([]);
    const [demoSessions, setDemoSessions] = useState([]);
    const [messages, setMessages] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const [openMessageDialog, setOpenMessageDialog] = useState(false);
    const [selectedMessage, setSelectedMessage] = useState('');
    const [openDemoMessageDialog, setOpenDemoMessageDialog] = useState(false);
    const [selectedDemoMessage, setSelectedDemoMessage] = useState('');
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);
    const [dateFilterApplied, setDateFilterApplied] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const [membershipsData, demoData, messagesData] = await Promise.all([
                    fetch('http://localhost:4000/api/memberships').then(res => res.json()),
                    fetch('http://localhost:4000/api/demos').then(res => res.json()),
                    fetch('http://localhost:4000/api/messages').then(res => res.json())
                ]);

                const processedMemberships = membershipsData.map(item => ({
                    ...item,
                    createdAt: new Date(item.created_at || item.createdAt)
                }));
                
                const processedDemos = demoData.map(item => ({
                    ...item,
                    date: new Date(item.date),
                    createdAt: new Date(item.created_at || item.createdAt)
                }));
                
                const processedMessages = messagesData.map(item => ({
                    ...item,
                    createdAt: new Date(item.created_at || item.createdAt)
                }));

                setAllMemberships(processedMemberships);
                setAllDemoSessions(processedDemos);
                setAllMessages(processedMessages);
                setMemberships(processedMemberships);
                setDemoSessions(processedDemos);
                setMessages(processedMessages);
            } catch (err) {
                setError('Failed to fetch data');
                console.error("Fetch error:", err);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    const handleTabChange = (event, newValue) => {
        setTabValue(newValue);
    };

    const handleOpenMessage = (message) => {
        setSelectedMessage(message);
        setOpenMessageDialog(true);
    };

    const handleCloseMessage = () => {
        setOpenMessageDialog(false);
        setSelectedMessage('');
    };

    const handleOpenDemoMessage = (message) => {
        setSelectedDemoMessage(message);
        setOpenDemoMessageDialog(true);
    };

    const handleCloseDemoMessage = () => {
        setOpenDemoMessageDialog(false);
        setSelectedDemoMessage('');
    };

    const applyDateFilter = () => {
        if (!startDate || !endDate) {
            alert('Please select both start and end dates');
            return;
        }
        
        const adjustedEndDate = new Date(endDate);
        adjustedEndDate.setHours(23, 59, 59, 999);
        
        setDateFilterApplied(true);
        
        const filteredMemberships = allMemberships.filter(item => 
            item.createdAt >= startDate && item.createdAt <= adjustedEndDate
        );
        setMemberships(filteredMemberships);
        
        const filteredDemos = allDemoSessions.filter(item => 
            item.date >= startDate && item.date <= adjustedEndDate
        );
        setDemoSessions(filteredDemos);
        
        const filteredMessages = allMessages.filter(item => 
            item.createdAt >= startDate && item.createdAt <= adjustedEndDate
        );
        setMessages(filteredMessages);
    };

    const resetDateFilter = () => {
        setStartDate(null);
        setEndDate(null);
        setDateFilterApplied(false);
        setMemberships(allMemberships);
        setDemoSessions(allDemoSessions);
        setMessages(allMessages);
    };

    // const generatePDF = (data, fileName) => {
    //     const doc = new jsPDF();
        
    //     // Title
    //     doc.setFontSize(16);
    //     doc.text(`${fileName} Report`, 14, 15);
    //     doc.setFontSize(10);
    //     doc.text(dateFilterApplied 
    //         ? `Date Range: ${startDate.toLocaleDateString()} to ${endDate.toLocaleDateString()}`
    //         : 'All Records', 
    //     14, 22);

    //     // Determine headers based on data type
    //     let headers = [];
    //     let dataKeys = [];
        
    //     if (fileName === 'Memberships') {
    //         headers = [
    //             'ID', 'First Name', 'Last Name', 'Gender', 
    //             'Weight', 'Height', 'Address', 'City',
    //             'Email', 'Mobile No', 'Gym Before',
    //             'Membership Type', 'Created At'
    //         ];
    //         dataKeys = [
    //             'id', 'firstName', 'lastName', 'gender',
    //             'weight', 'height', 'address', 'city',
    //             'email', 'mobileNo', 'gymBefore',
    //             'membershipType', 'createdAt'
    //         ];
    //     } else if (fileName === 'Demo Sessions') {
    //         headers = [
    //             'ID', 'Username', 'Email', 'Mobile No',
    //             'Message', 'Date', 'Time', 'City', 'Created At'
    //         ];
    //         dataKeys = [
    //             'id', 'username', 'email', 'mobileno',
    //             'message', 'date', 'time', 'city', 'createdat'
    //         ];
    //     } else { // Messages
    //         headers = [
    //             'ID', 'Username', 'Email', 'Mobile No',
    //             'Message', 'Created At'
    //         ];
    //         dataKeys = [
    //             'id', 'username', 'email', 'mobileno',
    //             'message', 'createdat'
    //         ];
    //     }

    //     // Prepare data
    //     const tableData = data.map(item => {
    //         return dataKeys.map(key => {
    //             if (item[key] instanceof Date) {
    //                 return item[key].toLocaleDateString();
    //             }
    //             return item[key] || '';
    //         });
    //     });

    //     // Add table
    //     doc.autoTable({
    //         head: [headers],
    //         body: tableData,
    //         startY: 30,
    //         styles: {
    //             fontSize: 8,
    //             cellPadding: 2,
    //             overflow: 'linebreak'
    //         },
    //         headStyles: {
    //             fillColor: [0, 0, 0],
    //             textColor: [255, 255, 255],
    //             fontSize: 9
    //         },
    //         columnStyles: {
    //             0: { cellWidth: 10 },
    //             1: { cellWidth: 'auto' },
    //             2: { cellWidth: 'auto' }
    //         }
    //     });

    //     doc.save(`${fileName}_Report_${new Date().toISOString().slice(0,10)}.pdf`);
    // };

    const generatePDF = (data, fileName) => {
        const doc = new jsPDF('p', 'pt');
        
        // Title
        doc.setFontSize(16);
        doc.text(`${fileName} Report`, 40, 30);
        doc.setFontSize(10);
        doc.text(dateFilterApplied 
            ? `Date Range: ${startDate.toLocaleDateString()} to ${endDate.toLocaleDateString()}`
            : 'All Records', 
        40, 50);

        // Define columns based on data type
        let columns = [];
        let rows = [];

        if (fileName === 'Memberships') {
            columns = [
                { header: 'ID', dataKey: 'id' },
                { header: 'First Name', dataKey: 'firstName' },
                { header: 'Last Name', dataKey: 'lastName' },
                { header: 'Gender', dataKey: 'gender' },
                { header: 'Weight', dataKey: 'weight' },
                { header: 'Height', dataKey: 'height' },
                { header: 'Address', dataKey: 'address' },
                { header: 'City', dataKey: 'city' },
                { header: 'Email', dataKey: 'email' },
                { header: 'Mobile No', dataKey: 'mobileNo' },
                { header: 'Gym Before', dataKey: 'gymBefore' },
                { header: 'Membership Type', dataKey: 'membershipType' },
                { header: 'Created At', dataKey: 'createdAt' }
            ];

            rows = data.map(item => ({
                id: item.id,
                firstName: item.firstName || item.firstname || '',
                lastName: item.lastName || item.lastname || '',
                gender: item.gender || '',
                weight: item.weight || '',
                height: item.height || '',
                address: item.address || '',
                city: item.city || '',
                email: item.email || '',
                mobileNo: item.mobileNo || item.mobileno || '',
                gymBefore: item.gymBefore || item.gymbefore || '',
                membershipType: item.membershipType || item.membershiptype || '',
                createdAt: item.createdAt ? new Date(item.createdAt).toLocaleDateString() : ''
            }));
        } 
        else if (fileName === 'Demo Sessions') {
            columns = [
                { header: 'ID', dataKey: 'id' },
                { header: 'Username', dataKey: 'username' },
                { header: 'Email', dataKey: 'email' },
                { header: 'Mobile No', dataKey: 'mobileNo' },
                { header: 'Message', dataKey: 'message' },
                { header: 'Date', dataKey: 'date' },
                { header: 'Time', dataKey: 'time' },
                { header: 'City', dataKey: 'city' },
                { header: 'Created At', dataKey: 'createdAt' }
            ];

            rows = data.map(item => ({
                id: item.id,
                username: item.username || '',
                email: item.email || '',
                mobileNo: item.mobileNo || item.mobileno || '',
                message: item.message || '',
                date: item.date ? new Date(item.date).toLocaleDateString() : '',
                time: item.time || '',
                city: item.city || '',
                createdAt: item.createdAt ? new Date(item.createdAt).toLocaleDateString() : ''
            }));
        } 
        else { // Messages
            columns = [
                { header: 'ID', dataKey: 'id' },
                { header: 'Username', dataKey: 'username' },
                { header: 'Email', dataKey: 'email' },
                { header: 'Mobile No', dataKey: 'mobileNo' },
                { header: 'Message', dataKey: 'message' },
                { header: 'Created At', dataKey: 'createdAt' }
            ];

            rows = data.map(item => ({
                id: item.id,
                username: item.username || '',
                email: item.email || '',
                mobileNo: item.mobileNo || item.mobileno || '',
                message: item.message || '',
                createdAt: item.createdAt ? new Date(item.createdAt).toLocaleDateString() : ''
            }));
        }

        // Add table to PDF
        autoTable(doc, {
            head: [columns.map(col => col.header)],
            body: rows.map(row => columns.map(col => row[col.dataKey])),
            startY: 70,
            margin: { top: 70 },
            styles: {
                fontSize: 8,
                cellPadding: 2,
                overflow: 'linebreak'
            },
            headStyles: {
                fillColor: [0, 0, 0],
                textColor: [255, 255, 255],
                fontSize: 9,
                halign: 'center'
            },
            columnStyles: {
                0: { cellWidth: 'auto' },
                1: { cellWidth: 'auto' }
            }
        });

        // Save the PDF
        doc.save(`${fileName}_Report_${new Date().toISOString().slice(0,10)}.pdf`);
    };
    const generateExcel = (data, fileName) => {
        // Determine headers and data keys
        let headers = [];
        let dataKeys = [];
        
        if (fileName === 'Memberships') {
            headers = [
                'ID', 'First Name', 'Last Name', 'Gender', 
                'Weight', 'Height', 'Address', 'City',
                'Email', 'Mobile No', 'Gym Before',
                'Membership Type', 'Created At'
            ];
            dataKeys = [
                'id', 'firstName', 'lastName', 'gender',
                'weight', 'height', 'address', 'city',
                'email', 'mobileNo', 'gymBefore',
                'membershipType', 'createdAt'
            ];
        } else if (fileName === 'Demo Sessions') {
            headers = [
                'id', 'Username', 'Email', 'Mobile No',
                'Message', 'Date', 'Time', 'City', 'Created At'
            ];
            dataKeys = [
                'id', 'username', 'email', 'mobileNo',
                'message', 'date', 'time', 'city', 'createdAt'
            ];
        } else { // Messages
            headers = [
                'ID', 'Username', 'Email', 'Mobile No',
                'Message', 'Created At'
            ];
            dataKeys = [
                'id', 'username', 'email', 'mobileNo',
                'message', 'createdAt'
            ];
        }

        // Prepare worksheet data
        const worksheetData = [
            headers,
            ...data.map(item => {
                return dataKeys.map(key => {
                    if (item[key] instanceof Date) {
                        return item[key].toLocaleDateString();
                    }
                    return item[key] || '';
                });
            })
        ];

        // Create workbook
        const workbook = XLSX.utils.book_new();
        const worksheet = XLSX.utils.aoa_to_sheet(worksheetData);
        
        // Set column widths
        const colWidths = headers.map((header, colIndex) => {
            const maxLength = Math.max(
                header.length,
                ...data.map(item => {
                    const value = item[dataKeys[colIndex]] || '';
                    return String(value).length;
                })
            );
            return { wch: Math.min(Math.max(maxLength, 10), 30) };
        });
        
        worksheet['!cols'] = colWidths;
        XLSX.utils.book_append_sheet(workbook, worksheet, fileName);
        XLSX.writeFile(workbook, `${fileName}_Report_${new Date().toISOString().slice(0,10)}.xlsx`);
    };

    return (
        <LocalizationProvider dateAdapter={AdapterDateFns}>
            <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 3 }}>
                    <Typography variant="h4" component="h1">
                        Admin Dashboard
                    </Typography>
                </Box>

                {/* Date Range Filter */}
                <Paper elevation={3} sx={{ p: 2, mb: 3 }}>
                    <Typography variant="h6" gutterBottom>
                        Filter by Date Range
                    </Typography>
                    <Grid container spacing={2} alignItems="center">
                        <Grid item xs={12} sm={4}>
                            <DatePicker
                                label="Start Date"
                                value={startDate}
                                onChange={(newValue) => setStartDate(newValue)}
                                renderInput={(params) => <TextField {...params} fullWidth />}
                            />
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <DatePicker
                                label="End Date"
                                value={endDate}
                                onChange={(newValue) => setEndDate(newValue)}
                                renderInput={(params) => <TextField {...params} fullWidth />}
                                minDate={startDate}
                            />
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Button
                                variant="contained"
                                color="primary"
                                onClick={applyDateFilter}
                                disabled={!startDate || !endDate}
                                sx={{ mr: 2 }}
                            >
                                Apply Filter
                            </Button>
                            <Button
                                variant="outlined"
                                color="secondary"
                                onClick={resetDateFilter}
                                disabled={!dateFilterApplied}
                            >
                                Reset
                            </Button>
                        </Grid>
                    </Grid>
                </Paper>

                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <Tabs value={tabValue} onChange={handleTabChange}>
                        <Tab label="Memberships" />
                        <Tab label="Demo Sessions" />
                        <Tab label="Messages" />
                    </Tabs>
                </Box>

                {/* Memberships Table */}
                <TabPanel value={tabValue} index={0}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
                        <Typography variant="subtitle1">
                            {dateFilterApplied 
                                ? `Showing memberships from ${startDate.toLocaleDateString()} to ${endDate.toLocaleDateString()} (${memberships.length} records)`
                                : `Showing all memberships (${memberships.length} records)`}
                        </Typography>
                        <Box>
                            <IconButton onClick={() => generatePDF(memberships, 'Memberships')}>
                                <FilePdf />
                            </IconButton>
                            <IconButton onClick={() => generateExcel(memberships, 'Memberships')}>
                                <FileExcel />
                            </IconButton>
                        </Box>
                    </Box>
                    <TableContainer component={Paper}>
                        <Table sx={{ minWidth: 700 }} aria-label="membership table">
                            <TableHead>
                                <TableRow>
                                    <StyledTableCell>ID</StyledTableCell>
                                    <StyledTableCell>First Name</StyledTableCell>
                                    <StyledTableCell>Last Name</StyledTableCell>
                                    <StyledTableCell>Gender</StyledTableCell>
                                    <StyledTableCell>Weight</StyledTableCell>
                                    <StyledTableCell>Height</StyledTableCell>
                                    <StyledTableCell>Address</StyledTableCell>
                                    <StyledTableCell>City</StyledTableCell>
                                    <StyledTableCell>Email</StyledTableCell>
                                    <StyledTableCell>Mobile No</StyledTableCell>
                                    <StyledTableCell>Gym Before</StyledTableCell>
                                    <StyledTableCell>Membership Type</StyledTableCell>
                                    <StyledTableCell>Created At</StyledTableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {memberships.length > 0 ? (
                                    memberships.map((membership) => (
                                        <StyledTableRow key={membership.id}>
                                            <StyledTableCell>{membership.id}</StyledTableCell>
                                            <StyledTableCell>{membership.firstName || membership.firstname}</StyledTableCell>
                                            <StyledTableCell>{membership.lastName || membership.lastname}</StyledTableCell>
                                            <StyledTableCell>{membership.gender}</StyledTableCell>
                                            <StyledTableCell>{membership.weight}</StyledTableCell>
                                            <StyledTableCell>{membership.height}</StyledTableCell>
                                            <StyledTableCell>{membership.address}</StyledTableCell>
                                            <StyledTableCell>{membership.city}</StyledTableCell>
                                            <StyledTableCell>{membership.email}</StyledTableCell>
                                            <StyledTableCell>{membership.mobileNo || membership.mobileno}</StyledTableCell>
                                            <StyledTableCell>{membership.gymBefore || membership.gymbefore}</StyledTableCell>
                                            <StyledTableCell>{membership.membershipType || membership.membershiptype}</StyledTableCell>
                                            <StyledTableCell>{membership.createdAt.toLocaleDateString()}</StyledTableCell>
                                        </StyledTableRow>
                                    ))
                                ) : (
                                    <TableRow>
                                        <TableCell colSpan={13} align="center">
                                            {loading ? 'Loading...' : 'No data available'}
                                        </TableCell>
                                    </TableRow>
                                )}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </TabPanel>

                {/* Demo Sessions Table */}
                <TabPanel value={tabValue} index={1}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
                        <Typography variant="subtitle1">
                            {dateFilterApplied 
                                ? `Showing demo sessions from ${startDate.toLocaleDateString()} to ${endDate.toLocaleDateString()} (${demoSessions.length} records)`
                                : `Showing all demo sessions (${demoSessions.length} records)`}
                        </Typography>
                        <Box>
                            <IconButton onClick={() => generatePDF(demoSessions, 'Demo Sessions')}>
                                <FilePdf />
                            </IconButton>
                            <IconButton onClick={() => generateExcel(demoSessions, 'Demo Sessions')}>
                                <FileExcel />
                            </IconButton>
                        </Box>
                    </Box>
                    <TableContainer component={Paper}>
                        <Table sx={{ minWidth: 700 }} aria-label="demo sessions table">
                            <TableHead>
                                <TableRow>
                                    <StyledTableCell>ID</StyledTableCell>
                                    <StyledTableCell>Username</StyledTableCell>
                                    <StyledTableCell>Email</StyledTableCell>
                                    <StyledTableCell>Mobile No</StyledTableCell>
                                    <StyledTableCell>Message</StyledTableCell>
                                    <StyledTableCell>Date</StyledTableCell>
                                    <StyledTableCell>Time</StyledTableCell>
                                    <StyledTableCell>City</StyledTableCell>
                                    <StyledTableCell>Created At</StyledTableCell>
                                    <StyledTableCell>View</StyledTableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {demoSessions.length > 0 ? (
                                    demoSessions.map((session) => (
                                        <StyledTableRow key={session.id}>
                                            <StyledTableCell>{session.id}</StyledTableCell>
                                            <StyledTableCell>{session.username}</StyledTableCell>
                                            <StyledTableCell>{session.email}</StyledTableCell>
                                            <StyledTableCell>{session.mobileNo || session.mobileno}</StyledTableCell>
                                            <StyledTableCell sx={{ maxWidth: 200, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                                                {session.message}
                                            </StyledTableCell>
                                            <StyledTableCell>{session.date.toLocaleDateString()}</StyledTableCell>
                                            <StyledTableCell>{session.time}</StyledTableCell>
                                            <StyledTableCell>{session.city}</StyledTableCell>
                                            <StyledTableCell>{session.createdAt.toLocaleDateString()}</StyledTableCell>
                                            <StyledTableCell>
                                                <IconButton size="small" color="primary" onClick={() => handleOpenDemoMessage(session.message)}>
                                                    <Visibility />
                                                </IconButton>
                                            </StyledTableCell>
                                        </StyledTableRow>
                                    ))
                                ) : (
                                    <TableRow>
                                        <TableCell colSpan={10} align="center">
                                            {loading ? 'Loading...' : 'No data available'}
                                        </TableCell>
                                    </TableRow>
                                )}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </TabPanel>

                {/* Messages Table */}
                <TabPanel value={tabValue} index={2}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
                        <Typography variant="subtitle1">
                            {dateFilterApplied 
                                ? `Showing messages from ${startDate.toLocaleDateString()} to ${endDate.toLocaleDateString()} (${messages.length} records)`
                                : `Showing all messages (${messages.length} records)`}
                        </Typography>
                        <Box>
                            <IconButton onClick={() => generatePDF(messages, 'Messages')}>
                                <FilePdf />
                            </IconButton>
                            <IconButton onClick={() => generateExcel(messages, 'Messages')}>
                                <FileExcel />
                            </IconButton>
                        </Box>
                    </Box>
                    <TableContainer component={Paper}>
                        <Table sx={{ minWidth: 700 }} aria-label="messages table">
                            <TableHead>
                                <TableRow>
                                    <StyledTableCell>ID</StyledTableCell>
                                    <StyledTableCell>Username</StyledTableCell>
                                    <StyledTableCell>Email</StyledTableCell>
                                    <StyledTableCell>Mobile No</StyledTableCell>
                                    <StyledTableCell>Message</StyledTableCell>
                                    <StyledTableCell>Created At</StyledTableCell>
                                    <StyledTableCell>View</StyledTableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {messages.length > 0 ? (
                                    messages.map((message) => (
                                        <StyledTableRow key={message.id}>
                                            <StyledTableCell>{message.id}</StyledTableCell>
                                            <StyledTableCell>{message.username}</StyledTableCell>
                                            <StyledTableCell>{message.email}</StyledTableCell>
                                            <StyledTableCell>{message.mobileNo || message.mobileno}</StyledTableCell>
                                            <StyledTableCell sx={{ maxWidth: 300, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                                                {message.message}
                                            </StyledTableCell>
                                            <StyledTableCell>{message.createdAt.toLocaleDateString()}</StyledTableCell>
                                            <StyledTableCell>
                                                <IconButton size="small" color="primary" onClick={() => handleOpenMessage(message.message)}>
                                                    <Visibility />
                                                </IconButton>
                                            </StyledTableCell>
                                        </StyledTableRow>
                                    ))
                                ) : (
                                    <TableRow>
                                        <TableCell colSpan={7} align="center">
                                            {loading ? 'Loading...' : 'No data available'}
                                        </TableCell>
                                    </TableRow>
                                )}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </TabPanel>

                {/* Message Dialogs */}
                <Dialog
                    open={openMessageDialog}
                    onClose={handleCloseMessage}
                    maxWidth="md"
                    fullWidth
                >
                    <DialogTitle>Full Message</DialogTitle>
                    <DialogContent>
                        <Typography style={{ whiteSpace: 'pre-wrap' }}>{selectedMessage}</Typography>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleCloseMessage}>Close</Button>
                    </DialogActions>
                </Dialog>

                <Dialog
                    open={openDemoMessageDialog}
                    onClose={handleCloseDemoMessage}
                    maxWidth="md"
                    fullWidth
                >
                    <DialogTitle>Full Message</DialogTitle>
                    <DialogContent>
                        <Typography style={{ whiteSpace: 'pre-wrap' }}>{selectedDemoMessage}</Typography>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleCloseDemoMessage}>Close</Button>
                    </DialogActions>
                </Dialog>
            </Container>
        </LocalizationProvider>
    );
};

export default AdminDashboard;