import "./Pages.css";

function Tutorials() {
  return (
    <>
      <div className="body-wrapper">
        <div id="tutorials-wrapper">
          <h1>Tutorials</h1>
          <br />
          <br />

          <p>
            Here are some tutorials recommended by the Let's Roll team to help
            you sharpen your quad skating skills!
          </p>
          <br />
          <br />
          <div id="videos-div">
            <iframe
              // width="560"
              // height="315"
              src="https://www.youtube.com/embed/sLP7XbGZ1-I"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
              title="HOW TO DANCE ON ROLLER SKATES FOR BEGINNERS! - Ep. 16 Planet Roller Skate"
            ></iframe>
            <iframe
              // width="560"
              // height="315"
              src="https://www.youtube.com/embed/KBMcCGsVbls"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
              title="HOW TO SPIN IN ROLLER SKATES WITH CANDICE HEIDEN! - Ep. 7 Planet Roller Skate"
            ></iframe>
            <iframe
              // width="560"
              // height="315"
              src="https://www.youtube.com/embed/6aAUZk1B7w0"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
              title="ROLLER SKATE BACKWARDS WITH @GYPSETCITY! - Ep. 9 Planet Roller Skate"
            ></iframe>
            <iframe
              // width="560"
              // height="315"
              src="https://www.youtube.com/embed/OcOe-R5Upew"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
              title="HOW TO FALL SAFELY ON SKATES | Planet Roller Skate"
            ></iframe>
            <iframe
              // width="560"
              // height="315"
              src="https://www.youtube.com/embed/FhDm056yGqU"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
              title="How to Rollerskate for Beginners"
            ></iframe>
            <iframe
              // width="560"
              // height="315"
              src="https://www.youtube.com/embed/kf16cuQ37uo"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
              title="How to Turn on Roller Skates - Transitions"
            ></iframe>
            <iframe
              // width="560"
              // height="315"
              src="https://www.youtube.com/embed/9A-aMfCzd-0"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
              title="Roller Skating Footwork - Turns, Scissors, Toe Stops and More"
            ></iframe>
          </div>
        </div>
      </div>
    </>
  );
}

export default Tutorials;
