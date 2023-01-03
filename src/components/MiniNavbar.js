import React, { useContext } from "react";
import { UserContext } from "../App";
const MiniNavbar = () => {
  const contextValue = useContext(UserContext);

  return (
    <div>I am accessing value from Header to MiniNavbar {contextValue} </div>
  );
};

export default MiniNavbar;
