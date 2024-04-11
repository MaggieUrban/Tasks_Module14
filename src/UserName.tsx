import {
  ChangeEventHandler,
  Dispatch,
  FC,
  useContext,
  useRef,
  useState,
} from "react";
import { ThemeContext } from "./App";

type Props = {
  setIsUser: Dispatch<React.SetStateAction<boolean>>;
};

export const UserName: FC<Props> = ({ setIsUser }) => {
  const theme = useContext(ThemeContext);

  const [userName, setUserName] = useState("");

  const handleChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    setUserName(event.target.value);
  };

  const handleClick = () => {
    if (userName.trim().length !== 0) {
      setIsUser(true);
    }
  };
  return (
    <div
      className={`username ${
        theme?.currentTheme === "dark" ? "username_dark" : "username_light"
      }`}
    >
      <h3>Добро пожаловать!</h3>
      <input
        type="text"
        placeholder="Введите имя"
        value={userName}
        onChange={handleChange}
      />
      <button onClick={handleClick}>Отправить</button>
    </div>
  );
};
