import React, { useState, useEffect } from 'react';
import './App.css';
import SkylineLogo from "./assets/skyline-logo.png"
import Training from "./assets/training.jpeg"
import Content from "./assets/contentdev.jpeg"

function App() {
  const [expandedPane, setExpandedPane] = useState(null);
  const [logoClicked, setLogoClicked] = useState(false);
  const [delayAnimation, setDelayAnimation] = useState(false);

  useEffect(()=>{
    const timer = setTimeout(()=>{
      setDelayAnimation(true)
    }, 2000);
  },[])

  const handleLeftClick = () => {
    setExpandedPane('left');
  };

  const handleRightClick = () => {
    setExpandedPane('right');
  };

  const handleLogoClick = () =>{
    setExpandedPane(null);
  }

  return (
    <div className="container">
      <div className={`pane left-pane ${expandedPane === 'left' && delayAnimation ? 'expanded' : ''}`}>
        <h1 onClick={handleLeftClick}>Training</h1>
        {expandedPane === null ? <div className="pane-content">
          <h3>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem explicabo, exercitationem velit ad rerum aliquam ipsum saepe veritatis sequi nam consectetur officia consequuntur blanditiis consequatur amet facere vitae animi accusantium.</h3>
          <img src={Training} className="image-generic" />
          </div> : null}
        {expandedPane === "left" ? <div>
          <ul className="pane-nav">
            <a href="#">Featured Classes</a>
            <a href="#">GTR Schedule</a>
            <a href="#">Technologies</a>
            <a href="#">Request a Class</a>
          </ul>
        </div> : null}
        
      </div>
      <div className={`pane right-pane ${expandedPane === 'right' && delayAnimation ? 'expanded' : ''}`}>
        <h1 onClick={handleRightClick}>Content Development</h1>
        {expandedPane === null ? <div className="pane-content">
          <h3>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem explicabo, exercitationem velit ad rerum aliquam ipsum saepe veritatis sequi nam consectetur officia consequuntur blanditiis consequatur amet facere vitae animi accusantium.</h3>
          <img src={Content} className="image-generic" />
          </div> : null}
        {expandedPane === "right" ? <div>
          <ul>
            <a href="#">Design Capabilities</a>
            <a href="#">Samples</a>

          </ul>
        </div> : null}
      </div>
      <div className={expandedPane === 'right' ? ('logo-moved-right') : expandedPane === 'left' ? ('logo-moved-left') : 'logo'}>
        <img src={SkylineLogo} onClick={handleLogoClick}  />
      </div>
    </div>
  );
}

export default App;
