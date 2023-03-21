import React from "react";
import { NavLink } from "react-router-dom";

const About = () => {
  return (
    <>
      <div className="container">
        <form method="">
          <div className="row">
            <div className="col-md-4">
              <img src="" alt="" />
            </div>
            <div className="col-md-6">
              <div className="profile-head">
                <h5>Pawan Mukati</h5>
                <h5>Web Developer</h5>
                <p className="profile-rating">
                  Raking : <span>1/10</span>{" "}
                </p>
                <ul className="nav nav-tabs">
                  <li className="nav-item">
                    <a
                      className="nav-link active"
                      aria-current="page"
                      href="#home"
                    >
                      Active
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#profile">
                      Link
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-2">
              <input
                type="submit"
                className="profile-edit-button"
                name="btnAddMore"
                value="Edit Profile"
              />
            </div>
          </div>
          <div className="row">
            <div className="col-md-4">
              <div className="profile-work">
                <p>Work</p>
                <NavLink href="#">Developer</NavLink>
                <NavLink href="#">Developer</NavLink>
                <NavLink href="#">Developer</NavLink>
                <NavLink href="#">Developer</NavLink>
                <NavLink href="#">Developer</NavLink>
              </div>
            </div>
            <div className="col-md-8 about-info">
              <div className="tab-content profile-tab" id="myTabContent">
                <div className="tab-pane active " id="home">
                  <div className="row">
                    <div className="col-md-6">
                      <label>User Id</label>
                    </div>
                    <div className="col-md-6">
                      <p>454564564454</p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <label>Name</label>
                    </div>
                    <div className="col-md-6">
                      <p>Pawan Mukati</p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <label>Email</label>
                    </div>
                    <div className="col-md-6">
                      <p>example@mail.com</p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <label>Phone</label>
                    </div>
                    <div className="col-md-6">
                      <p>+91 1111 235 6542 </p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <label>Profession</label>
                    </div>
                    <div className="col-md-6">
                      <p>Web developer</p>
                    </div>
                  </div>
                </div>
                <div className="tab-pane " id="profile">
                  <div className="row">
                    <div className="col-md-6">
                      <label>Experience</label>
                    </div>
                    <div className="col-md-6">
                      <p>Intermediate</p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <label>Hourly</label>
                    </div>
                    <div className="col-md-6">
                      <p>$10/hr</p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <label>Total Project</label>
                    </div>
                    <div className="col-md-6">
                      <p>230</p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <label>English Level</label>
                    </div>
                    <div className="col-md-6">
                      <p>kam chalauu</p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <label>Availability</label>
                    </div>
                    <div className="col-md-6">
                      <p>6 months</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default About;
