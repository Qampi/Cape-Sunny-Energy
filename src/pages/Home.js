import React from 'react';
import '../style.css';
import HomepagePhoto from '../assets/index/solar_panels.jpg';


const Home = () => {
  return (
    <section>
    <header class="header" >
   
        <div class="header-content">
            <p><b>Transforming Sunlight</b></p>
                <p><b>into</b></p>
                
                <p><b>Savings</b></p>
            <a href="about.html" class="btn">Get started</a>
        </div>
    </header>
    <div  class="mycontainer">
<div class="text-image">
    <h3>Unlock a Brighter tomorrow with<br/>
    Cape Sunny Energy, your trusted<br/>
    partner in solar energy.</h3>
    <p class="paragraph">
    We aim to empower communities,businesses,and individuals to adopt
    renewable energy solutions with that we can achieve a world where there is no pollution when creating source of power.<br/>Reducing high tariffs
    for electricity.<br/>Employing individuals with qualifications, reducing high unemployment.</p>
    
    <h4>Benefits of Solar Energy:</h4>
    <ul>
   <li>  Environmental benefits</li><br/>
     <li> Financial benefits (savings, incentives, etc.)</li><br/>
    <li>Energy independence and security</li><br/>
    </ul>
    </div>
    <img src={HomepagePhoto} alt="installed solar " class="right-image"/>
    </div>

</section>

  );
};

export default Home;

