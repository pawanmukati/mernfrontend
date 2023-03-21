import React from "react";

const Contact = () => {
  return (
    <>
      <div className="contact_info mt-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-10 offset-lg-1 d-flex align-item-center  justify-content-between">
              <div className="contact_info_items">
                <div className="contact_info_content">
                  <div className="contact_title_number">Phone</div>
                  <div className="contact-info-text">+91 1111 258 3653</div>
                </div>
              </div>
              <div className="contact_info_items">
                <div className="contact_info_content">
                  <div className="contact_title_number">Email</div>
                  <div className="contact-info-text">example@mail.com</div>
                </div>
              </div>
              <div className="contact_info_items">
                <div className="contact_info_content">
                  <div className="contact_title_number">Address</div>
                  <div className="contact-info-text">Indore,MP,India</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="contact_form">
        <div className="container">
          <div className="row">
            <h2>Get In Touch</h2>
            <form id="contact_form">
                  <input type="text" id="contact_form_name" className="contact_form_name" placeholder="Name" required="true"/>
                  <input type="text" id="contact_form_email" className="contact_form_email" placeholder="Email" required="true"/>
                  <input type="text" id="contact_form_phone" className="contact_form_phone" placeholder="Phone" required="true"/>
                  <textarea name="contact_form_message" id="contact_form_message" cols="30" rows="10"></textarea>
                  <button type="submit" className="button contact_form_button">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
