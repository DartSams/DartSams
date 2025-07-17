import React from 'react';
import { Box, Typography } from '@mui/material';

const About = () => {
  return (
    <Box
      sx={{
        padding: { xs: '60px 20px', md: '100px 50px' },
        maxWidth: '1200px',
        margin: '0 auto',
        textAlign: 'center',
      }}>
      <Typography variant="h2" component="h2" sx={{ fontWeight: 700, color: 'white', mb: 6 }}>
        About My
      </Typography>

      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', md: 'repeat(3, 1fr)' }, 
          gap: { xs: 4, md: 6 },
        }}>
        <Box sx={{
          backgroundColor: '#2a2a4a',
          borderRadius: '12px',
          padding: '30px',
          boxShadow: '0 5px 15px rgba(0,0,0,0.3)',
          textAlign: 'left',
        }}>
          <Typography variant="h5" sx={{ color: '#ff4081', mb: 2 }}>
              Past
          </Typography>
          <Typography variant="body1" sx={{ color: '#e0e0e0', lineHeight: 1.6 }}>
              I discovered programming in one of my mechanical engineering classes creating a line following robot and 
              immediately got hooked I went home and studied everything that I could as a self taught programmer. 
              It started with hobby IoT projects and REST API web applications but quickly turned into a passion that 
              I can truly see myself doing everyday which led me to obtaining my bachelors in Computer Science. 
          </Typography>
        </Box>

        <Box sx={{
          backgroundColor: '#2a2a4a',
          borderRadius: '12px',
          padding: '30px',
          boxShadow: '0 5px 15px rgba(0,0,0,0.3)',
          textAlign: 'left',
        }}>
          <Typography variant="h5" sx={{ color: '#ff4081', mb: 2 }}>
              Present
          </Typography>
          <Typography variant="body1" sx={{ color: '#e0e0e0', lineHeight: 1.6 }}>
              Today, I hold an A.S. in Mechanical Engineering and a B.S. in Computer Science and currently 
              pursuing my masters in robotics. I work as a software developer for the U.S. Air Force, 
              where I build tools that support critical operations translating business requirements and 
              specifications into logical program designs and code. I also enjoy creating 3D and VR games 
              in Unity just for the love of it I'm currently working on a VR zombie survival game.
          </Typography>
        </Box>

        <Box sx={{
          backgroundColor: '#2a2a4a',
          borderRadius: '12px',
          padding: '30px',
          boxShadow: '0 5px 15px rgba(0,0,0,0.3)',
          textAlign: 'left',
        }}>
          <Typography variant="h5" sx={{ color: '#ff4081', mb: 2 }}>
              Future
          </Typography>
          <Typography variant="body1" sx={{ color: '#e0e0e0', lineHeight: 1.6 }}>
              I plan to complete my master’s in Robotics and work on projects that combine real-time systems, AI, 
              and immersive tech. Beyond my career, I want to keep making games that inspire young developers—especially 
              those who, like me find joy breaking apart systems and figuring things out. Whether through robotics or game 
              development, I want my work to be creative, hands-on, and meaningful.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default About;
