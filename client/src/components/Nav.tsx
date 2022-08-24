import React from "react";
import whiteLogo from "../images/tinder_logo_white.png";
import colorLogo from "../images/color-logo-tinder.png";
import "../stylesheets/Nav.sass";

interface INavProps {
  minimal: boolean;
  authToken: boolean;
  showModal: boolean;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
  setIsSignUp: React.Dispatch<React.SetStateAction<boolean>>;
}

const Nav: React.FC<INavProps> = ({
  minimal,
  authToken,
  showModal,
  setShowModal,
  setIsSignUp,
}) => {
  const handleLoginClick = () => {
    setIsSignUp(false);
    setShowModal(true);
  };
  return (
    <nav>
      <div className="logo-container">
        <img
          src={minimal ? colorLogo : whiteLogo}
          alt="tinder-logo"
          className="logo"
        />
      </div>
      {!authToken && !minimal && (
        <button
          className="nav-button"
          onClick={handleLoginClick}
          disabled={showModal}
        >
          Log in
        </button>
      )}
    </nav>
  );
};

export default Nav;
