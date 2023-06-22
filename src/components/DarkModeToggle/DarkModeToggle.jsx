import React from "react";
import styles from "./darkmodeToggle.module.css";

const DarkModeToggle = () => {
  //const { toggle, mode } = useContext(ThemeContext);
  const mode = "dark";
  return (
    <div className={styles.container}>
      <div className={styles.icon}>🌙</div>
      <div className={styles.icon}>🔆</div>
      <div
        className={styles.ball}
        style={mode === "light" ? { left: "2px" } : { right: "2px" }}
      />
    </div>
  );
};

export default DarkModeToggle;
