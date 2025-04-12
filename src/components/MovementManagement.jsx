

import React, { useEffect, useState } from "react";
import axios from "axios";
import DataTable from "react-data-table-component";
import { IconButton, Tooltip, Dialog } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { styled } from '@mui/material/styles';
import { 
  Container, 
  Typography, 
  TextField, 
  Autocomplete, 
  Checkbox, 
  Button, 
  Paper,
  Box,
  CircularProgress,
  Alert,
  Snackbar
} from '@mui/material';
import { CloudUpload as CloudUploadIcon } from '@mui/icons-material';
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';


import CloseIcon from '@mui/icons-material/Close';
import ImagePopup from "./ImagePopup";
import VideoPopup from "./VideoPopup";

// Styled components
const VisuallyHiddenInput = styled('input')({
  clip: 'rect(0 0 0 0)',
  clipPath: 'inset(50%)',
  height: 1,
  overflow: 'hidden',
  position: 'absolute',
  bottom: 0,
  left: 0,
  whiteSpace: 'nowrap',
  width: 1,
});

const FormContainer = styled(Container)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  borderRadius: theme.shape.borderRadius,
  boxShadow: theme.shadows[3],
  padding: theme.spacing(4),
  position: 'relative',
  marginBottom: theme.spacing(4),
  [theme.breakpoints.down('sm')]: {
    padding: theme.spacing(2),
  },
}));

const FormGrid = styled(Container)(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
  gap: theme.spacing(3),
  padding: 0,
  marginTop: theme.spacing(3),
}));

const ActionButton = styled(Button)(({ theme }) => ({
  marginLeft: theme.spacing(1),
  [theme.breakpoints.down('sm')]: {
    marginLeft: 0,
    marginTop: theme.spacing(1),
    width: '100%'
  },
}));

// Constants
const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;

const bodyPartsOptions = [
  'Arms', 'Back', 'Chest', 'Core', 'Legs', 
  'Shoulders', 'Full Body', 'Upper Body', 'Lower Body'
];

const workoutAttachmentOptions = [
  'Band', 'Barbell', 'Dumbbell', 'Kettlebell', 
  'Machine', 'Medicine Ball', 'Resistance Band', 'Stability Ball'
];

const difficultyLevels = ['Advanced', 'Beginner', 'Intermediate'];
const exerciseTypes = ['Warm UP', 'Strength', 'Body Weight'];
const focusCategories = ['Cardio', 'Strength', 'Functional'];

