import "./App.css";

import { Router } from "@reach/router";

import HomePage from "../src/Components/HomePage";

import ProjectsPage from "../src/Components/ProjectsPage";

import EducationHobbies from "../src/Components/EducationHobbies";

function App() {
  return (
    <Router>
      <HomePage path="/" />
      <ProjectsPage path="/projects" />
      <EducationHobbies path="/education-employment-and-hobbies" />
    </Router>
  );
}

export default App;
