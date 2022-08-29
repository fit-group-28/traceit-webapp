import bgImage from "../assets/background.png";
import logoImage from "../assets/logo.png";
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import "../scss/login.scss";

const admin = {
  username: "admin",
  password: "admin"
}

const styles = {
  ".background": { backgroundImage: `url(${bgImage})`, backgroundSize: "cover" },
  ".loginButton": {
    position: "absolute",
    zIndex: 1,
    top: "10px",
    right: "100px"
  },
  ".signupButton": {
    position: '"absolute"',
    paddingLeft: "106px",
    backgroundColor: "#EAE3D2",
    color: "#607EAA",
    top: "10px",
    right: "10px"
  },
  ".buttonMarigin": { position: "absolute", top: "30px", right: "50px" },
  ".box": { margin: "auto" },
  ".card": {
    backgroundColor: "#EAE3D2",
    width: "400px",
    boxShadow: "0px 109px 337px rgba(0, 0, 0, 0.0815322), 0px 45.5376px 140.791px rgba(0, 0, 0, 0.117129), 0px 24.3466px 75.2734px rgba(0, 0, 0, 0.145), 0px 13.6485px 42.1976px rgba(0, 0, 0, 0.172871), 0px 7.24861px 22.4108px rgba(0, 0, 0, 0.208468), 0px 3.01631px 9.32565px rgba(0, 0, 0, 0.29)",
    borderRadius: "10px"
  },
  ".mainLogo": { width: "200px", margin: "40px auto 0px" },
  ".welcome": { color: "#F9F5EB" },
  ".field": { borderRadius: "10px" }
}

function App() {
  const [username, setUsername] = useState()
  const [password, setPassword] = useState()
  const navigate = useNavigate()

  const validator = () => {
    return admin['username'] === username && admin['password'] === password
  }

  const loginSubmit = () => {
    if (validator()) {
      navigate('/dashboard');
    }
  }


  return (
    <section className="hero is-fullheight" style={styles['.background']}>

      <div className="hero-head" style={styles['.buttonMarigin']}>
        <div className="login-signup-buttons">
          <button className="button is-primary is-rounded has-text-weight-bold px-5 py-5" style={styles['.loginButton']}>login</button>
          <button className="button is-link is-rounded has-text-weight-bold py-5" style={styles['.signupButton']}>signup</button>
        </div>
      </div>

      <div className="hero-body" style={styles['.box']}>
        <div className="card" style={styles['.card']}>
          <div className="card-image">
            <figure className="image" style={styles['.mainLogo']} >
              <img src={logoImage} alt="TraceIt Logo" />
            </figure>
          </div>
          <div className="card-content">
            <div className="is-size-4 has-text-centered has-text-weight-bold pb-5" style={styles['.welcome']}>
              <p> Welcome Back </p>
            </div>
            <div className="content">

              {/* name field */}
              <div className="field" >
                <p className="control">
                  <input onChange={e => setUsername(e.target.value)} className="input" type="text" placeholder="Username" style={styles['.field']} />
                </p>
              </div>

              {/* password field */}
              <div className="field">
                <p className="control">
                  <input onChange={e => setPassword(e.target.value)} className="input" type="password" placeholder="Password" style={styles['.field']} />
                </p>
              </div>

              {/* Login button */}
              <div className="field has-text-centered p-5">
                <p className="control">
                  <button onClick={loginSubmit} className="button is-primary is-rounded has-text-weight-bold" >
                    Login
                  </button>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

    </section >

  );
}

export default App;