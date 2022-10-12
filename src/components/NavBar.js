import { Link, useNavigate } from 'react-router-dom';
import logoSVG from "../assets/logoSVG.png";

const getIsLogin = () => {
    const isLogin = localStorage.getItem("user");
    return isLogin !== null;
}

const Navbar = (props) => {
    const navigate = useNavigate();
    const isLogin = getIsLogin();

    return (
        <nav className="navbar is-white">
            <div className="navbar-brand mx-6">
                <Link className="navbar-item" to="/">
                    <img src={logoSVG} width="50" alt="TraceIt Logo" />
                </Link>
            </div>

            <div className="navbar-menu">
                <div className="navbar-start" >
                    <Link className="navbar-item mr-5" to="/">Home</Link>
                    <Link className="navbar-item mr-5" to="/dashboard">Dashboard</Link>
                    <Link className="navbar-item mr-5" to="/order">Orders</Link>
                    <Link className="navbar-item mr-5" to="/inventory">Inventory</Link>
                    <Link className="navbar-item mr-5" to="/supplier">Suppliers</Link>

                </div>

                <div className="navbar-end">
                    <div className="navbar-item has-dropdown is-hoverable my-2 mx-6">
                        <button className="button is-primary">
                            <span className="icon">
                                <i className="fas fa-user"></i>
                            </span>
                            <span>Account</span>
                        </button>

                        <div data-testid="account-menu" className="navbar-dropdown is-right">
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
                                : <div data-testid="abc">
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

export default Navbar