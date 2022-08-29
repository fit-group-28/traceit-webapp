import { Link } from "react-router-dom";
import logoImage from "../assets/logo.png";

function Landing() {
    const styles = {
        ".logo": { height: "70px" },
        ".background": { backgroundColor: "#F9F5EB" }
    }

    return (
        <body class="full-height" style={styles['.background']}>
            <nav class="navbar">
                <div class="container">
                    <div id="navMenu" class="navbar-menu">
                        <div class="navbar-start">
                            <a href="/login">
                                <img class="py-2 mr-6" src={logoImage} style={styles[".logo"]}></img>
                            </a>
                            <a class="navbar-item" href="/login">
                                Login
                            </a>
                            <a class="navbar-item" href="/dashboard">
                                Dashboard
                            </a>
                            <a class="navbar-item" href="/*">
                                Not Found
                            </a>
                        </div>

                        <div class="navbar-end">
                        </div>
                    </div>
                </div>
            </nav>

            <section class="hero is-fullheight-with-navbar">
                <div class="hero-body">
                    <p class="title is-size-1">
                        TraceIt - Group 28
                    </p>
                </div>
            </section>
        </body>

    )
}

export default Landing;