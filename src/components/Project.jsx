import React from 'react';
import { useParams } from 'react-router-dom';
import projects from '../libs/Projects';

const Project = () => {
  const {slug} = useParams();
  const project = projects.find((project) => project.slug === slug);
  
  return (

    <div className="project">
      <h1>{project.title}</h1>
      <p>{project.description}</p>
      
    </div>
  );
};

export default Project;