import React , {useState} from 'react'
import './contact.css'
import  emailjs from 'emailjs-com'



function Contact() {

    const initialValue = {name:"" , email:"" , password:""}   
    const [formValue , setFormValue] = useState(initialValue);
    const [formErrors , setFormerrors] = useState({});
    const [isSubmit , setIsSubmit] = useState(false)

    const handleChange = (e)=>{
         const {name , value} = e.target
         setFormValue({...formValue , [name]:value})
    }
    
    const handleSubmit=(e) =>{
      e.preventDefault();
      setFormerrors(validate(formValue))
      setIsSubmit(true)
    }


    const validate = (values) =>{
        const errors ={}
        const regex =  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

        if(!value.name){
            error.name="enter a valid name"
        }
        if(!value.email){
            error.email="enter a valid mail id"
        }
        if(!value.password){
            error.password="enter a valid pass"
        }
    }



  return (
    <><div className="contact-wrapper">
    <div class="contact-container">
        {/* <pre>{JSON.stringify(formValue,undefined,2)}</pre> */}
  <h1>Contact Us</h1>
  <form class="contact-form" onSubmit={handleSubmit} >
    <div class="form-group">
      <label for="name">Name</label>
      <input type="text" id="name" name="name" value={formValue.name} onChange={handleChange} required />
    </div>
    <div class="form-group">
      <label for="email">Email</label>
      <input type="email" id="email" name="email" value={formValue.email}  onChange={handleChange} required />
    </div>
    {/* <div class="form-group">
      <label for="num">Contact num.</label>
      <input type="number" id="num" name="num" required />
    </div> */}
    {/* <div class="form-group">
      <label for="pass">Password</label>
      <input type="password" id="pass" name="pass" value={formValue.password}  onChange={handleChange} required />
    </div> */}
    <div class="form-group">
      <label for="message">Type your query</label>
      <textarea id="message" name="message" required></textarea>
    </div>
    <button type="submit" class="contact-btn">Contact Us</button>
  </form>
 
</div>
<div className="map">
<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3410.7265641312943!2d75.70037989678957!3d31.25599200000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391a5f5e9c489cf3%3A0x4049a5409d53c300!2sLovely%20Professional%20University!5e0!3m2!1sen!2sin!4v1688712520194!5m2!1sen!2sin" style={{border:0}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe></div>
</div>
    </>
  )
}

export default Contact
