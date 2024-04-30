import { Link } from "react-router-dom";
import style from "./Header.module.scss";

export const Header = () => {
  return (
    <header className={style.header}>
      <ul>
        <li>
          <Link to={import.meta.env.PROD ? "/Gallery/" : "/"}>Gallery</Link>
        </li>
        <li>
          <Link to={"grid"}>GridGallery</Link>
        </li>
      </ul>
    </header>
  );
};
