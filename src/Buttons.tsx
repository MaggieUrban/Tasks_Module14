import { useContext } from "react";
import { ThemeContext } from "./App";

export const Buttons = () => {
  const theme = useContext(ThemeContext);

  const handleClick = () => {
    if (theme?.currentTheme === "dark") {
      theme?.setCurrentTheme("light");
    } else {
      theme?.setCurrentTheme("dark");
    }
  };
  return (
    <div className="theme_buttons">
      <button
        className={`btn ${
          theme?.currentTheme === "light" ? "btn_light" : "btn_dark"
        }`}
        onClick={handleClick}
      >
        {theme?.currentTheme}
      </button>
    </div>
  );
};
