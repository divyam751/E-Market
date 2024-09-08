import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "../redux/features/userSlice";
import { useNavigate } from "react-router-dom";
import "../styles/Register.css";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullname, setFullname] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isLoading, error, user, statusCode } = useSelector(
    (state) => state.user
  );

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simple validation
    if (!email.includes("@")) {
      setErrorMessage("Please enter a valid email address.");
      return;
    }

    if (password.length < 6) {
      setErrorMessage("Password must be at least 6 characters long.");
      return;
    }

    // Clear the error message if validation passes
    setErrorMessage("");

    // Dispatch the registerUser action with the form data
    dispatch(registerUser({ fullname, email, password }));

    // Clear all input fields
    resetFields();
  };

  const resetFields = () => {
    setEmail("");
    setPassword("");
    setFullname("");
  };

  useEffect(() => {
    if (statusCode === 201) {
      const intervalId = setTimeout(() => {
        navigate("/login");
      }, 3000);

      return () => clearInterval(intervalId);
    }
  }, [statusCode]);

  return (
    <div className="register-container">
      <div className="register-card">
        <h2>Create an account</h2>

        {errorMessage && <p className="error-message">{errorMessage}</p>}
        {error && <p className="error-message">{error}</p>}
        {user && <p className="success-message">Registration successful!</p>}

        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label htmlFor="fullname">Full Name</label>
            <input
              type="text"
              id="fullname"
              value={fullname}
              onChange={(e) => setFullname(e.target.value)}
              placeholder="Enter your fullname"
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              required
            />
          </div>

          <button
            type="submit"
            className="register-button"
            disabled={isLoading}
          >
            {isLoading ? "Registering..." : "Register"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
