import React from "react";
import AuthContext from "../../hooks/userContext";
import { useContext } from "react";

const Home = () => {
  const { user, logoutUser } = useContext(AuthContext);

  return (
    <div>
      Home
      <h1>Hello {user?.email}</h1>
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
