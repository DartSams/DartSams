import React from 'react';
import { Box, Typography, Button, IconButton } from '@mui/material';
import MailOutlineIcon from '@mui/icons-material/MailOutline'; 
import LinkedInIcon from '@mui/icons-material/LinkedIn'; 
import GitHubIcon from '@mui/icons-material/GitHub'; 

const FrontPage = ({name, title, company, description, imageLink}) => {
  const emailLink = 'mailto:dartagnansamsd@gmail.com';
  const linkedinLink = 'https://www.linkedin.com/in/dartsams';
  const githubLink = 'https://github.com/dartsams'; 
  const resumeLink = 'https://drive.google.com/file/d/161xVnEiZHCjIw38GIduN4WorNLnbqL_T/view?usp=sharing';

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' },
        alignItems: 'center',
        justifyContent: 'center',
        gap: { xs: 4, md: 8 },
        padding: { xs: '40px 20px', md: '80px 50px' },
        maxWidth: '1200px',
        margin: '0 auto',
        minHeight: 'calc(100vh - 64px)', 
      }}>
      <Box sx={{ flex: 1, textAlign: { xs: 'center', md: 'left' } }}>
        <Typography variant="h5" sx={{ color: 'white'}}>
            Hello! my name is
        </Typography>
        <Typography variant="h3" component="h1" sx={{ fontWeight: 700, color: 'white'}}>
            {name || "Dartagnan Sams"}
        </Typography>
        <Typography variant="h6" sx={{ color: '#ff4081' }}>
            {title || "Software Engineer"} <Box component="span" sx={{ color: '#ffffff'}}>•</Box> {company}
        </Typography>
        <Typography variant="body1" sx={{ color: 'white', lineHeight: 1.6, mb: 4, maxWidth: { md: '600px' } }}>
            {description || "I'm a passionate Software Engineer based in Atlanta, currently studying my Masters of Computer Science at Georgia Institute of Technology. Alongside my studies, I'm working as a Software Development Engineer at Maxwell AirForce Base and a Teaching Assistant. I have a strong interest in game programming and am committed to creating visually appealing, puzzling, and fun games. I'm looking forward to exploring new opportunities to enhance my skills."}
        </Typography>

        <Box sx={{ display: 'flex', justifyContent: { xs: 'center', md: 'flex-start' }, gap: 2, mb: 4 }}>
          <IconButton
            sx={{
              color: '#e0e0e0',
              border: '1px solid #e0e0e0',
              borderRadius: '50%',
              p: 1,
              '&:hover': {
                color: '#ff4081',
                borderColor: '#ff4081',
                backgroundColor: 'rgba(255, 64, 129, 0.1)',
              },
            }}
            href={emailLink} 
            target="_blank"
            aria-label="Email">
            <MailOutlineIcon />
          </IconButton>
          <IconButton
            sx={{
              color: '#e0e0e0',
              border: '1px solid #e0e0e0',
              borderRadius: '50%',
              p: 1,
              '&:hover': {
                color: '#ff4081',
                borderColor: '#ff4081',
                backgroundColor: 'rgba(255, 64, 129, 0.1)',
              },
            }}
            href={linkedinLink} 
            target="_blank"
            aria-label="LinkedIn">
            <LinkedInIcon />
          </IconButton>
          <IconButton
            sx={{
              color: '#e0e0e0',
              border: '1px solid #e0e0e0',
              borderRadius: '50%',
              p: 1,
              '&:hover': {
                color: '#ff4081',
                borderColor: '#ff4081',
                backgroundColor: 'rgba(255, 64, 129, 0.1)',
              },
            }}
            href={githubLink} 
            target="_blank"
            aria-label="GitHub">
            <GitHubIcon />
          </IconButton>
        </Box>

        <Button
          variant="outlined"
          href={resumeLink}
          target="_blank"
          sx={{
            color: '#ff4081',
            borderColor: '#ff4081',
            textTransform: 'none',
            borderRadius: '8px',
            padding: '10px 25px',
            fontSize: '1rem',
            '&:hover': {
              backgroundColor: '#ff4081',
              color: '#ffffff',
              borderColor: '#ff4081',
            },
          }}
          >
          Resume
        </Button>
      </Box>

      <Box
        sx={{
          flex: 1,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          position: 'relative',
          width: { xs: '80%', sm: '60%', md: '400px' }, 
          height: { xs: '300px', sm: '400px', md: '400px' },
          maxWidth: '400px', 
          minHeight: '300px', 
        }}>
        <Box
          sx={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            backgroundColor: '#ff4081', 
            transform: 'rotate(-15deg)', 
            borderRadius: '16px',
            zIndex: 0,
            boxShadow: '0 10px 30px rgba(255, 64, 129, 0.4)',
          }}
        />
        <Box
          sx={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            backgroundColor: '#6a1b9a', 
            transform: 'rotate(5deg)', 
            borderRadius: '16px',
            zIndex: 0,
            boxShadow: '0 10px 30px rgba(106, 27, 154, 0.4)',
          }}
        />

        <Box
          sx={{
            position: 'relative',
            width: '80%', 
            height: '80%',
            borderRadius: '16px',
            overflow: 'hidden',
            zIndex: 1, 
            boxShadow: '0 10px 30px rgba(0, 0, 0, 0.5)',
          }}>
          <img
            src={imageLink} 
            alt="Dartagnan Sams"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover', 
              display: 'block',
            }}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default FrontPage;