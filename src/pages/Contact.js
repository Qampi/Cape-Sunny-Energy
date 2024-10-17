import React from 'react';

const Contact = () => {

  return (
    <>
    <section class="heading">
    <h5>Contact</h5>
</section>
    <section>
    <div class="container-contact">    
            <div class="box-1">
                <h3>Contact Us</h3>
<p>We're here to help you</p>
<div class="contact-info">
    <div class="contact-item1">
        <i class="fa-solid fa-envelope"></i>
       Email:Capesunnyenergy@gmail.com
    </div><br/>
    <div class="contact-item2">
        <i class="fas fa-phone"></i>
       Call:+27 82 451 0687
    </div><br/>
    <div class="contact-item3">
        <i class="fas fa-map-marker-alt"></i>
        Location:Cape Town,Western Cape,South Africa
    </div><br/>
    <div class="contact-item4">
        <i class="fab fa-instagram"></i>
        Instagram: @Cape Sunny Energy
    </div><br/>
    <div class="contact-item5">
        <i class="fab fa-facebook-f"></i>
      Facebook:Cape Sunny Energy
    </div>
</div>
</div>
            


            <div class="box-2"><h3>Let's Talk</h3>
            <p>Feel free to drop us a line below</p>
        
            
             <form class="contact" id="userForm">
                
               <label>Name:</label>
               <input type="text" name="name" id="name" required/><br/>
               <label>Last Name:</label>
               <input type="text" name="lastname" id="lastname" required/><br/>
               <label>Email:</label>
               <input type="email" name="email" id ="email" required/><br/>
               <label>Message:</label>
               <textarea type="textarea" id="message" name="message" placeholder="Enter your message:" required></textarea><br/>
               <button type="submit" class="input-box">Submit</button>

             </form>
             
           </div>
           
           </div>
           </section>
</>


  );
};

export default Contact;