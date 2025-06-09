import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ExpCard from './components/ExpCard'
import ProjectCard from './components/ProjectCard'

function App() {
  const [count, setCount] = useState(0)

  const updateCount = () => setCount(count + 1);


  return (
    <div className="app">
      {/* <h1>Clicks: {count}</h1> */}
      {/* <button onClick={updateCount}>Click Me</button> */}
      <div id="container">
        {/* <div id="navbar">
          <button><a href="">01. About</a></button>
          <button><a href="">02. Experience</a></button>
          <button><a href="">03. Work</a></button>
          <button><a href="">Resume</a></button>
        </div>

        <div id="center">
          <p>Hi, my name is</p>
          <h1>Dartagnan Sams</h1>
          <h1>I build web apps and fun games</h1>
          <h3>I'm a software developer building web applications I also build games in my free time and the occasional robotics IoT project.</h3>
        </div> */}

            <div id="left-container">
                <div id="top">
                  <h1>Dartagnan Sams</h1>
                  <h3>Software Developer</h3>
                  <p>I build web applications and video games.</p>
                </div>

                <div id="middle">
                    <a href="#about" class="nav-link">
                        <span class="nav-line"></span> ABOUT
                    </a>
                    <a href="#experience" class="nav-link">
                        <span class="nav-line"></span> EXPERIENCE
                    </a>
                    <a href="#projects" class="nav-link">
                        <span class="nav-line"></span> PROJECTS
                    </a>
                </div>

                <div id="bottom">
                    <a href=""><img src="/linkedin.png" alt="" /></a>
                    <a href=""><img src="/github.png" alt="" /></a>
                </div>
            </div>

            <div id="right-container">
                <div id="about">
                    <p>
                      I’m a developer passionate about crafting impactful web applications and immersive video games that blend
                      thoughtful design with robust engineering. My favorite work lies at the intersection of creativity and logic, 
                      building experiences that are not only engaging but also meticulously engineered for performance and usability.

                      <br></br>
                      <br></br>

                      As a recent graduate of Georgia Southern University, I've developed a strong foundation in Java, Python, and SQL. 
                      My professional journey started as a Mechanical Engineer self teaching computer programming then transitions to computer science. 
                      Which includes hands-on cloud infrastructure learned at IBM then refined in personal projects, 
                      client-facing web development at Southern Automation Logistics and Technology, and strategic game 
                      design at PEMDAS. Currently, I serve as a Software Developer at Vision Technology making web applications for the 
                      federal government and a Teaching Assistant for CodePath, where I mentor future developers 
                      in web development, database management, and technical interview preparation using Python.

                      <br></br>
                      <br></br>

                      In my spare time, you'll find me at the gym, playing video games, cooking some delicious chicken alfredo, 
                      delving into personal projects—like a Twitter clone, 
                      exploring AI development with (NeuroEvolution of Augmenting Topologies) NEAT, or leading a team I recruited 
                      to develop a VR  passion project game.
                    </p>
                </div>

                <div id="experience">
                  <ExpCard date="Jan 2025 - Present" company="Vision Tech" title="Software Developer" text="Reinforced concepts students learned in class" tools={["java","postgresSQL","react","springboot","vue"]}/>
                  <ExpCard date="Aug 2023 - Present" company="CodePath" title="Teaching Assistant" text="Reinforced concepts students learned in class" tools={["python","supabase","react","oracle"]}/>
                  <ExpCard date="Aug 2023 - Dec 2023" company="Southern Automation Logistics & Technology" title="Software Developer Intern" text="Reinforced concepts students learned in class" tools={["C#","t-SQL",".NET","bootstrap"]}/>
                  <ExpCard date="Jun 2023 - Aug 2023" company="IBM" title="Software Developer Apprentice" text="Reinforced concepts students learned in class" tools={["javascript","oracle"]}/>
                  <ExpCard date="Jan 2023 - Dec 2024" company="Georgia Southern University" title="Resident Advisor" text="Led 5 community engagement initiatives and assisted 100+ residents per semester" tools={["team","scheduling"]}/>
                  <button><a href="https://drive.google.com/file/d/1dK5Lyq9j7DZMNZwQLcLG9HvLzIKJyeXw/view?usp=sharing" target='__blank'>View Full Resume</a></button>
                </div>

                <div id="projects">
                  <ProjectCard img="/image.png" title="Capstone Project" text="As the team lead leading team/client meetings followed the client requirements of building a project that attracts students to the CS program."/>
                  <ProjectCard img="/vr.png" title="Rise of Honor" text="A VR unity game where players have to survive rounds of zombies in endless waves earning money to collect/upgrade weapons."/>
                  <ProjectCard img="" title="OpenCV Air Draw" text="Developed an interactive air drawing application using OpenCV and MediaPipe. The system tracks hand landmarks to identify fingertip movements, translating them into digital strokes for real-time drawing. It features both drawing and erasing functionalities, providing an intuitive way to interact with the canvas using only gestures."/>
                  <ProjectCard img="/twitter.jpg" title="Twitter Clone" text="A Twitter clone developed to enhance my cloud engineering expertise. I built the backend with Python (Flask) and SQL, and deployed it using Docker for environment consistency. Later, I upgraded to Kubernetes to implement auto-scaling, load balancing, and reinforcing critical cloud infrastructure concepts and minimizing downtime."/>
                  <ProjectCard img="/discord.jpg" title="Discord Bot" text="This Discord bot serves as a powerful server management and utility tool, offering features like comprehensive moderation (role management, banning, muting) and automated content delivery. It integrates with external APIs to post LinkedIn job opportunities and Google Calendar events, enhancing community engagement and resource sharing."/>
                </div>

                <div>
                  <p>Loosely designed in React and coded in Visual Studio Code by yours truly. Built with React and CSS, deployed with Vercel.</p>
                </div>
            </div>

            



        {/* <div className="container">
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
        </div> */}
      </div>
    </div>
  )
}

export default App
