import NavBar from "../components/NavBar";
import logo from "../assets/logo.png";

export default function Landing() {

    return (
        <div>

            <div className="navBar">
                <NavBar />
            </div>

            {/* <div className="menuBar">
                <MenuBar />
            </div> */}

            <section className="hero is-fullheight">

                <div className="hero-body">
                    <div className="container has-text-centered">
                        <img src={logo} style={{ height: 300 }} alt="TraceIt Logo"></img>
                        <p className="title mt-6">
                            TraceIt - Group 28
                        </p>
                        <p className="subtitle py-3">
                            TraceIt is a modern inventory management app that helps you keep track of your stock - anywhere, anytime.
                        </p>
                    </div>
                </div>
            </section>
        </div>

    )
}