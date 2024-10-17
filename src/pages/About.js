import React from 'react';
import '../style.css'; // Assuming you have CSS in the style.css file

// Importing images from the assets/About folder
import aboutImage1 from '../assets/About/image1.jpg';
import visionImage from '../assets/About/image 2.jpg';
import missionImage from '../assets/About/mission1.jpg';
import approachImage from '../assets/About/Capture.JPG';
import teamThina from '../assets/About/thina.jpg';
import teamSisipho from '../assets/About/sisipho.jpg';
import teamSisanda from '../assets/About/sisanda.jpg';
import teamSine from '../assets/About/sine.jpg';
import teamAsiphe from '../assets/About/asiphe.jpg';

const About = () => {

  const toggleContent = (id) => {
    const element = document.getElementById(id);
    if (element.style.display === "none") {
      element.style.display = "block";
    } else {
      element.style.display = "none";
    }
  };

  return (
 <>
    <section className ="heading">
    <h5>About us</h5>
 </section>
    <div className="containerAbout1">

        
    <div className="text"> <h1>Welcome to Cape Sunny Energy (CSE) – Your Partner in Renewable Energy Solutions</h1>
        <p>
            Located in the heart of Cape Town, Western Cape, South Africa, Cape Sunny Energy (CSE) is dedicated to leading the 
            charge toward a sustainable future. Our mission is to empower small and medium enterprises (SMEs), communities,
            and individuals by providing top-tier solar infrastructure <br/>installations, maintenance, and repair services.<br/><br/>

            At CSE, we believe in a world where energy is abundant, affordable, and clean. By embracing solar energy, we can
            reduce electricity tariffs, create employment opportunities,and foster a healthier environment for future generations.  
        </p>
    </div>

    <img src={aboutImage1} alt="about image"/>  

    </div>
  

      <div className="boxAbout1">
        {/* Vision Section */}
        <div className="box box1">
          <h3>Our Vision</h3>
          <img src={visionImage} alt="Our Vision" />
          <p>We envision a future where every home, business, and community harnesses the power of renewable energy.</p>
          <p id="vision" style={{ display: 'none' }}>
            By promoting solar solutions, we aim to minimize pollution, reduce energy costs, and make a positive impact on the
            environment. At CSE, we are committed to driving change by employing skilled individuals, offering affordable energy
            solutions, and fostering sustainable practices.
          </p>
          <a href="javascript:void(0)" id="vision-link" onClick={() => toggleContent('vision')}>See more</a>
        </div>

        {/* Mission Section */}
        <div className="box box2">
          <h3>Our Mission</h3>
          <img src={missionImage} alt="Our Mission" />
          <p>
            CSE is dedicated to empowering communities and SMEs to embrace sustainable energy by delivering professional solar
            installations and services.
          </p>
          <p id="mission" style={{ display: 'none' }}>
            We are passionate about creating job opportunities, providing high-quality training for local installers, and making
            a significant contribution to the fight against climate change.
          </p><br />
          <a href="javascript:void(0)" id="mission-link" onClick={() => toggleContent('mission')}>See more</a>
        </div>

        {/* Approach Section */}
        <div className="box box3">
          <h3>Our Approach</h3>
          <img src={approachImage} alt="Our Approach" />
          <p>
            We take pride in our community-centric approach. By engaging in workshops and educational programs.
          </p>
          <p id="approach" style={{ display: 'none' }}>
            We forge deeper connections with the local population. Our focus on affordability ensures that solar energy is
            accessible to everyone, while our emphasis on eco-friendly practices positions us as leaders in promoting sustainable
            energy.
          </p>
          <a href="javascript:void(0)" id="approach-link" onClick={() => toggleContent('approach')}>See more</a>
        </div>
      </div>

      <h2 className="h2">Meet the Team</h2>
      <div className="team-row">
        <figure>
          <img src={teamThina} alt="Thina Nontwabaza - CEO" />
          <figcaption>Thina Nontwabaza<br />CEO</figcaption>
        </figure>

        <figure>
          <img src={teamSisipho} alt="Sisipho Kanana - CFO" />
          <figcaption>Sisipho Kanana<br />CFO</figcaption>
        </figure>

        <figure>
          <img src={teamSisanda} alt="Sisanda Mavuso - COO" />
          <figcaption>Sisanda Mavuso<br />COO</figcaption>
        </figure>
      </div>

      <div className="team-row centered">
        <figure>
          <img src={teamSine} alt="Sinentlahla Pindani - QA Manager" />
          <figcaption>Sinentlahla Pindani<br />QA Manager</figcaption>
        </figure><br />
        <figure>
          <img src={teamAsiphe} alt="Asiphe Qampi - Operating Manager" />
          <figcaption>Asiphe Qampi<br />Operating Manager</figcaption>
        </figure>
      </div>


    </>
  );
};

export default About;
