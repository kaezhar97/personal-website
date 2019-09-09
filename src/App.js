import React from 'react';
import './App.css';
import useExperienceSection from './components/useExperienceSection/useExperienceSection';
import instagramLogo from './assets/images/instagram-logo.png';
import facebookLogo from './assets/images/facebook-logo.png';
import linkedInLogo from './assets/images/linkedin-logo.png';
import Octavio from './assets/images/octavio-avila-cardet.png'; 
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function App() {

  let workExperience = useExperienceSection("Work experience", [
    <span>Two times <span className="highlight">Microsoft intern</span></span>,
    "Former intern at SAIC"
  ]); 

  let skillSet = useExperienceSection("Skillset", [

    "HTML - CSS - JavaScript - TypeScript",
    <span><span className="highlight">React (with React hooks)</span>- Angular</span>,
    "C# - Java"

  ]);

  let pastProjects = useExperienceSection("Past projects", [
    "Microsoft Reporting Analytics Onboarding Administrator web interface with React, TypeScript, C#, and SQL",
    "Microsoft Reporting Analytics Metadata, Relations, and Perspective setup web interface with Angular, TypeScript, C#, and SQL",
    "Random quote generator website with HTML, CSS, JQuery and using a REST API to get the quotes. See it at this codepen",
    <span className="highlight">Virtual Reality prototype project that lets you move virtual objects with your hands. Built with Unity, C#, Oculus, and LeapMotion during a hackathon</span>,
    "Obstacle avoiding robot with C on the Arduino platform"
  ]);

  let contactMe = useExperienceSection("Contact me", [
    "oavil004@fiu.edu",
    <span className="highlight">786-859-8473</span>
  ])
  
  let socialMedia = useExperienceSection("Social media", [
      
      <a href="https://www.instagram.com/octaviocardet/" target="_blank" rel="noopener noreferrer" title="My instagram: https://www.instagram.com/octaviocardet/">
        <img src={instagramLogo} width={40} height={40} alt="instagram logo" className="social-media-logo-icon instagram-logo"/>
      </a>,
      <a href="https://www.facebook.com/octavio.g.avila" target="_blank" rel="noopener noreferrer" title="My facebook: https://www.facebook.com/octavio.g.avila">
        <img src={facebookLogo} width={45} height={45} alt="facebook logo" className="social-media-logo-icon facebook-logo"/>
      </a>,
      <a href="https://www.linkedin.com/in/octavioavilacompsci97/" target="_blank" rel="noopener noreferrer" title="My linkedin: https://www.linkedin.com/in/octavioavilacompsci97/">
        <img src={linkedInLogo} width={40} height={40} alt="linkedin logo" className="social-media-logo-icon linkedin-logo"/>
      </a>
  ], true)


  return (
    <div className="App-root-div">
      <h1 className="title-full-name">
          Octavio Avila Cardet
      </h1>

    <div className="App-body">
        <Container className="App-grid" fluid>
          <Row className="App-grid-row">
            <Col sm={6} className="App-grid-col left-col">
              {workExperience}
              {skillSet}
              {pastProjects}
            </Col>


            <Col sm={2} className="App-grid-col right-col">
              {contactMe}
              {socialMedia}
            </Col>

            <Col sm={4} className="App-grid-col">
              <img src={Octavio} alt="Octavio looking to the left from the front" className="octavio-image" title="Octavio Avila Cardet"/>
            </Col>
          </Row>

        </Container>
        </div>



      </div>


  );
}

export default App;
