



import React, { useEffect, useState } from "react";
import axios from "axios";
import DataTable from "react-data-table-component";
import Movement from "./Movement"; // You'll need to create this form component
import { IconButton, Tooltip } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

function MovementTable() {
  const [movementData, setMovementData] = useState([]);
  const [editingMovement, setEditingMovement] = useState(null);
  const [showForm, setShowForm] = useState(false);

  // Fetch data from the backend
  const getMovementData = async () => {
    try {
      const response = await axios.get("http://localhost:4000/movements");
      setMovementData(response.data);
    } catch (err) {
      console.error("Error fetching movements:", err);
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
      setShowForm(false);
    } catch (err) {
      console.error("Error creating movement:", err);
    }
  };

  // Edit functionality
  const handleEdit = (row) => {
    setEditingMovement(row);
    setShowForm(true);
  };

  // Update movement
  const handleUpdate = async (id, formData) => {
    try {
      await axios.put(`http://localhost:4000/movements/${id}`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      getMovementData(); // Refresh the data
      setShowForm(false);
      setEditingMovement(null);
    } catch (err) {
      console.error("Error updating movement:", err);
    }
  };

  // Delete functionality
  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this item?")) {
      try {
        await axios.delete(`http://localhost:4000/movements/${id}`);
        setMovementData(movementData.filter((movement) => movement.id !== id));
      } catch (err) {
        console.error("Error deleting movement:", err);
      }
    }
  };

  const columns = [
    { name: "Movement", selector: (row) => row.movName,sortable:true },
    { name: "Bodyparts", selector: (row) => row.bodyParts,sortable:true  },
    { name: "Difficulty Level", selector: (row) => row.difficultyLevel ,sortable:true },
    { name: "Exercise Type", selector: (row) => row.exerciseType,sortable:true  },
    { name: "Focus-Category", selector: (row) => row.focusCategory,sortable:true  },
    { name: "Instructions", selector: (row) => row.instructions },
    { name: "Common Mistaked", selector: (row) => row.mistakes },
    {
      name: "Image",
      selector: (row) => (
        <img
          src={`http://localhost:4000/image/${row.image_url}`}
          alt="Movement"
          width="100"
          style={{ borderRadius: "10px" }}
        />
      ),
    },
    {
      name: "Video",
      selector: (row) => (
        <video width="150" controls>
          <source src={`http://localhost:4000/${row.video_path}`} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      ),
    },
  
    {
        name: "Actions",
        cell: (row) => (
          <div style={{ display: "flex", gap: "8px" }}>
            <Tooltip title="Edit">
              <IconButton
                onClick={() => handleEdit(row)}
               
                aria-label="edit"
                sx={{
                    color: "black",
                    backgroundColor: 'rgba(244, 67, 54, 0.08)',
                    '&:hover': {
                      backgroundColor: 'blue',
                      color: 'white',
                    },
                    transition: 'all 0.2s',
                  }}
              >
                <EditIcon />
              </IconButton>
            </Tooltip>
            <Tooltip title="Delete">
              <IconButton
                onClick={() => handleDelete(row.id)}
                color="black"
                aria-label="delete"
                sx={{
                    color: "black",
                    '&:hover': {
                      backgroundColor: 'rgba(228, 17, 17, 0.88)',
                      color:"white"
                    },
                    transition: 'all 0.2s',
                  }}
              >
                <DeleteIcon />
              </IconButton>
            </Tooltip>
          </div>
        ),
        ignoreRowClick: true,
        allowOverflow: true,
        button: true,
      },

  ];
  useEffect(() => {
    getMovementData();
  }, []);

  return (
    <>
      <h1 style={{ textAlign: "center", color: "#333" }}>Movement Table</h1>
      <div style={{ padding: "12px", maxWidth: "1550px", margin: "0 auto" }}>
        <DataTable
          columns={columns}
          data={movementData}
          pagination
          highlightOnHover
          dense
          customStyles={{
            header: {
              style: {
                fontSize: "18px",
                fontWeight: "bold",
                color: "#4caf50",
                backgroundColor: "#f4f4f4",
              },
            },
            rows: {
              style: {
                padding:"5px",
                fontSize: "16px",
                minHeight: "40px",
                "&:hover": {
                  backgroundColor: "#f1f1f1",
                },
              },
            },
            cells: {
                style: {
                  padding: "5px",
                   // Reduce cell padding
                },
              },
          
          }}
        />
      </div>
    </>
  );
}

export default MovementTable;

