import { useNavigate, Link } from "react-router-dom";
import "./Login.css";

import { useState } from "react";

const Login = () => {
  // const { login } = useAuthContext();
  // const { addNotification } = useNotificationContext();
  const navigate = useNavigate();
  const [active, setActive] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const onPasswordChange = (e) => {
    console.log(e.currentTarget.value);
    if (e.currentTarget.value !== "") {
      setActive(true);
    }
  };

  const onLoginHandler = (e) => {
    e.preventDefault();

    let formData = new FormData(e.currentTarget);

    let email = formData.get("email");
    let password = formData.get("password");

    authService
      .login({ email, password })
      .then((authData) => {
        login(authData);
        // addNotification("You logged in successfully!", types.success);
        navigate("/menu");
      })
      .catch((err) => {
        console.log(err);
        // addNotification(err.message, types.error);
      });
  };
  return (
    <div className="hero-wrap" data-stellar-background-ratio="0.5">
      <div className="container">
        <div className="overlay"></div>
        <div className="row no-gutters slider-text align-items-center">
          <form class="signIn-form" onSubmit={onLoginHandler} method="POST">
            <h1 class="singin-header">Login</h1>
            <div class="sign-input">
              <input
                class="input-field"
                id="email"
                name="email"
                placeholder="Enter your email address"
              />
              <label
                for="email"
                class="input-label"
                data-content="Enter your email address"
              ></label>
            </div>
            <div class="sign-input">
              <input
                type="password"
                class="input-field"
                id="password"
                name="password"
                placeholder="Enter your password"
                onChange={onPasswordChange}
              />
              <label
                for="password"
                class="input-label"
                data-content="Enter your password"
              ></label>
            </div>
            <button
              class={active ? "sign-btn-blue" : "sign-btn-gray"}
              type="submit"
              disabled={active}
            >
              LOGIN
            </button>
            <Link to="home">Forgot password?</Link>
          </form>{" "}
          {/* <form
            className="request-form"
            onSubmit={onLoginHandler}
            method="POST"
          >
            <h2>Login your account</h2>
            <InputFormComponent
              form="form-group"
              title="Email"
              type="text"
              name="email"
              placeholder="Alexander_Sinigerov@yahoo.com"
            />
            <InputFormComponent
              form="form-group mr-2"
              title="Password"
              type="password"
              name="password"
              placeholder="password"
            />
            <div className="form-group">
              <input
                type="submit"
                value="Login Your Account Now"
                class="btn btn-primary btn-shadow btn-lg"
              />
            </div>
          </form> */}
        </div>
      </div>
    </div>
  );
};

export default Login;
