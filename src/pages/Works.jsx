import React from 'react';
import { NavLink } from 'react-router-dom';
import Header from '../components/Header';
import Card from '../components/Card';
import projects from '../libs/Projects';


const Works = () => {
  return (
    <div className="works">
      <Header/>
     <h1>Over the years, we have been able to accompany the best</h1>
     <p>Find out how we were there to launch your favorite brands.</p>
     <ul className="works-list">
      { projects &&
        projects.map((project) => {
          return (
            <NavLink exact to={`works/${project.slug}`} key={project.client} className="work-bullet"><Card img={project.img} client={project.client} /></NavLink>
        )})
      }
     </ul>
    </div>
  );
};

export default Works;