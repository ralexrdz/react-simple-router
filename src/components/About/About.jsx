import React from 'react';

import './About.css'

const About = (props) => {
    console.log(props)
    return (
      <div className="About">
        <h1>About</h1>
        <p>{props.hola}</p>
        <p>{props.adios}</p>
        <p>{props.asd}</p>
      </div>
    );
}

export default About;
