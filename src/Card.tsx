import { FC, useContext, useRef } from "react";
import { ThemeContext } from "./App";

type Props = {
  data: { id: number; filmPoster: string; name: string };
};

export const Card: FC<Props> = ({ data }) => {
  const theme = useContext(ThemeContext);
  const ref = useRef<HTMLDivElement>(null);

  const handleClick = () => {
    if (ref.current !== null) {
      ref.current.remove();
    }
  };

  return (
    <div
      className={`card ${
        theme?.currentTheme === "dark" ? "card_dark" : "card_light"
      }`}
      onClick={handleClick}
      ref={ref}
    >
      <img src={data.filmPoster} alt="" />
      <h3>{data.name}</h3>
    </div>
  );
};
