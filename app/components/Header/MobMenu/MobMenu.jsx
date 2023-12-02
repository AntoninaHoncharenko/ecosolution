import CloseIcon from "@/public/icons/close.svg";
import ArrowIcon from "@/public/icons/arrow-right.svg";
import InstagramIcon from "@/public/icons/instagram.svg";
import FacebookIcon from "@/public/icons/facebook.svg";
import { scrollToSection } from "@/app/helpers/scroll";
import css from "./MobMenu.module.scss";

export const MobMenu = ({ setIsMenuOpen }) => {
  const menuItem = ["Main", "About", "Cases", "FAQ", "Contact"];
  const menu = localStorage.getItem("menu");

  const handleMenuClick = (item) => {
    setIsMenuOpen(false);
    scrollToSection(`#${item}`);
    localStorage.setItem("menu", item);
  };

  return (
    <div className={css.backdrop}>
      <div className={css.menu}>
        <button
          type="button"
          className={css.close_btn}
          onClick={() => setIsMenuOpen(false)}
        >
          <CloseIcon width={20} height={20} className={css.close_icon} />
          <p className={css.close_text}>close</p>
        </button>
        <nav className={css.nav}>
          <ul>
            {menuItem.map((item) => (
              <li
                key={item}
                className={css.menu_item}
                onClick={() => handleMenuClick(item)}
              >
                <p
                  className={css.item_text}
                  style={{ color: item === menu && "#97d28b" }}
                >
                  {item === "Contact" ? "Contact Us" : item}
                </p>
                <ArrowIcon
                  width={16}
                  height={16}
                  className={css.item_icon}
                  style={{ stroke: item === menu && "#97d28b" }}
                />
              </li>
            ))}
          </ul>
        </nav>
        <div className={css.icons_wrap}>
          <a
            href="https://www.facebook.com/"
            target="_blank"
            className={css.link}
          >
            <FacebookIcon width={24} height={24} className={css.icon} />
          </a>
          <a
            href="https://www.instagram.com/"
            target="_blank"
            className={css.link}
          >
            <InstagramIcon width={24} height={24} className={css.icon} />
          </a>
        </div>
      </div>
    </div>
  );
};
