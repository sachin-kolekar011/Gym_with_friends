import { Dialog, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { useState } from 'react';

const ImagePopup = ({ src, alt }) => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <img
        src={src}
        alt={alt}
        onClick={handleClickOpen}
        style={{
          width: '80px',
          height: '60px',
          borderRadius: '4px',
          objectFit: 'cover',
          cursor: 'pointer',
          transition: 'transform 0.2s',
          '&:hover': {
            transform: 'scale(1.05)'
          }
        }}
      />

      <Dialog
        open={open}
        onClose={handleClose}
        maxWidth="md"
        PaperProps={{
          style: {
            backgroundColor: 'transparent',
            boxShadow: 'none',
            overflow: 'visible',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: 0,
            maxHeight: 'none'
          }
        }}
      >
        <div style={{ 
          position: 'relative',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}>
          <IconButton
            onClick={handleClose}
            sx={{
              position: 'absolute',
              top: -16,
              right: -16,
              color: 'white',
              backgroundColor: 'rgba(0,0,0,0.5)',
              '&:hover': {
                backgroundColor: 'rgba(0,0,0,0.7)'
              }
            }}
          >
            <CloseIcon />
          </IconButton>
          <img
            src={src}
            alt={alt}
            style={{
              maxWidth: '80vw',
              maxHeight: '80vh',
              borderRadius: '8px',
              display: 'block'
            }}
          />
        </div>
      </Dialog>
    </>
  );
};

export default ImagePopup;