import { Link } from "react-router";

import s from "./Navigation.module.css";

export const Navigation = () => {
  return (
    <nav className={s.container}>
      <Link className={s.linkElement} to="/generate">
        Генерувати QRCode
      </Link>
      <Link className={s.linkElement} to="/scan">
        Сканувати QRCode
      </Link>
      <Link className={s.linkElement} to="/generateH">
        Історія генерування
      </Link>
      <Link className={s.linkElement} to="/scanH">
        Історія сканування
      </Link>
    </nav>
  );
};
