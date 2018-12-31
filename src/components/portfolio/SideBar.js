import React, { Component } from 'react';

import { Row } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

import { homePath, aboutMePath, appsPath } from '../../routes';

const linkedInUrl = "https://www.linkedin.com/in/sri-harsha-jujjavarapu-6b104a77/";
const githubUrl = "https://github.com/sriharshaj";
const email = "jujjavarapu94@gmail.com";


export default class SideBar extends Component {
  render() {
    return (
      <div style={styles.container}>
        <Row style={styles.nameRow}>
          <Link to={homePath} style={styles.name}> Sri Harsha J</Link>
        </Row>
        <Row style={styles.aboutMeRow}>
          <Link to={aboutMePath} style={styles.aboutMe}>
            About me
                </Link>
        </Row>
        <Row style={styles.aboutMeRow}>
          <Link to={appsPath} style={styles.aboutMe}>
            Apps
                </Link>
        </Row>
        <Row style={styles.socialIconsRow}>
          <a href={linkedInUrl}
            target="_blank" style={styles.socialIcons}>
            <FontAwesomeIcon icon={["fab", "linkedin"]} color="#fff" />
          </a>
          <a href={githubUrl} target="_blank" style={styles.socialIcons}>
            <FontAwesomeIcon icon={["fab", "github-square"]} color="#fff" />
          </a>
          <a href={`mailto:${email}`} target="_top" style={styles.socialIcons}>
            <FontAwesomeIcon icon="envelope" color="#fff" />
          </a>
        </Row>
      </div>
    );
  }
}

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    height: "-webkit-fill-available",
    backgroundColor: "#1790a0",
    alignItems: "center",
  },
  nameRow: {
    marginTop: "50px",
    marginBottom: "50px",
  },
  name: {
    color: "#fff",
    fontSize: "40px",
    textDecoration: "none",
  },
  aboutMeRow: {
    marginBottom: "10px",
  },
  aboutMe: {
    color: "#fff",
    fontSize: "20px",
    display: "block",
    fontWeight: "400",
  },
  socialIconsRow: {
    marginTop: "50px",
  },
  socialIcons: {
    marginRight: "25px",
    fontSize: "20px",
    display: "inline-block",
  },
}