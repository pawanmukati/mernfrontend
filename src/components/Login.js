import React ,{ useState} from "react";
import { NavLink ,useNavigate   } from "react-router-dom";

const Login = () => {
  const navigate  = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const loginUser = async (e) => {
    e.preventDefault();

    const res = await fetch("/signin",{
      method:"POST",
      headers:{"Content-type":"application/json"},
      body:JSON.stringify({
        email:email, password:password
      })
    })
    const data = await res.json();
    if(data.status === 400 || !data){
      window.alert("invalid data")
      console.log("invalid data")
    }else{
      window.alert("success")
      console.log("success")
      navigate("../", { replace: true });
    }
    
  };

  return (
    <>
      <section className="signin">
        <div className="container mt-5">
          <div className="signin-content">
            <div className="signin-image">
              <figure>
                <img src="" alt="" />
              </figure>
              <NavLink to="/signup">Create New Account</NavLink>
            </div>
          </div>
          <div className="signin-form">
            <h2>Sign In</h2>
            <form className="register-form" id="register-form">
             
              <div className="form-group">
                <label htmlFor="email"></label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Your email"
                  value={email}
                  onChange={(e)=>setEmail(e.target.value)}
                />
              </div>
              
              
              <div className="form-group">
                <label htmlFor="password"></label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Your password"
                  
                  value={password}
                  onChange={(e)=>setPassword(e.target.value)}
                />
              </div>
              
              <div className="form-group from-button">
                <input
                  type="submit"
                  name="signin"
                  id="signin"
                  className="form-submit"
                  value="Log In"
                  onClick={loginUser}
                />
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
