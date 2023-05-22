import React from "react";
import "../styles/AdditionalAbout.css";

const AdditionalAbout = () => {
  return (
    <section className="additional-about">
      <div className="wrapper">
        <div className="afk">
          <h1 className="section-title">Away from the keyboard</h1>
          <p>
            When I step away from the keyboard, you'll find me immersed in a
            variety of activities that fuel my creativity and keep me balanced.
            Two passions that light up my day are playing table tennis and
            creating indie music with my guitar.
          </p>
          <div className="image-container">
            <div>
              <img
                src={require("../assets/table-tennis.jpg")}
                alt="table-tennis"
              />
            </div>
            <div>
              <img
                src={require("../assets/me-closeup.jpg")}
                alt="table-tennis"
              />
            </div>
            <div>
              <img src={require("../assets/fam.JPG")} alt="family" />
            </div>
            <div>
              <img src={require("../assets/tagbilaran.jpg")} alt="me" />
            </div>
          </div>
          <p>
            Table tennis is more than just a sport to me; it's a thrilling and
            dynamic outlet that keeps me physically active and mentally sharp.
            Whether I'm competing in friendly matches or honing my skills with
            practice sessions, the fast-paced nature of table tennis offers a
            refreshing break from the digital world.
          </p>
          <p>
            In addition to my love for table tennis, I find solace and
            inspiration in the world of indie music. With my guitar in hand, I
            lose myself in the soulful melodies, expressive lyrics, and unique
            sounds that define the indie genre.
          </p>
          <p>
            Oh, wait! One more thing. There's absolutely nothing that can
            compare to the sheer joy of hitting the beach! Guess what? My latest
            getaway was an absolute blast in none other than the breathtaking
            paradise of Cebu. I'm already daydreaming about the moment I get to
            go back there again someday!
          </p>
        </div>
      </div>
    </section>
  );
};

export default AdditionalAbout;
