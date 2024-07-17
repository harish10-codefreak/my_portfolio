import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view" style={{ backgroundColor: "#f9f9f9", borderRadius: "15px", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)" }}>
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify", color: "#F0FFFF" }}>
            Hi Everyone, I am <span className="purple">HARISH KUKKALA</span> from 
            <span className="purple"> Visakhapatnam, Andhra Pradesh, India.</span>
            <br />
            I am currently doing my Internship at{" "}
            <a href="https://kalamdreamlabs.com/" target="_blank" rel="noopener noreferrer" style={{ color: "#6a0dad", textDecoration: "none" }}>
              Kalam Dream Labs
            </a>.
            As a Full Stack Developer.
            <br />
            "I recently graduated with a B.Tech in Computer Science Engineering from Chaitanya Engineering College in April 2024, achieving an overall CGPA of 7.5." 
            <br />
            <br />
            I'm also a Volunteer on weekends and one of the member at {""} 
            <a href="https://new.vizagvolunteers.org/" target="_blank" rel="noopener noreferrer" style={{ color: "#6a0dad", textDecoration: "none" }}>
              Vizag vizagvolunteers
              </a>
            I have contributed my service in many activities.
          </p>
          <p style={{ marginTop: "20px", fontWeight: "bold", color: "#555" }}>
            My Other Activities
          </p>
          <ul style={{ listStyleType: "none", paddingLeft: "0" }}>
            <li className="about-activity" style={{ marginBottom: "10px" }}>
              <ImPointRight style={{ marginRight: "5px", color: "#6a0dad" }} /> Sharing Knowledge
            </li>
            <li className="about-activity" style={{ marginBottom: "10px" }}>
              <ImPointRight style={{ marginRight: "5px", color: "#6a0dad" }} /> Learning New Technologies
            </li>
            <li className="about-activity">
              <ImPointRight style={{ marginRight: "5px", color: "#6a0dad" }} /> Travelling
            </li>
            <li className="about-activity">
              <ImPointRight style={{ marginRight: "5px", color: "#6a0dad" }} /> Watching Animes
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)", marginTop: "20px" }}>
            "It doesn't matter who you are, it just asks what you are..!"
          </p>
          <footer className="blockquote-footer" style={{ marginTop: "10px" }}>haarisshh</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
