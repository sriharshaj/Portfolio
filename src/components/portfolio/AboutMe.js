import React, { Component } from 'react';

export default class AboutMe extends Component {
  render() {
    return (
      <div style={styles.container}>
        <div>
          I'm Computer Science graduate student at UMass Dartmouth.
          I did bachelor’s in Computer Science at National Institute of Technology, Warangal, India.
          I worked as Software Developer for three years in India.
        </div>
        <br />
        <div>
          During my career I worked on many technologies.
          I majorly worked on developing web applications using Ruby on Rails,
           Python, JavaScript, SQL and React.
        </div>
        <br />
        <div>
          I am interested in machine learning fields Reinforcement Learning and Generative Adversarial Networks.
        </div>
      </div>
    );
  }
}

const styles = {
  container: {
    padding: "50px",
    height: "-webkit-fill-available",
    fontWidth: "400",
  },
}