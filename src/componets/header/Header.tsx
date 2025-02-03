import { useState } from "react";
import { Link } from "react-router-dom";

import style from "./header.module.css";
import CartIcon from "../../assets/CartIcon";
import SearchIcon from "../../assets/SearchIcon";
import FavoritesIcon from "../../assets/FavoritesIcon";
import routes from "../../routes/routes";

const Header = () => {
  const icons: JSX.Element[] = [
    <SearchIcon />,
    <CartIcon />,
    <FavoritesIcon />,
  ]; // иконки

  const menuItems: { title: string; route: string }[] = [
    { title: "Магазин", route: routes.main },
    { title: "О нас", route: routes.blog },
  ];

  const [selectedMenuItem, setSelectedMenuItem] = useState<number>(0);

  return (
    <div>
      <div className={style.header}>
        <div className={style.name_shop}>JEWELERY SHOPE</div>
        <div style={{ display: "flex", alignItems: "center" }}>
          <ul className={style.menu_header}>
            {menuItems.map((item, index) => (
              <Link
                to={item.route}
                key={index}
                className={`${style.menu_item} ${
                  index === selectedMenuItem && style.active
                }`}
              >
                <span onClick={() => setSelectedMenuItem(index)}>
                  {item.title}
                </span>
              </Link>
            ))}
          </ul>

          <span className={style.header_seperator}></span>

          <div className={style.block_icons}>
            {icons.map((item, index) => (
              <span className={style.icon_header} key={index}>
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
