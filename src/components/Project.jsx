import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import OpenInNewIcon from '@mui/icons-material/OpenInNew'; 

const Project = ({firstProject, imageLink, title, tools, description, liveLink}) => {
  return (
    <Box
      sx={{
        padding: { xs: '60px 20px', md: '100px 50px' },
        maxWidth: '1200px',
        margin: '0 auto',
        textAlign: 'center',
      }}>
       {firstProject ?
            <Typography variant="h4" component="h2" sx={{ fontWeight: 700, color: 'white', mb: 6 }}>
                Projects
            </Typography> : null
       } 

      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' }, 
          backgroundColor: '#2a2a4a',
          borderRadius: '16px',
          overflow: 'hidden',
          boxShadow: '0 10px 30px rgba(0,0,0,0.4)',
          alignItems: 'center',
          justifyContent: 'center',
          gap: { xs: 3, md: 5 },
          padding: { xs: '20px', md: '40px' },
        }}>
        <Box
          sx={{
            flex: { xs: 'none', md: 1 },
            width: { xs: '100%', md: 'auto' },
            minWidth: { md: '400px' },
            height: { xs: '250px', md: '300px' },
            borderRadius: '12px',
            overflow: 'hidden',
            boxShadow: '0 5px 15px rgba(0,0,0,0.2)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <img
            src={imageLink || "https://placehold.co/500x300/4a148c/FFFFFF?text=Project+Image"}
            alt="Arabic Poetry Project"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              display: 'block',
              borderRadius: '12px',
            }}/>
        </Box>

        <Box sx={{ flex: 1, textAlign: { xs: 'center', md: 'left' } }}>
          <Typography variant="h5" sx={{ color: '#ffffff', fontWeight: 600, mb: 1 }}>
            {title || "Project Title"}
          </Typography>
          <Typography variant="body2" sx={{ color: '#ff4081', mb: 2 }}>
            {Array.isArray(tools) && tools.length > 0 ? (
              tools.map((tool, index) => (
                <Button
                  key={index} 
                  variant="outlined"
                  size="small" 
                  sx={{
                    color: '#ff4081',
                    borderColor: '#ff4081',
                    textTransform: 'none', 
                    borderRadius: '4px', 
                    padding: '4px 8px', 
                    margin:'3px',
                    minWidth: 'unset', 
                    '&:hover': {
                      backgroundColor: 'rgba(255, 64, 129, 0.1)',
                      borderColor: '#ff4081',
                    },
                  }}
                >
                  {tool}
                </Button>
              ))
            ) : (
              <Typography variant="body2" sx={{ color: '#ff4081' }}>

              </Typography>
            )}
          </Typography>
          <Typography variant="body1" sx={{ color: '#e0e0e0', lineHeight: 1.6, mb: 3 }}>
            {description || "The Arabic Poetry Platform offers over 160,000 poems from more than 6,000 poets, ranging from the pre-Islamic era to modern times. As the founder, I created this user-friendly site to enhance access to Arabic poetry through AI-powered categorization, a design tool for creating engaging graphics, AI explanations for complex verses, and an interactive community for sharing and discussion. This project combines technology and literature, making Arabic poetry accessible to all."}
          </Typography>
          {liveLink ? 
            <Button
              variant="outlined"
              href={liveLink || "#"} 
              target="_blank"
              rel="noopener noreferrer"
              endIcon={<OpenInNewIcon />}
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
              }}>
              Live
            </Button> : null
            }
        </Box>
      </Box>
    </Box>
  );
};

export default Project;
