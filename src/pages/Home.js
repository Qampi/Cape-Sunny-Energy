import React, { useState, useEffect } from 'react';
import '../style.css';
import HomepagePhoto from '../assets/index/solar_panels.jpg';
import image1 from '../assets/gallery/pc1.jpeg';
import image2 from '../assets/gallery/pc2.jpg';
import image3 from '../assets/gallery/pc3.jpg';
import image4 from '../assets/gallery/pc4.jpeg';
import image5 from '../assets/gallery/pc5.jpg';
import image6 from '../assets/gallery/pc6.jpg';

const Home = () => {
  const images = [image1, image2, image3, image4, image5, image6];
  const [slideIndex, setSlideIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSlideIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length]);

  const plusSlides = (n) => {
    setSlideIndex((prevIndex) =>
      (prevIndex + n + images.length) % images.length
    );
  };

  return (
    <>
      <section>
        <header className="header">
          <div className="header-content">
            <p><b>Transforming Sunlight</b></p>
            <p><b>into</b></p>
            <p><b>Savings</b></p>
            <a href="about.html" className="btn">Get started</a>
          </div>
        </header>

        <div className="mycontainer">
          <div className="text-image">
            <h3>
              Unlock a Brighter tomorrow with<br />
              Cape Sunny Energy, your trusted<br />partner in solar energy.
            </h3>
            <p className="paragraph">
              We aim to empower communities, businesses, and individuals to adopt
              renewable energy solutions, creating a pollution-free world.
              <br />Reducing high tariffs for electricity.
              <br />Employing individuals with qualifications, reducing high unemployment.
            </p>
            <h4>Benefits of Solar Energy:</h4>
            <ul>
              <li>Environmental benefits</li><br />
              <li>Financial benefits (savings, incentives, etc.)</li><br />
              <li>Energy independence and security</li><br />
            </ul>
          </div>
          <img src={HomepagePhoto} alt="Installed solar" className="right-image" />
        </div>
      </section>

      <section className="gallery" id="gallery">
        <div className="main-text">
          <h2>Gallery</h2>
        </div>

        <div className="slideshow-container">
          {images.map((image, index) => (
            <div
              key={index}
              className={`mySlides-fade ${index === slideIndex ? 'active' : ''}`}
              style={{
                display: slideIndex === index ? 'block' : 'none',
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
              }}
            >
              <img src={image} style={{ height: '600px', width: '100%' }} alt={`Slide ${index + 1}`} />
            </div>
          ))}

          <a className="prev" onClick={() => plusSlides(-1)}>&#10094;</a>
          <a className="next" onClick={() => plusSlides(1)}>&#10095;</a>
        </div>
      </section>
    </>
  );
};

export default Home;
