import logoImage from "../assets/logo.png";

function Landing() {
    const styles = {
        ".logo": { height: "70px" },
        ".background": { backgroundColor: "#F9F5EB" }
    }

    return (
        <div className="full-height" style={styles['.background']}>
            <nav className="navbar">
                <div className="container">
                    <div id="navMenu" className="navbar-menu">
                        <div className="navbar-start">
                            <a href="/login">
                                <img className="py-2 mr-6" alt="TraceIt Logo" src={logoImage} style={styles[".logo"]}></img>
                            </a>
                            <a className="navbar-item" href="/login">
                                Login
                            </a>
                            <a className="navbar-item" href="/dashboard">
                                Dashboard
                            </a>
                            <a className="navbar-item" href="/*">
                                Not Found
                            </a>
                        </div>

                        <div className="navbar-end">
                        </div>
                    </div>
                </div>
            </nav>

            <section className="hero is-fullheight-with-navbar">
                <div className="hero-body">
                    <p class="title is-size-1">
                        TraceIt - Group 28
                    </p>
                </div>
            </section>
        </div>

    )
}

export default Landing;