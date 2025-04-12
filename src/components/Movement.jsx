
import React, { useState, useEffect } from 'react';
import { styled } from '@mui/material/styles';
import { Container, Typography, TextField, Autocomplete, Checkbox, Button, Paper } from '@mui/material';
import { CloudUpload as CloudUploadIcon } from '@mui/icons-material';
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import axios from 'axios';

// API for edit 
import { createMovement, updateMovement } from '../api/movements';

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;

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

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  ...theme.applyStyles('dark', {
    backgroundColor: '#1A2027',
  }),
}));



///{ editingMovement, setEditingMovement, setRefreshTable } Prox removed form the function 
const Movement = () => {
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


  // Add useEffect to update form when editingMovement changes
  // useEffect(() => {
  //   if (editingMovement) {
  //     setFormData(editingMovement);
  //   } else {
  //     setFormData({
  //       movName: '',
  //       bodyParts: '',
  //       difficultyLevel: [],
  //       exerciseType: '',
  //       workoutAttachments: [],
  //       focusCategory: [],
  //       instructions: '',
  //       mistakes: '',
  //     });
  //   }
  // }, [editingMovement]);

  // const [file, setFile] = useState(null);
  const bodyPartsOptions = [
    'Arms', 'Back', 'Chest', 'Core', 'Legs', 
    'Shoulders', 'Full Body', 'Upper Body', 'Lower Body'
  ];
  const workoutAttachmentOptions = [
    'Band', 'Barbell', 'Dumbbell', 'Kettlebell', 
    'Machine', 'Medicine Ball', 'Resistance Band', 'Stability Ball'
  ];
  const [videoFile, setVideoFile] = useState(null);
const [imageFile, setImageFile] = useState(null);
  const [bodyPart, setBodyPart] = useState([]);
  const [difficultyLevel] = useState([
    'Advanced', 'Beginner','Intermediate'
  ]);
  const [exerciseType] = useState(['Warm UP', 'Strength', 'Body Weight']);
  const [focusCategory] = useState(['Cardio', 'Strength', 'Functional']);

  // const fetchBodyParts = async () => {
  //   try {
  //     const result = await axios.get('http://localhost:5000/bodyParts');
  //     setBodyPart(result.data); // Assuming the response contains the body parts
  //   } catch (error) {
  //     console.error('Error fetching body parts:', error);
  //   }
  // };

  // useEffect(() => {
  //   fetchBodyParts();
  // }, []);



// to fetch the body parts




  // Handle video file change
const handleVideoChange = (e) => {
  setVideoFile(e.target.files[0]);
};

const handleImageChange = (e) => {
  setImageFile(e.target.files[0]);
};

  const handleChange = (field) => (event, newValue) => {
    if (newValue && typeof newValue === 'object') {
      setFormData((prevData) => ({ ...prevData, [field]: newValue.label || newValue }));
    } else {
      setFormData((prevData) => ({ ...prevData, [field]: newValue }));
    }
  };

 

  const saveNewData = async (e) => {
    e.preventDefault();
    
    const formDataObj = new FormData();
    if (videoFile) formDataObj.append('video', videoFile);  // Correcting this
  if (imageFile) formDataObj.append('image', imageFile); // Assuming you are uploading image as 'file'
    

  

    // Append other form data as well
    formDataObj.append('movName', formData.movName);
    formDataObj.append('bodyParts', formData.bodyParts);
    formDataObj.append('difficultyLevel', formData.difficultyLevel);
    formDataObj.append('exerciseType', formData.exerciseType);
    formDataObj.append('workoutAttachments', formData.workoutAttachments);
    formDataObj.append('focusCategory', formData.focusCategory);
    formDataObj.append('instructions', formData.instructions);
    formDataObj.append('mistakes', formData.mistakes);
    console.log('movName') ;
  console.log('bodyParts') ;
  console.log('difficultyLevel') ;
  console.log('exerciseType') ;
  console.log('workoutAttachments') ;
  console.log('focusCategory') ;
  console.log('instructions') ;
  console.log('mistakes') ;
  


    console.log(formDataObj);
    try {
      const response = await axios.post('http://localhost:4000/movements', formDataObj, {
        headers: { 'Content-Type': 'multipart/form-data' }, 
        // Important for sending file data
      });

    // try {
    //   if (editingMovement) {
    //     // Update existing movement
    //     await axios.put(`http://localhost:4000/movements/${editingMovement.id}`, formDataObj, {
    //       headers: { 'Content-Type': 'multipart/form-data' },
    //     });
    //   } else {
    //     // Create new movement
    //     await axios.post('http://localhost:4000/movements', formDataObj, {
    //       headers: { 'Content-Type': 'multipart/form-data' },
    //     });
    //   }
    //   console.log(response.data); 
    //    // Reset form state and file inputs after saving
    //    setFormData({
    //     movName: '',
    //     bodyParts: '',
    //     difficultyLevel: '',
    //     exerciseType: '',
    //     workoutAttachments: '',
    //     focusCategory: '',
    //     instructions: '',
    //     mistakes: '',
    //   });
    //   setVideoFile(null); // Clear video file
    //   setImageFile(null); // Clear image file


    //   setEditingMovement(null);
    //   setRefreshTable(prev => !prev); // Trigger table refresh

      alert('Data saved successfully!');  // Successfully created movement
      // alert(editingMovement ? 'Movement updated successfully!' : 'Movement created successfully!');
    } catch (error) {
      console.error('Error saving data:', error);
    }

    
  };
  

  return (
    <Container maxWidth="false" disableGutters sx={{ height: '100%', width: '100%', margin: '0%', padding: '0%' }}>
      <Container maxWidth="false" disableGutters sx={{ display: 'flex', flexDirection: 'column', rowGap: '20px', padding: '0%' }}>
        <Container maxWidth="false" disableGutters sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', rowGap: '20px' }}>
          <Typography variant="h4" sx={{ p: 2, textAlign: 'center' }}>
            Movement Management
          </Typography>
        </Container>

        <Button
          variant="contained"
          onClick={saveNewData}
          sx={{
            position: 'absolute',
            top: '20px',
            right: '20px',
            height: '50px',
            width: '150px',
            backgroundColor: 'green',
            color: 'white',
            '&:hover': {
              backgroundColor: 'darkgreen',
            },
          }}
        >
          Save Data
        </Button>

        <Container maxWidth="false" sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', columnGap: '20px', width: '100%' }}>
          <TextField
            fullWidth
            label="Movement"
            variant="outlined"
            value={formData.movName}
            onChange={(e) => setFormData({... formData, movName:e.target.value})}
            sx={{ width: 450 }}
          />
         {/* <Autocomplete
            freeSolo
            options={bodyPartsOptions}
            value={formData.bodyParts}
            onChange={(e) => setFormData({... formData, bodyParts:e.target.value})}
            renderInput={(params) => (
              <TextField {...params} label="Body Part" />
            )}
            sx={{ width: 400 }}
          /> */}

        <Autocomplete
            freeSolo
            options={bodyPartsOptions}
            value={formData.bodyParts}
            onChange={(event, newValue) => setFormData({...formData, bodyParts: newValue})}
            renderInput={(params) => (
              <TextField {...params} label="Body Part" />
            )}
            sx={{ width: 400 }}
          />
          <Autocomplete
            freeSolo
            // multiple
            options={difficultyLevel}
            // disableCloseOnSelect
            value={formData.difficultyLevel}
            onChange={handleChange('difficultyLevel')}
            renderOption={(props, option, { selected }) => (
              <li {...props}>
                <Checkbox icon={icon} checkedIcon={checkedIcon} checked={selected} />
                {option}  
                {/* // instead the option.label we write obtion */}
              </li>
            )}
            renderInput={(params) => <TextField {...params} label="Difficulty Level" />}
            sx={{ width: 400 }}
          />
          <Autocomplete
            freeSolo
            options={exerciseType}
            value={formData.exerciseType}
            onChange={(e,newValue)=>setFormData({...formData,exerciseType:newValue})}
            renderInput={(params) => <TextField {...params} label="Exercise Type" />}
            sx={{ width: 300 }}
          />
          {/* <Autocomplete
        multiple
        options={workoutAttachmentOptions}
        value={formData.workoutAttachments}
        onChange={handleChange('workoutAttachments')}
        disableCloseOnSelect
        renderOption={(props, option, { selected }) => (
    <li {...props}>
      <Checkbox icon={icon} checkedIcon={checkedIcon} checked={selected} />
      {option}
    </li>
  )}
  renderInput={(params) => (
    <TextField {...params} label="Workout Attachments" />
  )}
  sx={{ width: 400 }}
/> */}

<Autocomplete
            multiple
            options={workoutAttachmentOptions}
            value={formData.workoutAttachments}
            onChange={(e,newValue) =>setFormData({...formData,workoutAttachments:newValue})} 
            disableCloseOnSelect // This prevents the dropdown from closing
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
            sx={{ width: 400 }}
          />

        </Container>

        <Container maxWidth="false" sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', columnGap: '20px', width: '100%' }}>
          <Autocomplete
            freeSolo
            multiple
            options={focusCategory}
            value={formData.focusCategory}
            onChange={handleChange('focusCategory')}
            renderOption={(props, option, { selected }) => (
              <li {...props}>
                <Checkbox icon={icon} checkedIcon={checkedIcon} checked={selected} />
                {option}
              </li>
            )}
            renderInput={(params) => <TextField {...params} label="Focus Category" />}
            sx={{ width: 400 }}
          />
          <TextField
            id="instructions"
            label="Instructions"
            multiline
            rows={4}
            fullWidth
            value={formData.instructions}
            onChange={(e) => setFormData({ ...formData, instructions: e.target.value })}
            sx={{ width: 400 }}
          />
          <TextField
            id="mistakes"
            label="Common Mistakes"
            multiline
            rows={4}
            fullWidth
            value={formData.mistakes}
            onChange={(e) => setFormData({ ...formData, mistakes: e.target.value })}
            sx={{ width: 400 }}
          />
        </Container>

        <Container maxWidth="false" sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', columnGap: '20px', width: '100%' }}>
          <Button component="label" variant="contained" startIcon={<CloudUploadIcon />}>
            Upload Workout Video
            <VisuallyHiddenInput
              type="file"
              accept="video/*"
              onChange={handleVideoChange}
            />
            
          </Button>

          <Button component="label" variant="contained" startIcon={<CloudUploadIcon />}>
            Upload Body Part Image
            <VisuallyHiddenInput
              type="file"
              accept="image/*"
              onChange={handleImageChange}
            />
          </Button>
        </Container>
      </Container>
    </Container>
  );
};

export default Movement;





