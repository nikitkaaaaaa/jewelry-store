import React from "react";

import style from "./footer.module.css";
import { Link } from "react-router-dom";
import InputArrow from "../../assets/InputArrow";
import FacebookIcon from "../../assets/FacebookIcon";
import routes from "../../routes/routes";
import TwitterIcon from "../../assets/TwitterIcon";
import InstagramIcon from "../../assets/InstagramIcon";

const Footer = () => {
  const footerLinks: { title: string; route: string }[] = [
    { title: "контакты", route: "" },
    { title: "условия покупки", route: "" },
    { title: "доставка и возврат", route: "" },
  ];

  const socials: { icon: JSX.Element; route: string }[] = [
    { icon: <FacebookIcon />, route: routes.facebook },
    { icon: <TwitterIcon />, route: routes.twitter },
    { icon: <InstagramIcon />, route: routes.instagram },
  ];

  return (
    <div className={style.footer}>
      <div className={style.footer_links_block}>
        <div className={style.footer_links}>
          {footerLinks.map((item, index) => (
            <Link
              key={index}
              to={item.route}
              className={style.footer_links_item}
            >
              {item.title}
            </Link>
          ))}
        </div>
        <div className={style.block_input}>
          <form>
            <input
              type="email"
              placeholder="Ваш email для акций и предложений"
              className={style.input_footer}
            />
          </form>
          <div className={style.input_arrow}>
            <InputArrow />
          </div>
        </div>
      </div>

      <div className={style.socials_block}>
        <div>© 2025 Shoppe</div>
        <div className={style.socials}>
          {socials.map((item, index) => (
            <Link to={item.route} key={index}>
              {item.icon}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Footer;
