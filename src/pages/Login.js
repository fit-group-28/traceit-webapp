import 'bulma/css/bulma.min.css';
import bgImage from "../assets/background.png";
import logo from "../assets/logo.png";
// import LoginForm from '../components/LoginForm';
import React, { useState } from 'react';

function App() {

  const styles = {
    ".background": { backgroundImage: `url(${bgImage})`, backgroundSize: "cover" },
    ".loginButton": {
      position: "absolute",
      zIndex: 1,
      backgroundColor: "#1C3879",
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
    ".nextButton": { backgroundColor: "#1C3879", },
    ".field": { borderRadius: "10px" }
  }

  return (
    <section class="hero is-fullheight" style={styles['.background']}>

      {/* <div class="hero-head" style={converted['.buttonMarigin']}>
        <button class="button is-primary is-rounded has-text-weight-bold px-5 py-5" style={converted['.loginButton']}>login</button>
        <button class="button is-link is-rounded has-text-weight-bold py-5" style={converted['.signupButton']}>signup</button>
      </div> */}

      <div class="hero-body" style={styles['.box']}>
        <div class="card" style={styles['.card']}>
          <div class="card-image">
            <figure class="image" style={styles['.mainLogo']} >
              <img src={logo} alt="TraceIt Logo" />
            </figure>
          </div>
          <div class="card-content">
            <div className="is-size-4 has-text-centered has-text-weight-bold pb-5" style={styles['.welcome']}>
              <p> Welcome Back </p>
            </div>
            <div class="content">

              {/* name field */}
              <div class="field" >
                <p class="control">
                  <input class="input" type="text" placeholder="Username" style={styles['.field']} />
                </p>
              </div>

              {/* password field */}
              <div class="field">
                <p class="control">
                  <input class="input" type="password" placeholder="Password" style={styles['.field']} />
                </p>
              </div>

              {/* Login button */}
              <div class="field has-text-centered p-5">
                <p class="control">
                  <button class="button is-primary is-rounded has-text-weight-bold" style={styles['.nextButton']}>
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