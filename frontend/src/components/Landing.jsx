import React from "react";
// import { useAuth0 } from "@auth0/auth0-react";
import landlogo1 from "../../images/landlogo1.png";
import LogIn from "./LogIn";
// import App from "../App";
const Landing = () => {
  // const { loginWithRedirect } = useAuth0();
  return (
    <div className="app__main flex flex-col justify-center items-center ">
      <img src={landlogo1} alt="logo" />
      <LogIn />
    </div>
  );
};

export default Landing;
