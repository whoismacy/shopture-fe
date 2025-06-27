import "./App.css";
import "./index.css";

function App() {
  return (
    <>
      {/* <LoginForm /> */}
      <CreateAccount />
    </>
  );
}

function LoginForm() {
  return (
    <div className="container">
      <div class="login-heading">
        <h1 className="heading">Login</h1>
        <p className="sub-heading">Hi, Welcome back 👋</p>
      </div>
      <form>
        <label htmlFor="email" className="login-label">
          Email
        </label>
        <input type="email" required className="email" />

        <label htmlFor="passwd" className="login-label">
          Password
        </label>
        <input type="password" className="password" />

        <div className="loginRemember">
          <div>
            <input type="checkbox" className="checkbox" />
            <p className="remember">Remember Me</p>
          </div>

          <p className="forgot">Forgot Password?</p>
        </div>

        <button className="btn-login">Login</button>
      </form>
      <p>
        Not registered ? {"  "}
        <span>
          <a href="" className="create-account">
            Create an Account &#x2197;
          </a>
        </span>
      </p>
    </div>
  );
}

function CreateAccount() {
  return (
    <div className="container">
      <div className="login-heading">
        <h1 className="create-heading">Create Account</h1>
        <p className="sub-heading create">Provide Your Info</p>
      </div>

      <form action="">
        <label htmlFor="flname" className="login-label">
          Full name
        </label>
        <input type="text" className="email" />

        <label htmlFor="email" className="login-label">
          Email
        </label>
        <input type="email" class="fname" className="email" />

        <label htmlFor="password" className="login-label">
          Password
        </label>
        <input type="password" class="password create" />

        <label htmlFor="cpassword" className="login-label">
          Confirm Password
        </label>
        <input type="password" class="password create" />

        <button className="btn-login">Sign up</button>
      </form>

      <div className="terms-privacy">
        <p>
          By signing up you agree to our{" "}
          <span className="terms">Terms of use</span> and{" "}
          <span className="privacy">Privacy Policy</span>
        </p>
      </div>
    </div>
  );
}

export default App;
