import React, { useState } from 'react';
import './Dashboard.css';


const projects = [
  { id: 1, name: 'images', details: <input type="file" /> },
  { id: 2, name: 'Songs', details: <input type="file" />},
  { id: 3, name: 'videos', details: <input type="file" /> },
  { id: 4, name: 'recordings', details: <input type="file" /> },
];

function Dashboard() {
  const [selectedProject, setSelectedProject] = useState(null);

  const handleProjectClick = (project) => {
    setSelectedProject(project);
  };

  return (
    <div className="dashboard">
      <div className="sidebar">
        <h2>surya's Dashboard</h2>
        <ul>
          {projects.map((project) => (
            <li key={project.id} onClick={() => handleProjectClick(project)}>
              {project.name}
            </li>
          ))}
        </ul>
      </div>
      <div className="project-details">
        <h2>Project Details</h2>
        {selectedProject ? (
          <div>
            <h3>{selectedProject.name}</h3>
            <p>{selectedProject.details}</p>
          </div>
        ) : (
          <p>Select a project to see the details.</p>
        )}
      </div>
    </div>
  );
}

export default Dashboard;
