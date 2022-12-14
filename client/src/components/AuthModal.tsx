import React, { useState } from "react";
import "../stylesheets/AuthModal.sass";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";

interface IAuthModalProps {
  isSignUp: boolean;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const AuthModal: React.FC<IAuthModalProps> = ({ isSignUp, setShowModal }) => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [cookies, setCookie, removeCookie] = useCookies([]);

  let navigate = useNavigate();

  const handleClick = () => {
    setShowModal(false);
  };

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      if (isSignUp && password !== confirmPassword) {
        setError("Passwords need to match!");
        return;
      }
      const response = await axios.post(
        `http://localhost:5000/${isSignUp ? "signup" : "login"}`,
        {
          email,
          password,
        }
      );
      console.log(response);
      // @ts-ignore
      setCookie("AuthToken", response.data.token);
      // @ts-ignore
      setCookie("UserId", response.data.userId);

      const success = response.status === 201;
      if (success && isSignUp) navigate("/onboarding");
      if (success && !isSignUp) navigate("/dashboard");

      window.location.reload();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="auth-modal">
      <div className="close-icon" onClick={handleClick}>
        ⮾
      </div>
      <h2>{isSignUp ? "Create Account" : "Get Started"}</h2>
      <p>
        By clicking Log In, you agree to our terms. Learn how we process your
        data in our Privacy and Cookie policy.
      </p>
      <form action="submit" onSubmit={handleFormSubmit}>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="email"
          required={true}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          id="password"
          name="password"
          placeholder="password"
          required={true}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {isSignUp && (
          <input
            type="password"
            id="password-check"
            name="password-check"
            placeholder="confirm password"
            required={true}
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        )}
        <input className="form-submit-button" type="submit" />
        <p>{error}</p>
      </form>
      <hr />
      <h2>GET THE APP!</h2>
    </div>
  );
};

export default AuthModal;
