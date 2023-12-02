"use client";

import { Container } from "../Common/Container/Container";
import { Logo } from "../Common/Logo/Logo";
import ArrowIcon from "@/public/icons/arrow.svg";
import InstagramIcon from "@/public/icons/instagram.svg";
import FacebookIcon from "@/public/icons/facebook.svg";
import { scrollToTop } from "@/app/helpers/scroll";
import css from "./Footer.module.scss";

export const Footer = () => {
  return (
    <footer className={css.footer}>
      <Container>
        <div className={css.wrap}>
          <Logo />
          <div className={css.button_wrap}>
            <div className={css.desk_icon_wrap}>
              <a href="https://www.facebook.com/" target="_blank">
                <FacebookIcon width={24} height={24} className={css.icon} />
              </a>
              <a href="https://www.instagram.com/" target="_blank">
                <InstagramIcon width={24} height={24} className={css.icon} />
              </a>
            </div>
            <button
              type="button"
              className={css.up_btn}
              onClick={() => {
                scrollToTop();
                localStorage.setItem("menu", "Main");
              }}
            >
              <ArrowIcon width={16} height={16} className={css.up_icon} />
            </button>
          </div>
        </div>
        <div className={css.mob_icon_wrap}>
          <a href="https://www.facebook.com/" target="_blank">
            <FacebookIcon width={24} height={24} className={css.icon} />
          </a>
          <a href="https://www.instagram.com/" target="_blank">
            <InstagramIcon width={24} height={24} className={css.icon} />
          </a>
        </div>
        <address className={css.address}>
          <p className={css.content}>
            79005, Ukraine, Lvivstreet. Shota Rustaveli, 7
          </p>
          <div className={css.content_wrap}>
            <p className={css.content}>office@ecosolution.com</p>
            <p className={css.content} style={{ marginBottom: "0px" }}>
              ecosolution © 2023
            </p>
          </div>
        </address>
      </Container>
    </footer>
  );
};
