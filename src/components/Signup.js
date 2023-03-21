import React, { useState } from "react";
import { NavLink ,useNavigate   } from "react-router-dom";

const Signup = () => {

  const navigate  = useNavigate();
  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
    work: "",
    password: "",
    cpassword: "",
  });
  let name, value;
  const handleInputChange = (e) => {
    console.log(e);
    name = e.target.name;
    value = e.target.value;
    setUser({ ...user, [name]: value });
  };
  const PostData = async (e) => {
    e.preventDefault();
    const { name, email, phone, work, password, cpassword } = user;
    const res = await fetch("/register",{
      method:"POST",
      headers:{"Content-type":"application/json"},
      body:JSON.stringify({
        name, email, phone, work, password, cpassword
      })
    })
    const data = await res.json();
    if(data.status === 422 || !data){
      window.alert("invalid data")
      console.log("invalid data")
    }else{
      window.alert("success")
      console.log("success")
      navigate("../login", { replace: true });
    }
    
  };

  return (
    <>
      <section className="signup">
        <div className="container mt-5">
          <div className="signup-content">
            <div className="signup-form">
              <h2>Sign Up</h2>
              <form className="register-form" id="register-form">
                <div className="form-group">
                  <label htmlFor="name"></label>
                  <input
                    type="text"
                    value={user.name}
                    onChange={handleInputChange}
                    name="name"
                    id="name"
                    placeholder="Your Name"
                    autoComplete="off"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email"></label>
                  <input
                    type="email"
                    value={user.email}
                    onChange={handleInputChange}
                    name="email"
                    id="email"
                    placeholder="Your email"
                    autoComplete="off"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="phone"></label>
                  <input
                    type="number"
                    value={user.phone}
                    onChange={handleInputChange}
                    name="phone"
                    id="phone"
                    placeholder="Your phone"
                    autoComplete="off"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="work"></label>
                  <input
                    type="text"
                    value={user.work}
                    onChange={handleInputChange}
                    name="work"
                    id="work"
                    placeholder="Your work"
                    autoComplete="off"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="password"></label>
                  <input
                    type="password"
                    value={user.password}
                    onChange={handleInputChange}
                    name="password"
                    id="password"
                    placeholder="Your password"
                    autoComplete="off"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="cpassword"></label>
                  <input
                    type="password"
                    value={user.cpassword}
                    onChange={handleInputChange}
                    name="cpassword"
                    id="cpassword"
                    placeholder="Your confirm password"
                    autoComplete="off"
                  />
                </div>
                <div className="form-group from-button">
                  <input
                    onClick={PostData}
                    type="submit"
                    name="signup"
                    id="signup"
                    className="form-submit"
                    value="Register"
                  />
                </div>
              </form>
            </div>
            <div className="signup-image">
              <figure>
                <img src="" alt="" />
              </figure>
              <NavLink to="/login">I am Already Register</NavLink>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Signup;
