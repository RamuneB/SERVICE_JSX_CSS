
import React from "react"; // Pridėkite React importą
import { Outlet } from "react-router-dom";
import Topbar from "./Topbar";
import styles from "./Layout.module.scss";

const RootLayout = () => {
  return (
    <>
      <Topbar />
      <div className={styles.rootContainer}>
        {/* Įtraukite Outlet komponentą, kad į jį būtų įterpti vidiniai maršrutai */}
        <Outlet />
      </div>
    </>
  );
};

export default RootLayout;
