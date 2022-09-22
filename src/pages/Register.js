import bgImage from "../assets/background.png";
import logoImage from "../assets/logo.png";
import "../scss/login.scss";

const styles = {
    ".background": { backgroundImage: `url(${bgImage})`, backgroundSize: "cover" },
    ".signupButton": {
        position: "absolute",
        zIndex: 1,
        top: "10px",
        right: "11px"
    },
    ".loginButton": {
        position: '"absolute"',
        paddingRight: "115px",
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
    ".welcome": { color: "#607eaa" },
    ".field": { borderRadius: "10px" }
}

function App() {

    return (
        <section className="hero is-fullheight" style={styles['.background']}>

            <div className="hero-head" style={styles['.buttonMarigin']}>
                <div className="login-signup-buttons">

                    <a href="/signup">
                        <button className="button is-primary is-rounded has-text-weight-bold px-5 py-5" style={styles['.signupButton']}>signup</button>
                    </a>

                    <a href="/login">
                        <button className="button is-link is-rounded has-text-weight-bold py-5" style={styles['.loginButton']}>login</button>
                    </a>

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
                            <p> Welcome </p>
                        </div>
                        <div className="content">

                            {/* email field */}
                            <div class="field">
                                <label class="label">Email</label>
                                <div class="control">
                                    <input class="input" type="email" placeholder="e.g. cedric@gmail.com" style={styles['.field']} />
                                </div>
                                {/* <p class="help is-success">This username is available</p> */}
                            </div>

                            {/* username field */}

                            <div class="field">
                                <label class="label">Username</label>
                                <div class="control">
                                    <input class="input" type="text" placeholder="e.g. cedliang" style={styles['.field']} />
                                </div>
                                {/* <p class="help is-success">This username is available</p> */}
                            </div>

                            {/* password field */}
                            <div className="field">
                                <label class="label">Password</label>
                                <p className="control">
                                    <input className="input" type="password" placeholder="Password" style={styles['.field']} />
                                </p>
                            </div>


                            {/* Signup button */}
                            <div className="field has-text-centered p-5">
                                <p className="control">
                                    <button className="button is-primary is-rounded has-text-weight-bold" >
                                        Sign Up
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