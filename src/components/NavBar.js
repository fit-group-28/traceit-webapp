import { Link, useNavigate } from 'react-router-dom';
import logoImage from "../assets/logo.png";
import * as AiIcons from "react-icons/ai";

const getIsLogin = () => {
    const isLogin = localStorage.getItem("user");
    return isLogin !== null;
}

export default function Navbar() {
    const navigate = useNavigate();
    const isLogin = getIsLogin();

    return (
        <nav className="navbar is-white">
            <div className="navbar-brand mx-6">
                <Link className="navbar-item" to="/">
                    <img src={logoImage} width="50" alt="TraceIt Logo" />
                </Link>
            </div>

            <div className="navbar-menu">
                <div className="navbar-start" >
                    <Link className="navbar-item mr-5" to="/">Home</Link>
                    <Link className="navbar-item mr-5" to="/dashboard">Dashboard</Link>
                    <Link className="navbar-item mr-5" to="/report">Report</Link>
                </div>

                <div className="navbar-end">
                    <div className="navbar-item has-dropdown is-hoverable my-2 mx-6">
                        <div className="control">
                            <div className="button is-primary">
                                <AiIcons.AiOutlineUser />
                                <span>Account</span>
                            </div>
                        </div>

                        <div className="navbar-dropdown is-right">
                            {isLogin ? <div>
                                <Link className="navbar-item" to="/profile">Profile</Link>
                                <hr className="navbar-divider" />
                                {/* to log out, clear local token */}
                                <Link className="navbar-item" to="/" onClick={() => {
                                    localStorage.removeItem("user");
                                    navigate("/");
                                }}>
                                    Log out
                                </Link>
                            </div>
                                : <div>
                                    <Link className="navbar-item" to="/account/login">Login</Link>
                                    <Link className="navbar-item" to="/account/register">Signup</Link>
                                </div>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </nav >
    )
}