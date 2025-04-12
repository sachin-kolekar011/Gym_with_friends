import { Dialog, IconButton, Typography, Menu, MenuItem, Box } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import VolumeOffIcon from '@mui/icons-material/VolumeOff';
import FullscreenIcon from '@mui/icons-material/Fullscreen';
import FullscreenExitIcon from '@mui/icons-material/FullscreenExit';
import SpeedIcon from '@mui/icons-material/Speed';
import { useState, useRef, useEffect } from 'react';

const VideoPopup = ({ src, alt = "Exercise video" }) => {
  const [open, setOpen] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [volume, setVolume] = useState(0.7);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [playbackRate, setPlaybackRate] = useState(1);
  const [speedMenuAnchor, setSpeedMenuAnchor] = useState(null);
  const [showControls, setShowControls] = useState(true);

  const videoRef = useRef(null);
  const dialogRef = useRef(null);
  const controlsTimeoutRef = useRef(null);

  const playbackRates = [0.5, 0.75, 1, 1.25, 1.5, 2];

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
    setIsPlaying(false);
    setOpen(false);
    exitFullscreen();
  };

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
    resetControlsTimer();
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
    resetControlsTimer();
  };

  const handleVolumeChange = (e) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
    if (videoRef.current) {
      videoRef.current.volume = newVolume;
      setIsMuted(newVolume === 0);
    }
  };

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      setProgress((videoRef.current.currentTime / videoRef.current.duration) * 100);
    }
  };

  const handleLoadedMetadata = () => {
    if (videoRef.current) {
      setDuration(videoRef.current.duration);
      videoRef.current.volume = volume;
    }
  };

  const handleProgressClick = (e) => {
    if (videoRef.current) {
      const rect = e.currentTarget.getBoundingClientRect();
      const pos = (e.clientX - rect.left) / rect.width;
      videoRef.current.currentTime = pos * videoRef.current.duration;
    }
    resetControlsTimer();
  };

  const toggleFullscreen = () => {
    if (!isFullscreen) {
      if (dialogRef.current) {
        dialogRef.current.requestFullscreen?.().catch(err => {
          console.error(`Error attempting to enable fullscreen: ${err.message}`);
        });
      }
    } else {
      document.exitFullscreen?.();
    }
    resetControlsTimer();
  };

  const exitFullscreen = () => {
    if (isFullscreen) {
      document.exitFullscreen?.();
    }
  };

  const handleSpeedMenuOpen = (event) => {
    setSpeedMenuAnchor(event.currentTarget);
    resetControlsTimer();
  };

  const handleSpeedMenuClose = () => {
    setSpeedMenuAnchor(null);
    resetControlsTimer();
  };

  const changePlaybackRate = (rate) => {
    setPlaybackRate(rate);
    if (videoRef.current) {
      videoRef.current.playbackRate = rate;
    }
    handleSpeedMenuClose();
  };

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = Math.floor(seconds % 60);
    return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
  };

  const resetControlsTimer = () => {
    setShowControls(true);
    clearTimeout(controlsTimeoutRef.current);
    controlsTimeoutRef.current = setTimeout(() => {
      if (isPlaying) {
        setShowControls(false);
      }
    }, 3000);
  };

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };

    document.addEventListener('fullscreenchange', handleFullscreenChange);

    return () => {
      document.removeEventListener('fullscreenchange', handleFullscreenChange);
      clearTimeout(controlsTimeoutRef.current);
    };
  }, []);

  useEffect(() => {
    if (open && videoRef.current) {
      videoRef.current.currentTime = 0;
    }
  }, [open]);

  return (
    <>
      {/* Video Thumbnail */}
      <div 
        onClick={handleOpen}
        style={{
          width: '120px',
          height: '80px',
          borderRadius: '4px',
          backgroundColor: '#000',
          position: 'relative',
          cursor: 'pointer',
          overflow: 'hidden'
        }}
      >
        <video
          src={src}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover'
          }}
          muted
          playsInline
        />
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'rgba(0,0,0,0.3)'
        }}>
          <PlayArrowIcon style={{ color: 'white', fontSize: 40 }} />
        </div>
      </div>

      {/* Video Popup */}
      <Dialog
        open={open}
        onClose={handleClose}
        maxWidth="lg"
        fullWidth
        PaperProps={{
          style: {
            backgroundColor: 'transparent',
            boxShadow: 'none',
            position: 'relative',
            overflow: 'visible'
          }
        }}
        ref={dialogRef}
        onMouseMove={resetControlsTimer}
      >
        <IconButton
          onClick={handleClose}
          sx={{
            position: 'absolute',
            top: -16,
            right: -16,
            color: 'white',
            backgroundColor: 'rgba(0,0,0,0.7)',
            '&:hover': {
              backgroundColor: 'rgba(0,0,0,0.9)'
            },
            zIndex: 1
          }}
        >
          <CloseIcon />
        </IconButton>

        <div style={{
          position: 'relative',
          paddingTop: '56.25%', // 16:9 aspect ratio
          backgroundColor: '#000'
        }}>
          <video
            ref={videoRef}
            src={src}
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%'
            }}
            onClick={togglePlay}
            onTimeUpdate={handleTimeUpdate}
            onLoadedMetadata={handleLoadedMetadata}
            onEnded={() => setIsPlaying(false)}
            controls={false}
          />

          {/* Custom Controls */}
          <div style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            background: 'linear-gradient(transparent, rgba(0,0,0,0.7))',
            padding: '16px',
            display: 'flex',
            flexDirection: 'column',
            gap: '8px',
            opacity: showControls ? 1 : 0,
            transition: 'opacity 0.3s ease'
          }}>
            {/* Progress Bar */}
            <div style={{
              width: '100%',
              height: '4px',
              backgroundColor: 'rgba(255,255,255,0.2)',
              borderRadius: '2px',
              cursor: 'pointer'
            }} onClick={handleProgressClick}>
              <div style={{
                width: `${progress}%`,
                height: '100%',
                backgroundColor: '#ff0000',
                borderRadius: '2px'
              }} />
            </div>

            {/* Controls Row */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <IconButton onClick={togglePlay} sx={{ color: 'white' }}>
                  {isPlaying ? (
                    <span style={{ fontSize: '24px' }}>❚❚</span> // Pause icon
                  ) : (
                    <PlayArrowIcon fontSize="large" />
                  )}
                </IconButton>

                <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                  <IconButton onClick={toggleMute} sx={{ color: 'white' }}>
                    {isMuted ? <VolumeOffIcon /> : <VolumeUpIcon />}
                  </IconButton>
                  <input
                    type="range"
                    min="0"
                    max="1"
                    step="0.01"
                    value={isMuted ? 0 : volume}
                    onChange={handleVolumeChange}
                    style={{
                      width: '80px',
                      accentColor: '#fff'
                    }}
                  />
                </div>

                <Typography variant="body2" sx={{ color: 'white', minWidth: '100px' }}>
                  {formatTime(videoRef.current?.currentTime || 0)} / {formatTime(duration)}
                </Typography>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <IconButton 
                  onClick={handleSpeedMenuOpen}
                  sx={{ color: 'white' }}
                >
                  <SpeedIcon />
                  <Typography variant="caption" sx={{ ml: 0.5 }}>
                    {playbackRate}x
                  </Typography>
                </IconButton>

                <IconButton 
                  onClick={toggleFullscreen}
                  sx={{ color: 'white' }}
                >
                  {isFullscreen ? <FullscreenExitIcon /> : <FullscreenIcon />}
                </IconButton>
              </div>
            </div>
          </div>
        </div>
      </Dialog>

      {/* Playback Speed Menu */}
      <Menu
        anchorEl={speedMenuAnchor}
        open={Boolean(speedMenuAnchor)}
        onClose={handleSpeedMenuClose}
      >
        {playbackRates.map(rate => (
          <MenuItem 
            key={rate} 
            onClick={() => changePlaybackRate(rate)}
            selected={playbackRate === rate}
          >
            {rate}x
          </MenuItem>
        ))}
      </Menu>
    </>
  );
};

export default VideoPopup;