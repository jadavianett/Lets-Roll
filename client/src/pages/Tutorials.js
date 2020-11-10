import { Container } from "@material-ui/core";
import "./Tutorials.css";

function Tutorials() {
  return (
    <Container>
      <br></br>
      <br></br>
      <h1>Tutorials</h1>
      <br></br>
      <h2>
        Here are some handpicked tutorials from the team at Let's Roll that are
        guaranteed to help you go pro!{" "}
      </h2>
      <br></br>
      <div id="video-div">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/sLP7XbGZ1-I"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
          title="HOW TO DANCE ON ROLLER SKATES FOR BEGINNERS! - Ep. 16 Planet Roller Skate"
        ></iframe>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/KBMcCGsVbls"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
          title="HOW TO SPIN IN ROLLER SKATES WITH CANDICE HEIDEN! - Ep. 7 Planet Roller Skate"
        ></iframe>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/6aAUZk1B7w0"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
          title="ROLLER SKATE BACKWARDS WITH @GYPSETCITY! - Ep. 9 Planet Roller Skate"
        ></iframe>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/OcOe-R5Upew"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
          title="HOW TO FALL SAFELY ON SKATES | Planet Roller Skate"
        ></iframe>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/FhDm056yGqU"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
          title="How to Rollerskate for Beginners"
        ></iframe>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/kf16cuQ37uo"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
          title="How to Turn on Roller Skates - Transitions"
        ></iframe>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/9A-aMfCzd-0"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
          title="Roller Skating Footwork - Turns, Scissors, Toe Stops and More"
        ></iframe>
      </div>
    </Container>
  );
}

export default Tutorials;
