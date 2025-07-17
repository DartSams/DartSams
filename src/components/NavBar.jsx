import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

const NavBar = () => {
    const pageLinks = [
        { name: 'About', id: 'about-section', type: 'scroll' },
        { name: 'Projects', id: 'project-section', type: 'scroll' },
        { name: 'Contact', id: 'contact-section', type: 'scroll' },
        { name: 'Resume', href: 'https://drive.google.com/file/d/161xVnEiZHCjIw38GIduN4WorNLnbqL_T/view?usp=sharing', type: 'external' } 
    ];

    const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };


    return (
        <AppBar position="static" sx={{ backgroundColor: '#1a1a2e', boxShadow: 'none' }}>
            <Toolbar sx={{ justifyContent: 'space-between', padding: { xs: '0 16px', md: '0 24px' } }}>
                <Box sx={{ flexGrow: 1 }}>
                <Typography
                    variant="h6" 
                    component="div" 
                    sx={{
                    fontFamily: 'Inter, sans-serif', 
                    fontWeight: 600, 
                    color: '#ffffff', 
                    fontSize: { xs: '1rem', sm: '1.25rem' }, 
                    whiteSpace: 'nowrap',
                    overflow: 'hidden', 
                    textOverflow: 'ellipsis', 
                    }}>
                    Dartagnan Sams
                </Typography>
                </Box>

                <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 2 }}> {/* Hide on small screens, show on medium and up */}
                    {pageLinks.map((page) => (
                        // Conditionally render Button based on its type (scroll or external link)
                        page.type === 'external' ? (
                        <Button
                            key={page.name} // Use name as key for external link
                            color="inherit"
                            href={page.href} // Use href for external link
                            target="_blank" // Open in a new tab
                            rel="noopener noreferrer" // Security best practice for target="_blank"
                            sx={{
                            textTransform: 'none',
                            color: '#ffffff',
                            '&:hover': {
                                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                                borderRadius: '8px',
                            },
                            padding: '8px 12px',
                            }}
                        >
                            {page.name}
                        </Button>
                        ) : (
                        <Button
                            key={page.id} // Use the unique ID as the key for scroll links
                            color="inherit"
                            onClick={() => scrollToSection(page.id)} // Call scrollToSection on click
                            sx={{
                            textTransform: 'none',
                            color: '#ffffff',
                            '&:hover': {
                                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                                borderRadius: '8px',
                            },
                            padding: '8px 12px',
                            }}
                        >
                            {page.name}
                        </Button>
                        )
                    ))}
                </Box>
            </Toolbar>
        </AppBar>
    );
};

export default NavBar; 
