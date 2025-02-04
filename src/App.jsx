import { useEffect, useState } from "react";
import ToggleModeComponent from "./components/ToggleModeComponent";
import ProductsComponent from "./components/ProductsComponent";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [systemDark, setSystemDark] = useState(false);

  useEffect(() => {
    if (localStorage.theme) {
      if (localStorage.theme === "dark") {
        setDarkMode(true);
        document.querySelector("html").classList.add("dark");
      }
    }
    // else {
    //   if (window.matchMedia("(prefers-color-scheme: dark)").matches) {      // Ako hoces da vodi racuna i o temi samog sistema
    //     setDarkMode(true);
    //     document.querySelector("html").classList.add("dark");
    //   }
    // }
  }, []);

  useEffect(() => {
    if (darkMode) {
      localStorage.theme = "dark";
      document.querySelector("html").classList.add("dark");
    } else {
      localStorage.theme = "";
      document.querySelector("html").classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <div className="conatiner w-full h-full bg-slate-200 dark:bg-slate-900 flex justify-center items-center flex-col">
      <ToggleModeComponent darkMode={darkMode} setDarkMode={setDarkMode} />
      <ProductsComponent />
    </div>
  );
}

export default App;
