import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
const LogOut = () => {
  const { logout } = useAuth0();
  return (
    <li className="bg-[#2952e3] py-2 px-7 mx-4 rounded-full cursor-pointer hover:bg-[#2546bd]">
      <button
        onClick={() => {
          logout({ logoutParams: { returnTo: window.location.origin } });
        }}
      >
        Log Out
      </button>
    </li>
  );
};

export default LogOut;
