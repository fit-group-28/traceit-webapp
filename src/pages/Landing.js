import { Link } from "react-router-dom";

const Landing = () => {
    return (
        <div className="App">
            <h1>TraceIt - Landing Page</h1>
            <h2>Group 28</h2>
            <h3>Pages:</h3>
            <ul>
                <li>
                    <Link to="/login">Login</Link>
                </li>
                <li>
                    <Link to="*">Not Found</Link>
                </li>
            </ul>
        </div>
    )
}

export default Landing;