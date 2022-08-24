import "../stylesheets/Home.sass";
import { useState } from "react";
import Nav from "../components/Nav";
import AuthModal from "../components/AuthModal";

const Home: React.FC = () => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [isSignUp, setIsSignUp] = useState<boolean>(true);
  const authToken = false;

  const handleButtonClick = () => {
    setShowModal(true);
    console.log("bum");
  };

  return (
    <div className="home-overlay">
      <Nav
        minimal={false}
        authToken={authToken}
        showModal={showModal}
        setShowModal={setShowModal}
        setIsSignUp={setIsSignUp}
      />
      <div className="home">
        <h1 className="main-title">Swipe right®</h1>
        <button className="primary-button" onClick={handleButtonClick}>
          {authToken ? "Sign out" : "Create Account"}
        </button>
        {showModal && (
          <AuthModal isSignUp={isSignUp} setShowModal={setShowModal} />
        )}
      </div>
    </div>
  );
};

export default Home;
