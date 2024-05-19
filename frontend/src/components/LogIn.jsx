import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
const LogIn = () => {
  const { loginWithRedirect } = useAuth0();
  return (
    <li className="bg-[#2952e3] py-2 px-7 mx-4 rounded-full cursor-pointer hover:bg-[#2546bd]">
      <button
        onClick={() => {
          loginWithRedirect();
        }}
      >
        Log In
      </button>
    </li>
  );
};

export default LogIn;
