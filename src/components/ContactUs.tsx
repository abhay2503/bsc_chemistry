import Image from 'next/image'
import React from 'react'

const ContactUs = () => {
  return (
    <>
    
    <section className="section mt-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-10 mx-auto text-center head">
            <h2 className="section-title ab shadow">Contact Us</h2>
            
            
          </div>
        </div>
      </div>
    </section>

  
    <div className="contact-form mt-5" id="contact">
     
      <div className="container rounded-3">
          <div className="main rounded-3">
              <div className="content">
                  <h2>Get In Touch With Us</h2>
                  <form action="">
                      <input type="text" className="mt-3" name="name" placeholder="Enter Your Name"/>
                    
                      <input type="email" className="mt-3" name="name" placeholder="Enter Your Email"/>
                      <textarea name="message" placeholder="Your Message" className="mt-3"></textarea>                   
           <button className="bttn mt-5">Send <i className="fas fa-paper-plane"></i></button>
                  </form>
              </div>
              <div className="form-img">
                  <Image src="/bg2.png" alt=""/>
              </div>
          </div>
      </div>

      <div className="footer-bottom text-center ">
        <p style={{fontSize:"18px"}}>
            Copyright © 2024 crackingbscchemistry.in
        </p>
      </div>
  </div> 
  
    
    </>
  )
}

export default ContactUs