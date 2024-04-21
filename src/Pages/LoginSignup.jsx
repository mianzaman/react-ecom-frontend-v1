import React from "react";
import "./index.css";
const LoginSignup = () => {
  return (
    <>
      <div className="login-signup">
        <div className="login-signup-container">
          <h1>Sign Up</h1>
          <div className="login-signup-fields">
            <input type="text" placeholder="Username" />
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
          </div>
          <button>Continue</button>
          <p className="login-signup-login">
            Already have an account? <span>Login</span>
          </p>
          <div className="agree">
            <input type="checkbox" />
            <p>
              I agree to the <span>Terms</span> and <span>Privacy Policy</span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginSignup;
