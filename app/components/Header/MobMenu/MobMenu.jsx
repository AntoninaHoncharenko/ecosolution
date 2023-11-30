import Link from "next/link";
import CloseIcon from "@/public/icons/close.svg";
import ArrowIcon from "@/public/icons/arrow-right.svg";
import InstagramIcon from "@/public/icons/instagram.svg";
import FacebookIcon from "@/public/icons/facebook.svg";
import css from "./MonMenu.module.scss";

export const MobMenu = ({ setIsMenuOpen }) => {
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
            <li className={css.menu_item}>
              <p className={css.item_text}>Main</p>
              <ArrowIcon width={16} height={16} className={css.item_icon} />
            </li>
            <li className={css.menu_item}>
              <p className={css.item_text}>About</p>
              <ArrowIcon width={16} height={16} className={css.item_icon} />
            </li>
            <li className={css.menu_item}>
              <p className={css.item_text}>Cases</p>
              <ArrowIcon width={16} height={16} className={css.item_icon} />
            </li>
            <li className={css.menu_item}>
              <p className={css.item_text}>FAQ</p>
              <ArrowIcon width={16} height={16} className={css.item_icon} />
            </li>
            <li className={css.menu_item}>
              <p className={css.item_text}>Contact Us</p>
              <ArrowIcon width={16} height={16} className={css.item_icon} />
            </li>
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