// MovementForm Component
const MovementForm = ({ 
  editingMovement, 
  setEditingMovement, 
  setShowForm, 
  handleCreate, 
  handleUpdate 
}) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  
  const [formData, setFormData] = useState({
    movName: '',
    bodyParts: '',
    difficultyLevel: [],
    exerciseType: '',
    workoutAttachments: [],
    focusCategory: [],
    instructions: '',
    mistakes: '',
  });

  const [videoFile, setVideoFile] = useState(null);
  const [imageFile, setImageFile] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (editingMovement) {
      setFormData({
        ...editingMovement,
        difficultyLevel: Array.isArray(editingMovement.difficultyLevel) 
          ? editingMovement.difficultyLevel 
          : [editingMovement.difficultyLevel].filter(Boolean),
        workoutAttachments: Array.isArray(editingMovement.workoutAttachments) 
          ? editingMovement.workoutAttachments 
          : [editingMovement.workoutAttachments].filter(Boolean),
        focusCategory: Array.isArray(editingMovement.focusCategory) 
          ? editingMovement.focusCategory 
          : [editingMovement.focusCategory].filter(Boolean),
      });
    } else {
      setFormData({
        movName: '',
        bodyParts: '',
        difficultyLevel: [],
        exerciseType: '',
        workoutAttachments: [],
        focusCategory: [],
        instructions: '',
        mistakes: '',
      });
    }
  }, [editingMovement]);

  const handleVideoChange = (e) => {
    setVideoFile(e.target.files[0]);
  };

  const handleImageChange = (e) => {
    setImageFile(e.target.files[0]);
  };

  const saveNewData = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);
    
    try {
      const formDataObj = new FormData();
      if (videoFile) formDataObj.append('video', videoFile);
      if (imageFile) formDataObj.append('image', imageFile);

      formDataObj.append('movName', formData.movName);
      formDataObj.append('bodyParts', formData.bodyParts);
      formDataObj.append('difficultyLevel', formData.difficultyLevel);
      formDataObj.append('exerciseType', formData.exerciseType);
      formDataObj.append('workoutAttachments', formData.workoutAttachments);
      formDataObj.append('focusCategory', formData.focusCategory);
      formDataObj.append('instructions', formData.instructions);
      formDataObj.append('mistakes', formData.mistakes);

      if (editingMovement) {
        await handleUpdate(editingMovement.id, formDataObj);
      } else {
        await handleCreate(formDataObj);
      }
      
      // Reset form
      setFormData({
        movName: '',
        bodyParts: '',
        difficultyLevel: [],
        exerciseType: '',
        workoutAttachments: [],
        focusCategory: [],
        instructions: '',
        mistakes: '',
      });
      setVideoFile(null);
      setImageFile(null);
      setEditingMovement(null);
      setShowForm(false);
    } catch (error) {
      console.error('Error saving data:', error);
      setError('Failed to save movement. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <FormContainer maxWidth="lg">
      <Box display="flex" justifyContent="space-between" alignItems="center" mb={4}>
        <Typography variant="h4" component="h2">
          {editingMovement ? 'Edit Movement' : 'Create New Movement'}
        </Typography>
        <Box>
          <ActionButton
            variant="outlined"
            onClick={() => {
              setEditingMovement(null);
              setShowForm(false);
            }}
            disabled={isSubmitting}
          >
            Cancel
          </ActionButton>
          <ActionButton
            variant="contained"
            color="primary"
            onClick={saveNewData}
            disabled={isSubmitting}
            startIcon={isSubmitting ? <CircularProgress size={20} /> : null}
          >
            {isSubmitting ? 'Saving...' : 'Save'}
          </ActionButton>
        </Box>
      </Box>

      {error && (
        <Alert severity="error" sx={{ mb: 3 }}>
          {error}
        </Alert>
      )}

      <FormGrid maxWidth={false}>
        <TextField
          fullWidth
          label="Movement Name"
          variant="outlined"
          value={formData.movName}
          onChange={(e) => setFormData({...formData, movName: e.target.value})}
          required
        />

        <Autocomplete
          freeSolo
          options={bodyPartsOptions}
          value={formData.bodyParts}
          onChange={(event, newValue) => setFormData({...formData, bodyParts: newValue})}
          renderInput={(params) => (
            <TextField {...params} label="Body Part" required />
          )}
        />

        <Autocomplete
          freeSolo
          options={difficultyLevels}
          value={formData.difficultyLevel}
          onChange={(event, newValue) => setFormData({...formData, difficultyLevel: newValue})}
          renderInput={(params) => <TextField {...params} label="Difficulty Level" required />}
        />

        <Autocomplete
          freeSolo
          options={exerciseTypes}
          value={formData.exerciseType}
          onChange={(event, newValue) => setFormData({...formData, exerciseType: newValue})}
          renderInput={(params) => <TextField {...params} label="Exercise Type" required />}
        />

        <Autocomplete
          multiple
          options={workoutAttachmentOptions}
          value={formData.workoutAttachments}
          onChange={(event, newValue) => setFormData({...formData, workoutAttachments: newValue})} 
          disableCloseOnSelect
          getOptionLabel={(option) => option}
          renderOption={(props, option, { selected }) => (
            <li {...props}>
              <Checkbox icon={icon} checkedIcon={checkedIcon} checked={selected} />
              {option}
            </li>
          )}
          renderInput={(params) => (
            <TextField {...params} label="Workout Attachments" />
          )}
        />

        <Autocomplete
          multiple
          options={focusCategories}
          value={formData.focusCategory}
          onChange={(event, newValue) => setFormData({...formData, focusCategory: newValue})}
          disableCloseOnSelect
          getOptionLabel={(option) => option}
          renderOption={(props, option, { selected }) => (
            <li {...props}>
              <Checkbox icon={icon} checkedIcon={checkedIcon} checked={selected} />
              {option}
            </li>
          )}
          renderInput={(params) => <TextField {...params} label="Focus Category" />}
        />
      </FormGrid>

      <FormGrid maxWidth={false}>
        <TextField
          id="instructions"
          label="Instructions"
          multiline
          rows={4}
          fullWidth
          value={formData.instructions}
          onChange={(e) => setFormData({ ...formData, instructions: e.target.value })}
        />
        
        <TextField
          id="mistakes"
          label="Common Mistakes"
          multiline
          rows={4}
          fullWidth
          value={formData.mistakes}
          onChange={(e) => setFormData({ ...formData, mistakes: e.target.value })}
        />
      </FormGrid>

      <Box mt={4} display="flex" flexDirection={isMobile ? 'column' : 'row'} gap={2}>
        <Button 
          component="label" 
          variant="contained" 
          color="secondary"
          startIcon={<CloudUploadIcon />}
          fullWidth={isMobile}
        >
          Upload Workout Video
          <VisuallyHiddenInput
            type="file"
            accept="video/*"
            onChange={handleVideoChange}
          />
        </Button>

        <Button 
          component="label" 
          variant="contained" 
          color="secondary"
          startIcon={<CloudUploadIcon />}
          fullWidth={isMobile}
        >
          Upload Body Part Image
          <VisuallyHiddenInput
            type="file"
            accept="image/*"
            onChange={handleImageChange}
          />
        </Button>
      </Box>

      {(videoFile || imageFile) && (
        <Box mt={2}>
          <Typography variant="subtitle2" color="textSecondary">
            Selected files:
          </Typography>
          <Typography variant="body2">
            {videoFile && `Video: ${videoFile.name}`}
            <br />
            {imageFile && `Image: ${imageFile.name}`}
          </Typography>
        </Box>
      )}
    </FormContainer>
  );
};

