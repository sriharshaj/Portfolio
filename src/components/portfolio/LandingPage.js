import React, { Component } from 'react';

const resumeLink = "https://drive.google.com/file/d/1Wxr2xogZlizWAhlwf0D1H6iQrIXLCfca/view";
export default class LandingPage extends Component {
  render(){
    return (
      <div style={styles.container}>
        <a href={resumeLink} target="_blank" style={{color: "black"}}>
          Resume
        </a>
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