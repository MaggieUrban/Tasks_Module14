import React, { createContext, useContext, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Card } from "./Card";
import { data } from "./data.js";
import { Buttons } from "./Buttons";
import { UserName } from "./UserName";

type ThemeContextType = {
  currentTheme: string;
  setCurrentTheme: React.Dispatch<React.SetStateAction<string>>;
};
export const ThemeContext = createContext<ThemeContextType | null>(null);

function App() {
  const theme = useContext(ThemeContext);

  const [currentTheme, setCurrentTheme] = useState("light");
  const [isUser, setIsUser] = useState(false);

  return (
    <ThemeContext.Provider value={{ currentTheme, setCurrentTheme }}>
      <div
        className={`container ${currentTheme === "dark" ? "dark" : "light"}`}
      >
        <Buttons />

        {!isUser ? (
          <UserName setIsUser={setIsUser} />
        ) : (
          <div className="container_card">
            {data.map((item) => (
              <Card data={item} key={item.id} />
            ))}
          </div>
        )}
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
