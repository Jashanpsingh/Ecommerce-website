import React from "react"
import "./Signin.css"
const Signin = () => {
  return (
    <React.Fragment>
      ;<div className="box-form">
        <div className="left">
          <div className="overlay">
            <h1>LOGIN</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur et
              est sed felis aliquet sollicitudin
            </p>
            <span>
              <p>login with social media</p>
              <a href="#">
                <i class="fa-brands fa-facebook"></i>Login With Facebook
              </a>
              <a href="#">
                <i class="fa-brands fa-twitter"></i> Login with Twitter
              </a>
            </span>
          </div>
        </div>
        <div className="right">
          <div className="inputs">
            <input type="text" placeholder="Username" />
            <br />
            <input type="password" placeholder="Password" />
          </div>
          <br />
          <br />
          <div className="remember-me--forget-password">
            {/* Angular */}
            <label>
              <input type="checkbox" name="item" defaultChecked />
              <span className="text-checkbox">Remember me</span>
            </label>
            <p>forget password?</p>
          </div>
          <br />
          <button>Login</button>
          <br />
          <br />
          <br />
          <p>
            Don't have an account? <a href="#">Creat Your Account</a> it takes less
            than a minute
          </p>
        </div>
      </div>
    </React.Fragment>
  )
}

export default Signin
