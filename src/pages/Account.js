import "../scss/account.scss";
import { useParams, useNavigate } from 'react-router-dom';
import logoImage from "../assets/logo.png";
import LoginForm from "../components/LoginForm";
import RegisterForm from "../components/RegisterForm";
import { useEffect } from "react";

const defaultType = "login";

function isValidType(type) {
  return type === "login" || type === "register";
}

export default function Account() {
  const { type } = useParams();
  const isLogin = type === "login";
  const navigate = useNavigate();
  const loginBtnCName = isLogin ? "button is-primary is-rounded has-text-weight-bold px-5 py-5 login-button" : "button is-link is-rounded has-text-weight-bold py-5 login-button-r";
  const signupBtnCName = isLogin ? "button is-rounded has-text-weight-bold py-5 is-link signup-button" : "button is-rounded has-text-weight-bold px-5 py-5 is-primary signup-button-r";

  useEffect(() => {
    if (!isValidType(type)) {
      navigate(`/account/${defaultType}`);
    }
  }, [type, navigate]);

  return (
    <section className="hero is-fullheight background">

      <div className="hero-head button-margin">
        <div className="login-signup-buttons">
          <button className={loginBtnCName} onClick={() => navigate("/account/login")}>
            Login
          </button>

          <button className={signupBtnCName} onClick={() => navigate("/account/register")}>
            signup
          </button>

        </div>
      </div>

      <div className="hero-body">
        <div className="card box">
          <div className="card-image">
            <figure className="image logo-main" >
              <img src={logoImage} alt="TraceIt Logo" />
            </figure>
          </div>
          <div className="card-content">
            <div className="is-size-4 has-text-centered has-text-weight-bold pb-5 welcome">
              {isLogin ? "Welcome Back" : "Welcome"}
            </div>
            <div className="content">
              {isLogin ? <LoginForm /> : <RegisterForm />}
            </div>
          </div>
        </div>
      </div>

    </section >
  );
}
