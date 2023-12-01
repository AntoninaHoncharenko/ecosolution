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
          <button type="button" className={css.up_btn} onClick={scrollToTop}>
            <ArrowIcon width={16} height={16} className={css.up_icon} />
          </button>
        </div>
        <div className={css.icon_wrap}>
          <a href="https://www.facebook.com/" target="_blank">
            <FacebookIcon width={24} height={24} className={css.icon} />
          </a>
          <a href="https://www.instagram.com/" target="_blank">
            <InstagramIcon width={24} height={24} className={css.icon} />
          </a>
        </div>
        <address>
          <p className={css.content}>
            79005, Ukraine, Lvivstreet. Shota Rustaveli, 7
          </p>
          <p className={css.content}>office@ecosolution.com</p>
        </address>
        <p className={css.content} style={{ marginBottom: "0px" }}>
          ecosolution © 2023
        </p>
      </Container>
    </footer>
  );
};
