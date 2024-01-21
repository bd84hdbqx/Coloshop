import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../../layout/Hedaer";

function UserRout() {
  return (
    <>
      <Outlet />
    </>
  );
}

export default UserRout;
