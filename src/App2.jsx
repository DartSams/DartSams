import React from 'react';
import './App2.css'
import Box from '@mui/material/Box';
import NavBar from './components/NavBar';
import FrontPage from './components/frontPage';
import About from './components/About';
import Project from './components/Project';
import myImage from '/me.jpg'; 
import bankApp from "/bank-app.png"
import marioKart from "/trace-track.png"
import vr from "/vr.png"
import airDraw from "/Air-draw.png"
import twitter from "/twitter.png"


const App2 = () => {
  return (
    <Box className="app-container">
        <NavBar />
        <Box id="hero-section">
          <FrontPage
            name="Dartagnan Sams"
            title="Software Developer"
            company="Vision Tech"
            imageLink={myImage}
          />
        </Box>
        
        <Box id="about-section">
          <About />
        </Box>

        <Box id="project-section">
          <Project firstProject={true} title="Optimus Personal AI" tools={["Java","React","Spring Boot","AWS","MySQL","Maven","MUI","Vite","Spring Security","Axios"]} description="Personal artificial intelligence project designed to integrate and optimize my daily life. Using the power of Large Language Models (LLMs) and Retrieval-Augmented Generation (RAG), this system transforms raw data into actionable insights and intuitive control, inspired by personalized assistance reminiscent of J.A.R.V.I.S."/>
          <Project imageLink={bankApp} title="Bank Application" tools={["Java","React","Spring Boot","AWS","MySQL","Maven","MUI","Vite","Spring Security","Axios"]} liveLink="https://bankingApp.herokuapp.com/" description="A full-stack web application that provides users with secure online banking functionalities, including account management, balance tracking, and transaction viewing. Developed with a Spring Boot backend for secure data handling and a dynamic React frontend for an intuitive user experience. Features include user authentication (signup/login), session management with inactivity warnings, and dynamic account creation."/>
          <Project imageLink={marioKart} title="MarioKart" tools={["Python","PyOpenGL","WebRTC","Linux","GStreamer","Jupyter Notebook"]} liveLink="https://github.com/DartSams/MarioKart" description="AR-enhanced robotics game that combines computer vision, physical robotics, and 3D rendering to create an interactive racing experience. I served as the Team Lead andSystem Architect on a five person development team, designing and built a game in which a camera-equipped robot navigates a physical space while players interact with virtual elements like power-ups, obstacles, and race tracks rendered in real time."/>
          <Project imageLink={vr} title="Rise of Honor" tools={["Unity","C#","Meta","Occlusion Culling","Inverse Kinematics (IK)","Blender","Adobe"]} liveLink="https://github.com/DartSams/Rise-of-Honor" description="Designed for Meta Quest headsets, the game places players in a post-apocalyptic environment where they must navigate through eerie environments, manage limited resources, and defend against waves of undead enemies using intuitive, motion-based controls. I recruited members from my organization gameheads and colorstack focusing on immersive player interaction, realistic enemy AI, and environmental storytelling. Key features include physics-based weapon mechanics, dynamic lighting and sound for tension-building, and spatial UI for in-game health and ammo tracking."/>
          <Project imageLink={airDraw} title="Air Draw" tools={["Python","OpenCV","MediaPipe"]} liveLink="https://github.com/DartSams/OpenCV-detection" description="An interactive application that lets users draw in the air using only hand gestures no controller required. Built with OpenCV and MediaPipe, the project uses real-time hand tracking to detect fingertip movements and render virtual drawings on the screen. Users can switch colors, clear the canvas, or change brush thickness with specific hand poses, all tracked using a standard webcam."/>
          <Project imageLink={twitter} title="Twitter Clone" tools={["Python","Flask","MySQL","MongoDB","ByCrypt","Bootstrap","Socket.IO","JQuery","Heroku"]} liveLink="https://github.com/DartSams/Twitter-clone" description="Full-stack Twitter clone that replicates twitter functionality including user authentication, tweet posting, liking, replying, and following with a up to date post timeline. The app supports real-time feed updates and clean UI transitions."/>
        </Box>
    </Box>
  );
};

export default App2;
