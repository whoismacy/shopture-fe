import "./App.css";
import "./index.css";

function App() {
  return (
    <>
      <CreateAccount />
      {/* <LoginForm /> */}
    </>
  );
}

function LoginForm() {
  return (
    <div className="account-container">
      <div className="account-header">
        <h1 className="account-h1">Login</h1>
        <p className="sub-heading">Hi, Welcome back 👋</p>
      </div>

      <form>
        <label htmlFor="email" className="account-label">
          Email
        </label>
        <input
          type="email"
          name="email"
          className="input-email"
          placeholder="johdoe@domain.com"
          required
        />

        <label htmlFor="passwd" className="account-label">
          Password
        </label>
        <input type="password" name="passwd" className="input-password" />

        <div className="account-container--remember">
          <div>
            <input type="checkbox" className="input-checkbox" />
            <p className="text-remember">Remember Me</p>
          </div>
          <p className="text-forgot">Forgot Password?</p>
        </div>

        <button type="submit" className="btn btn-acc">
          Login
        </button>
      </form>
      <div className="login-additional">
        <p>Not registered ?</p>
        <a href="" className="create-account-link">
          Create an Account &#x2197;
        </a>
      </div>
    </div>
  );
}

function CreateAccount() {
  return (
    <div className="account-container">
      <div className="account-header">
        <h1 className="account-h1 create">Create Account</h1>
        <p className="sub-heading create">Provide Your Info</p>
      </div>

      <form action="">
        <label htmlFor="flname" className="account-label">
          Full name
        </label>
        <input
          type="text"
          placeholder="John Doe"
          name="flname"
          className="input-email"
        />

        <label htmlFor="email" className="account-label">
          Email
        </label>
        <input
          type="email"
          placeholder="johndoe@domain.com"
          name="email"
          className="input-email"
        />

        <label htmlFor="password" className="account-label">
          Password
        </label>
        <input
          type="password"
          name="password"
          className="input-password create"
        />

        <label htmlFor="password" className="account-label">
          Confirm Password
        </label>
        <input
          type="password"
          name="password"
          className="input-password create"
        />

        <button type="submit" className="btn btn-acc">
          Sign up
        </button>
      </form>

      <div className="account-container--termsc">
        <p>
          By signing up you agree to our{" "}
          <span className="text-terms">Terms of use</span> and{" "}
          <span className="text-privacy">Privacy Policy</span>
        </p>
      </div>
    </div>
  );
}

export default App;
