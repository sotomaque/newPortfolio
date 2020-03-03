import React, { useContext, useEffect, useState } from 'react';
import Fade from 'react-reveal/Fade';
import Tilt from 'react-tilt';
import { Container, Row, Col } from 'react-bootstrap';
import Title from '../Title/Title';

const ProjectsMobile = ({ projects }) => {
    return (
        <section id="projects">
          <Container>
            <div className="project-wrapper">
              <Title title="Projects" />
                {
                    projects.map( (project, index) => {
                        const { displayName, summary, website, githubUrl, languages, libraries, images } = project;
                        let img  = images[0]?.resolutions?.mobile?.url;
            
                        return (
                            <Row key={index}>
                                {
                                    img &&
                                    <Col lg={8} sm={12}>
                                        <Fade right={false} bottom={true} duration={1000} delay={1000} distance="30px">
                                            <div className="project-wrapper__image">
                                                <a href={githubUrl || '#!'} target="_blank" aria-label="Project Link"  rel="noopener noreferrer" >
                                                    <Tilt options={{ reverse: false, max: 8, perspective: 1000, scale: 1, speed: 300, transition: true, axis: null, reset: true, easing: 'cubic-bezier(.03,.98,.52,.99)'}} >
                                                        <div data-tilt className="thumbnail rounded">
                                                            <img alt={displayName} src={img} style={{maxWidth: "300px"}} /> 
                                                        </div>
                                                    </Tilt>
                                                </a>
                                            </div>
                                        </Fade>
                                    </Col>
                                }
                                <Col lg={4} sm={12}>
                                    <Fade left={false} bottom={true} duration={1000} delay={500} distance="30px">
                                        <div className="project-wrapper__text">
                                            <h3 className="project-wrapper__text-title">{displayName}</h3>
                                        </div>
                                        <div>
                                            <p className="mb-4">{summary}</p>
                                        </div>
                                        {
                                            website && 
                                            <a target="_blank" rel="noopener noreferrer" className="cta-btn cta-btn--hero" href={website}>
                                                See Demo
                                            </a>
                                        }
                                        {
                                            githubUrl && 
                                            <a target="_blank" rel="noopener noreferrer" className="cta-btn text-color-main" href={githubUrl}>
                                                Source Code
                                            </a>
                                        }
                                        {
                                            languages && 
                                            <div className="project-tag text-color-main">
                                                {
                                                    languages.map((language, i) => {
                                                        return (<p style={{padding: "10px"}} key={i}>{language}</p>)
                                                    })
                                                }
                                            </div>
                                        }
                                        {
                                            libraries && 
                                            <div className="project-tag text-color-main">
                                                {
                                                    libraries.map((library, i) => {
                                                        return (<p style={{padding: "10px"}} key={i}>{library}</p>)
                                                    })
                                                }
                                            </div>
                                        }
                                    </Fade>
                                </Col>
                            </Row>
                        );
                
                    })
                }
            </div>
          </Container>
        </section>
      );
}

export default ProjectsMobile;