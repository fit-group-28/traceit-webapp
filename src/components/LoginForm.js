import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AccountService from "../services/accountService";

function LoginForm() {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")
    const loginButtonCName = error ? "field has-text-centered" : "field has-text-centered p-5"

    const navigate = useNavigate()

    const handleLogin = async (e) => {
        e.preventDefault()
        try {
            await AccountService.login(username, password).then(
                () => {
                    navigate("/profile")
                    // console.log("SUCCESS")
                },
                (error) => {
                    setError("ERROR")
                }
            )
        }
        catch (err) {
            console.log(err)
        }
    }

    return (
        <div>
            {/* username field */}
            <div className="field" >
                <label className="label">Username</label>
                <p className="control">
                    <input data-testid="username" onChange={e => setUsername(e.target.value)} className="input field" type="text" placeholder="Username" />
                </p>
            </div>

            {/* password field */}
            <div className="field">
                <label className="label">Password</label>
                <p className="control">
                    <input data-testid="password" onChange={e => setPassword(e.target.value)} className="input field" type="password" placeholder="Password" />
                </p>
            </div>

            {/* error message */}
            {error ? <div data-testid="msg" className="notification is-danger is-light">
                {error}
            </div>
                : null}

            {/* Login button */}
            <div className={loginButtonCName}>
                <p className="control">
                    <button onClick={handleLogin} className="button is-primary is-rounded has-text-weight-bold" >
                        Login
                    </button>
                </p>
            </div>
        </div>
    )
}

export default LoginForm