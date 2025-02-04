import React from "react";
import { CiSun } from "react-icons/ci";
import { MdDarkMode } from "react-icons/md";

function ToggleModeComponent({ darkMode, setDarkMode }) {
  function toggleThemeMode() {
    setDarkMode(!darkMode);
  }

  return (
    <div onClick={toggleThemeMode} className="cursor-pointer py-3">
      {darkMode ? <CiSun size={45} color="white" /> : <MdDarkMode size={45} />}
    </div>
  );
}

export default ToggleModeComponent;
