import React from 'react';
import './App.css';
import useExperienceSection from './components/useExperienceSection/useExperienceSection';

function App() {

  let workExperience = useExperienceSection("Work experience", [
    "Two times Microsoft intern",
    "Former intern at SAIC"
  ]); 

  let skillSet = useExperienceSection("Skillset", [

    "HTML - CSS - JavaScript - TypeScript",
    "React (with React hooks) - Angular ",
    "C# - Java"

  ]);

  let pastProjects = useExperienceSection("Past projects", [

    "Microsoft Reporting Analytics Onboarding Administrator web interface with React, TypeScript, C#, and SQL",
    "Microsoft Reporting Analytics Metadata, Relations, and Perspective setup web interface with Angular, TypeScript, C#, and SQL",
    "Random quote generator website with HTML, CSS, JQuery and using a REST API to get the quotes",
    "Virtual Reality 3D object human hand manipulator prototype with Unity, C#, Oculus, and LeapMotion",
    "Obstacle avoiding robot with C on the Arduino platform"
  ]);

  let contactMe = useExperienceSection("Contact me", [
    "oavil004@fiu.edu",
    "786-859-8473"
  ])
  
  let socialMedia = useExperienceSection("Social media", [

      <img src="../public/instagram-logo.png" width={20} height={20} alt="instagram logo"/>,
      <img src="../public/facebook-logo.png" width={20} height={20} alt="facebook logo"/>,
      <img src="../public/linkedin-logo.png" width={20} height={20} alt="linkedin logo"/>
  ])


  return (
    <div className="App">
      <header className="App-header">
          Octavio Avila Cardet
      </header>
      <div>

        {workExperience}
        {skillSet}
        {pastProjects}
        {contactMe}
        {socialMedia}

      </div>

    </div>
  );
}

export default App;
