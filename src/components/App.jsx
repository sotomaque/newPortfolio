import React, { useState, useEffect } from 'react';
import Hero from './Hero/Hero';
import About from './About/About';
import Projects from './Projects/Projects';
import Contact from './Contact/Contact';
import Footer from './Footer/Footer';
import NavBar from './NavBar/NavBar';

import { PortfolioProvider } from '../context/context';

import { aboutData, contactData, footerData } from '../mock/data';

function App() {
  const [about, setAbout] = useState({});
  const [projects, setProjects] = useState([]);
  const [contact, setContact] = useState({});
  const [footer, setFooter] = useState({});
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(false);

  const BASE_URL = "https://gitconnected.com/v1/portfolio/sotomaque";

  const getUserData = () => {
    setLoading(true)
    fetch(BASE_URL, { crossdomain: true })
      .then(res => res.json())
      .then(user => {
        setUser(user);
        setLoading(false);
        setProjects([...user.projects]);
        setAbout({ name: user.basics.name, label: user.basics.label, headline: user.basics.headline, img: aboutData.img, 
          summary: user.basics.summary, yearsOfExperience: user.basics.yearsOfExperience, region: user.basics.region }); 
    });
  }

  useEffect(() => {
    getUserData();
    setContact({ ...contactData });
    setFooter({ ...footerData });
  }, []);

  if (loading) {
    return (
      <div>Loading...</div>
    )
  } else {
    return (
      <PortfolioProvider value={{ about, projects, contact, footer }}>
        <NavBar />
        <Hero />
        <About />
        <Projects />
        <Contact />
        <Footer />
      </PortfolioProvider>
    );
  }

  
}

export default App;
