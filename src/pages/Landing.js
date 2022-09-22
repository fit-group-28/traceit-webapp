import MenuBar from "../components/MenuBar";
import NavBar from "../components/NavBar";

function Landing() {
    const styles = {
        ".background": { backgroundColor: "#F9F5EB" }
    }

    return (
        <div className="full-height" style={styles['.background']}>

            <div className="navBar">
                <NavBar />
            </div>

            {/* <div className="menuBar">
                <MenuBar />
            </div> */}

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