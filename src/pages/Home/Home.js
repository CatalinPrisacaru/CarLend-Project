import React from "react";
import AuthContext from "../../hooks/userContext";
import { useContext } from "react";
import WelcomeBanner from "./Home-components/WelcomeBanner";
import BackgroundImage from "./Home-components/BackgroundImage";

const Home = () => {
  const { user, logoutUser } = useContext(AuthContext);

  return (
    <div>
      <WelcomeBanner />
      <BackgroundImage />

      <h1>Helloo {user?.email}</h1>
      <button
        onClick={() => {
          logoutUser();
        }}
      >
        Logout
      </button>
    </div>
  );
};

export default Home;
