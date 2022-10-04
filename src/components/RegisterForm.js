import { useState } from 'react';
import AccountService from "../services/accountService";

function SignUpForm() {
    const [email, setEmail] = useState("")
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [msg, setMsg] = useState("")
    const [isSuccess, setisSuccess] = useState(false)
    const signupButtonCName = msg ? "field has-text-centered" : "field has-text-centered p-5"


    const validateEmail = (email) => {
        var re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }

    const handleRegister = async (e) => {
        e.preventDefault()
        try {
            await AccountService.signup(email, username, password).then(
                () => {
                    setMsg("Account Created Successfully")
                    setisSuccess(true)
                },
                (error) => {
                    setMsg("Account Creation Failed")
                }
            )
        }
        catch (err) {
            console.log(err)
        }
    }

    return (
        <div>
            {/* email field */}
            <div className="field">
                <label className="label">Email</label>
                <div className="control">
                    <input onChange={e => setEmail(e.target.value)} className={email && !validateEmail(email) ? "input is-danger field" : "input field"} type="email" placeholder="e.g. cedric@gmail.com" />
                </div>
                {email ? <p className="help is-danger">{!validateEmail(email) ? "This email is invalid" : ""}</p> : null}
            </div>

            {/* username field */}

            <div className="field">
                <label className="label">Username</label>
                <div className="control">
                    <input onChange={e => setUsername(e.target.value)} className="input field" type="text" placeholder="e.g. cedliang" />
                </div>
                {/* <p className="help is-success">This username is available</p> */}
            </div>

            {/* password field */}
            <div className="field">
                <label className="label">Password</label>
                <p className="control">
                    <input onChange={e => setPassword(e.target.value)} className="input field" type="password" placeholder="Password" />
                </p>
            </div>

            {/* message */}
            {msg ? <div className={isSuccess ? "notification is-success is-light" : "notification is-danger is-light"}>
                {msg}
            </div>
                : null}


            {/* Signup button */}
            <div className={signupButtonCName}>
                <p className="control">
                    <button onClick={handleRegister} className="button is-primary is-rounded has-text-weight-bold" >
                        Sign Up
                    </button>
                </p>
            </div>
        </div>
    )
}

export default SignUpForm