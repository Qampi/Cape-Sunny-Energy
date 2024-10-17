import React from 'react';

const Dashboard = () => {
  return (
    <>
    <section class="heading">
    <h5>Account information</h5>
</section>

<div class="dash-container">


    <div class="errors" id="error-messages">
    
    </div>

    
    <form id="account-form">
        <div class="form-group">
            <label for="name">Name<span>*</span></label>
            <input type="text" id="name" name="name" required/>
        </div>

        <div class="form-group">
            <label for="phone-number">Phone Number<span>*</span></label>
            <input type="tel" id="phone-number" name="phone-number"required/>
        </div>

        <div class="form-group">
            <label for="surname">Surname<span>*</span></label>
            <input type="text" id="surname" name="surname"required/>
        </div> 

        <div class="form-group">
            <label for="vat-number">VAT Number<span>*</span></label>
            <input type="text" id="vat-number" name="vat-number"required/>
        </div>
        

        <div class="form-group">
            <label for="email">Email<span>*</span></label>
            <input type="email" id="email" name="email" required/>
    
         
        </div>
        <div class="form-group-btn">
         <svg xmlns="http://www.w3.org/2000/svg" height="34" width="31" viewBox="0 0 448 512"> <path d="M246.6 9.4c-12.5-12.5-32.8-12.5-45.3 0l-128 128c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 109.3 192 320c0 17.7 14.3 32 32 32s32-14.3 32-32l0-210.7 73.4 73.4c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-128-128zM64 352c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 64c0 53 43 96 96 96l256 0c53 0 96-43 96-96l0-64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 64c0 17.7-14.3 32-32 32L96 448c-17.7 0-32-14.3-32-32l0-64z"/></svg>
             <button type="button" >Attach New Documents</button>
         
        </div>


             
        <div class="form-group">
            <label for="address">Address<span>*</span></label>
            <textarea id="address" name="address" required></textarea><br/>
            <button type="submit">Update Details</button>
            <button style="background-color: #ff0000;  ;" type="button" >Delete Account</button><br/>
             
        </div>
        <div class="form-group">
        
            <h5>Uploaded Documents</h5>
            <ol class="uploaded-documents">
                
            </ol>
        </div>

    </form> 
</div>     
</>   
  );
};

export default Dashboard;