// MovementManagement Component
const MovementManagement = () => {
  const [movementData, setMovementData] = useState([]);
  const [editingMovement, setEditingMovement] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const [snackbarSeverity, setSnackbarSeverity] = useState('success');
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const showSnackbar = (message, severity = 'success') => {
    setSnackbarMessage(message);
    setSnackbarSeverity(severity);
    setSnackbarOpen(true);
  };

  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
  };

  // Fetch data from the backend
  const getMovementData = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await axios.get("http://localhost:4000/movements");
      setMovementData(response.data);
    } catch (err) {
      console.error("Error fetching movements:", err);
      setError("Failed to fetch movements. Please try again.");
      showSnackbar("Failed to fetch movements", 'error');
    } finally {
      setIsLoading(false);
    }
  };

  // Create new movement
  const handleCreate = async (formData) => {
    try {
      const response = await axios.post("http://localhost:4000/movements", formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      setMovementData([...movementData, response.data]);
      showSnackbar("Movement created successfully!");
      await getMovementData();
      setShowForm(false);
    } catch (err) {
      console.error("Error creating movement:", err);
      setError("Failed to create movement. Please try again.");
      showSnackbar("Failed to create movement", 'error');
    }
  };

  const handleEdit = (row) => {
    try {
      setEditingMovement({
        ...row,
        difficultyLevel: Array.isArray(row.difficultyLevel) 
          ? row.difficultyLevel 
          : [row.difficultyLevel].filter(Boolean),
        workoutAttachments: Array.isArray(row.workoutAttachments) 
          ? row.workoutAttachments 
          : [row.workoutAttachments].filter(Boolean),
        focusCategory: Array.isArray(row.focusCategory) 
          ? row.focusCategory 
          : [row.focusCategory].filter(Boolean),
      });
      setShowForm(true);
    } catch (error) {
      console.error("Error setting edit data:", error);
      setError("Failed to load movement for editing");
      showSnackbar("Failed to load movement for editing", 'error');
    }
  };

  // Update movement
  const handleUpdate = async (id, formData) => {
    try {
      await axios.put(`http://localhost:4000/movements/${id}`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      showSnackbar("Movement updated successfully!");
      await getMovementData();
      setShowForm(false);
      setEditingMovement(null);
    } catch (err) {
      console.error("Error updating movement:", err);
      setError("Failed to update movement. Please try again.");
      showSnackbar("Failed to update movement", 'error');
    }
  };

  // Delete functionality
  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this movement?")) {
      try {
        await axios.delete(`http://localhost:4000/movements/${id}`);
        setMovementData(movementData.filter((movement) => movement.id !== id));
        showSnackbar("Movement deleted successfully!");
      } catch (err) {
        console.error("Error deleting movement:", err);
        setError("Failed to delete movement. Please try again.");
        showSnackbar("Failed to delete movement", 'error');
      }
    }
  };

  const columns = [
    { 
      name: "Movement", 
      selector: (row) => row.movName,
      sortable: true,
      wrap: true,
      minWidth: "150px",
      cell: (row) => <Typography variant="body2">{row.movName}</Typography>
    },
    { 
      name: "Body Parts", 
      selector: (row) => row.bodyParts,
      sortable: true,
      wrap: true,
      minWidth: "120px",
      cell: (row) => <Typography variant="body2">{row.bodyParts}</Typography>
    },
    { 
      name: "Difficulty", 
      selector: (row) => row.difficultyLevel,
      sortable: true,
      wrap: true,
      minWidth: "120px",
      cell: (row) => (
        <Typography variant="body2">
          {Array.isArray(row.difficultyLevel) ? row.difficultyLevel.join(', ') : row.difficultyLevel}
        </Typography>
      )
    },
    { 
      name: "Exercise Type", 
      selector: (row) => row.exerciseType,
      sortable: true,
      wrap: true,
      minWidth: "120px",
      cell: (row) => <Typography variant="body2">{row.exerciseType}</Typography>
    },
    { 
      name: "Focus Category", 
      selector: (row) => row.focusCategory,
      sortable: true,
      wrap: true,
      minWidth: "150px",
      cell: (row) => (
        <Typography variant="body2">
          {Array.isArray(row.focusCategory) ? row.focusCategory.join(', ') : row.focusCategory}
        </Typography>
      )
    },
    {
      name: "Instructions",
      selector: row => row.instructions,
      cell: row => (
        <Box sx={{ 
          maxHeight: '100px', 
          overflow: 'auto',
          py: 1,
          '&::-webkit-scrollbar': {
            width: '4px',
          },
          '&::-webkit-scrollbar-thumb': {
            backgroundColor: theme.palette.primary.main,
            borderRadius: '2px',
          }
        }}>
          <Typography variant="body2" whiteSpace="pre-wrap">
            {row.instructions || <span style={{ color: theme.palette.text.disabled }}>No instructions</span>}
          </Typography>
        </Box>
      ),
      minWidth: "250px",
      wrap: true,
      sortable: false
    },
    {
      name: "Common Mistakes",
      selector: row => row.mistakes,
      cell: row => (
        <Box sx={{ 
          maxHeight: '100px', 
          overflow: 'auto',
          py: 1,
          '&::-webkit-scrollbar': {
            width: '4px',
          },
          '&::-webkit-scrollbar-thumb': {
            backgroundColor: theme.palette.primary.main,
            borderRadius: '2px',
          }
        }}>
          <Typography variant="body2" whiteSpace="pre-wrap">
            {row.mistakes || <span style={{ color: theme.palette.text.disabled }}>No mistakes listed</span>}
          </Typography>
        </Box>
      ),
      minWidth: "250px",
      wrap: true,
      sortable: false
    },
    {
      name: "Image",
      cell: (row) => {
        if (!row.image_path) {
          return <Typography variant="caption" color="textSecondary">No image</Typography>;
        }
  
        // For development - log the path for debugging
        console.log('Image path:', row.image_path);
        
        // Handle both forward and backward slashes
        const imageFilename = row.image_path.replace(/^.*[\\\/]/, '');
        const imageUrl = `http://localhost:4000/image/${encodeURIComponent(imageFilename)}`;
        
        console.log('Constructed image URL:', imageUrl);
  
        return (
          <Box sx={{ width: 80, height: 60, position: 'relative' }}>
             <ImagePopup src={imageUrl} alt={row.movName} />
          </Box>
        );
      },
      minWidth: "100px"
    },
    {
      name: "Video",
      cell: (row) => {
        if (!row.video_path) {
          return <Typography variant="caption" color="textSecondary">No video</Typography>;
        }
  
        console.log('Video path:', row.video_path);
        
        const videoFilename = row.video_path.replace(/^.*[\\\/]/, '');
        const videoUrl = `http://localhost:4000/video/${encodeURIComponent(videoFilename)}`;
        
        console.log('Constructed video URL:', videoUrl);
  
        return (
          <Box sx={{ width: 120, height: 80, position: 'relative' }}>
            {/* <video
              width="100%"
              height="100%"
              controls
              style={{ borderRadius: "4px" }}
              onError={(e) => {
                e.target.onerror = null;
                e.target.style.display = 'none';
                e.target.parentElement.querySelector('.error-fallback').style.display = 'block';
              }}
            >
              <source src={videoUrl} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <Typography 
              className="error-fallback"
              variant="caption" 
              color="textSecondary"
              sx={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                display: 'none'
              }}
            >
              Video not found
            </Typography> */}
            <VideoPopup 
  src={`http://localhost:4000/video/${encodeURIComponent(videoFilename)}`}
  alt={`${row.movName} exercise video`}
/>
          </Box>
        );
      },
      minWidth: "150px"
    },
    {
      name: "Actions",
      cell: (row) => (
        <Box display="flex" gap={1}>
          <Tooltip title="Edit">
            <IconButton
              onClick={() => handleEdit(row)}
              aria-label="edit"
              size="medium"
              sx={{
                color: theme.palette.primary.main,
                '&:hover': {
                  backgroundColor: theme.palette.primary.light,
                },
              }}
            >
              <EditIcon fontSize="medium" />
            </IconButton>
          </Tooltip>
          <Tooltip title="Delete">
            <IconButton
              onClick={() => handleDelete(row.id)}
              aria-label="delete"
              size="small"
              sx={{
                color: theme.palette.error.main,
                '&:hover': {
                  backgroundColor: theme.palette.error.light,
                },
              }}
            >
              <DeleteIcon fontSize="medium" />
            </IconButton>
          </Tooltip>
        </Box>
      ),
      ignoreRowClick: true,
      allowOverflow: true,
      button: true,
      minWidth: "120px"
    },
  ];

  useEffect(() => {
    getMovementData();
  }, []);

  return (
    <Container maxWidth="xl" sx={{ py: 4 }}>
      <Box display="flex" justifyContent="space-between" alignItems="center" mb={4}>
        <Typography variant="h4" component="h1" sx={{ 
          fontWeight: 600,
          color: theme.palette.text.primary
        }}>
          Movement Management
        </Typography>
        
        {!showForm && (
          <Button 
            variant="contained" 
            color="primary"
            onClick={() => {
              setEditingMovement(null);
              setShowForm(true);
            }}
            sx={{
              px: 3,
              py: 1.5,
              borderRadius: 1,
              textTransform: 'none',
              fontSize: '1rem'
            }}
          >
            Add New Movement
          </Button>
        )}
      </Box>

      {error && (
        <Alert severity="error" sx={{ mb: 3 }}>
          {error}
        </Alert>
      )}

      {showForm ? (
        <MovementForm 
          editingMovement={editingMovement}
          setEditingMovement={setEditingMovement}
          setShowForm={setShowForm}
          handleCreate={handleCreate}
          handleUpdate={handleUpdate}
        />
      ) : (
        <Paper elevation={3} sx={{ borderRadius: 2, overflow: 'hidden' }}>
          {isLoading ? (
            <Box display="flex" justifyContent="center" alignItems="center" minHeight="300px">
              <CircularProgress />
            </Box>
          ) : (
            <DataTable
              columns={columns}
              data={movementData}
              pagination
              highlightOnHover
              dense
              responsive
              progressPending={isLoading}
              progressComponent={
                <Box display="flex" justifyContent="center" p={4}>
                  <CircularProgress />
                </Box>
              }
              customStyles={{
                headRow: {
                  style: {
                    backgroundColor: theme.palette.grey[100],
                  },
                },
                headCells: {
                  style: {
                    fontWeight: 600,
                    fontSize: '0.875rem',
                    color: theme.palette.text.primary,
                  },
                },
                cells: {
                  style: {
                    fontSize: '0.875rem',
                    padding: '12px 16px',
                  },
                },
                rows: {
                  style: {
                    '&:hover': {
                      backgroundColor: theme.palette.action.hover,
                    },
                  },
                },
              }}
              paginationPerPage={10}
              paginationRowsPerPageOptions={[10, 25, 50, 100]}
              noDataComponent={
                <Box p={4} textAlign="center">
                  <Typography variant="h6" color="textSecondary" gutterBottom>
                    No movements found
                  </Typography>
                  <Button 
                    variant="outlined" 
                    color="primary"
                    onClick={() => {
                      setEditingMovement(null);
                      setShowForm(true);
                    }}
                    sx={{ mt: 2 }}
                  >
                    Create First Movement
                  </Button>
                </Box>
              }
            />
          )}
        </Paper>
      )}

      <Snackbar
        open={snackbarOpen}
        autoHideDuration={6000}
        onClose={handleSnackbarClose}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
      >
        <Alert onClose={handleSnackbarClose} severity={snackbarSeverity} sx={{ width: '100%' }}>
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </Container>
  );
};

export default MovementManagement;