import logoImage from "../assets/logo.png";
import * as AiIcons from "react-icons/ai";

// const styles = {
//     ".logo": { padding: "0", margin: "-10" },
// }

function Navbar() {
    return (
        <nav class="navbar is-white">
            <div class="navbar-brand mx-6">
                <a class="navbar-item" href="/">
                    <img src={logoImage} width="50" alt="TraceIt Logo" />
                </a>
            </div>

            <div class="navbar-menu">
                <div class="navbar-start" >
                    <a class="navbar-item mr-5" href="/">
                        Home
                    </a>
                    <a class="navbar-item mr-5" href="/dashboard">
                        Dashboard
                    </a>
                    <div class="navbar-item mx-5 has-dropdown is-hoverable">
                        <div class="navbar-link">
                            User
                        </div>
                        <div class="navbar-dropdown is-boxed">
                            <a class="navbar-item" href="/login">
                                Login
                            </a>
                            <a class="navbar-item" href="/register">
                                Sign Up
                            </a>
                        </div>
                    </div>
                </div>

                <div class="navbar-end">
                    <div class="navbar-item">
                        <a class="button is-primary" href="/">
                            {/* USER INFO DISPLAY PAGE */}
                            <AiIcons.AiOutlineUser />
                        </a>
                    </div>
                </div>
            </div>
        </nav >
    )
}

export default Navbar