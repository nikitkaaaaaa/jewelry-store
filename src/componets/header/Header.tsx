import { useState } from "react";

import style from "./header.module.css";
import CartIcon from "../../assets/CartIcon";
import SearchIcon from "../../assets/SearchIcon";

const Header = () => {
  const icons: JSX.Element[] = [<SearchIcon />, <CartIcon />, <SearchIcon />];

  const menuItems: string[] = ["Магазин", "Заказы", "О нас"];

  const [selectedMenuItem, setSelectedMenuItem] = useState<number>(0);

  return (
    <div>
      <div className={style.header}>
        <div className={style.name_shop}>JEWELERY SHOPE</div>
        <div style={{ display: "flex", alignItems: "center" }}>
          <ul className={style.menu_header}>
            {menuItems.map((item, index) => (
              <li
                key={index}
                className={`${style.menu_item} ${
                  index === selectedMenuItem && style.active
                }`}
              >
                <span onClick={() => setSelectedMenuItem(index)}>{item}</span>
              </li>
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
