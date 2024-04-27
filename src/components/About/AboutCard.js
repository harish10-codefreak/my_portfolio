import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple"> HARISH KUKKALA </span>
            from <span className="purple"> Visakhapatnam, Andhra Pradesh, India. </span>
            <br />
            I am currently doing my Internship At Kalam Dream Labs 
            <br />
            I have completed my B.Tech in Chaitanya Engineering College 
            Stream -Computer Science Engineering 
            <br />
            <br />
           Im Also A social Server In my Weekends, and a memeber In Vizag Volunteers
           I did my Service in my Activities. 
          </p>
          <p>
            My Other Activities
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Watching Animes
            </li>
            <li className="about-activity">
              <ImPointRight /> Learning New Technologies
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "It Doesn't Matter who you are , it just Asks What you are..! "{" "}
          </p>
          <footer className="blockquote-footer">haarisshh</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
