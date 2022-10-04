import MenuBar from "../components/MenuBar";
import NavBar from "../components/NavBar";

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
                    <p className="title is-size-1">
                        TraceIt - Group 28
                    </p>
                </div>
            </section>
        </div>

    )
}