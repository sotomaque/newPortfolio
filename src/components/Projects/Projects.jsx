import React, { useContext, useEffect, useState } from 'react';
import Fade from 'react-reveal/Fade';
import Tilt from 'react-tilt';
import { Container, Row, Col } from 'react-bootstrap';
import PortfolioContext from '../../context/context';
import ProjectsMobile from './ProjectsMobile.jsx';
import ProjectDesktopImageLeft from './ProjectDesktopImageLeft.jsx';
import Title from '../Title/Title';
import ProjectDesktopImageRight from './ProjectDesktopImageRight';

const Projects = () => {
  const { projects } = useContext(PortfolioContext);

  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth > 769) {
      setIsDesktop(true);
      setIsMobile(false);
    } else {
      setIsMobile(true);
      setIsDesktop(false);
    }
  }, []);

  if (isMobile) {
    return (
      <ProjectsMobile projects={projects}/>
    )
  } else {
    return (
      <section id="projects">
        <Container>
          <div className="project-wrapper">
            <Title title="Projects" />
            {
              projects.map((project, index) => {
                // const { displayName, summary, website, githubUrl, languages, libraries, images } = project;
                // let img  = images[0]?.resolutions?.desktop?.url;
            
                if (index % 2 == 0) {
                  return (
                    <ProjectDesktopImageLeft project={project} key={index} />
                  );
                } else {
                  return (
                    <ProjectDesktopImageRight project={project} key={index} />
                  );
                }
              })
            }
        </div>
      </Container>
    </section>
    );
  }

};

export default Projects;
