"use client";

import { useState, useEffect } from "react";
import { useMedia } from "react-use";
import { Container } from "../Common/Container/Container";
import { MobMenu } from "./MobMenu/MobMenu";
import { Logo } from "../Common/Logo/Logo";
import { ContactBtn } from "../Common/ContactBtn/ContactBtn";
import MenuIcon from "@/public/icons/menu.svg";
import {
  scrollToTop,
  toggleScroll,
  onWindowScroll,
  onHeaderChange,
} from "@/app/helpers/scroll";
import css from "./Header.module.scss";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scroll, setScroll] = useState(false);
  const tablet = useMedia("(min-width: 768px)", false);

  useEffect(() => {
    toggleScroll(isMenuOpen);
  }, [isMenuOpen]);

  useEffect(() => {
    onHeaderChange(setScroll);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", onWindowScroll);
    return () => {
      window.removeEventListener("scroll", onWindowScroll);
    };
  }, []);

  return (
    <>
      <header className={`${css.header} ${scroll && css.scrolled}`}>
        <Container className={css.container}>
          <Logo scrollToTop={scrollToTop} />
          <div className={css.btn_wrap}>
            <button
              type="button"
              className={css.menu_btn}
              onClick={() => setIsMenuOpen(true)}
            >
              <MenuIcon width={16} height={16} />
            </button>
            {tablet && (
              <ContactBtn className={css.contact_btn}>Get in touch</ContactBtn>
            )}
          </div>
        </Container>
      </header>
      {isMenuOpen && <MobMenu setIsMenuOpen={setIsMenuOpen} />}
    </>
  );
};
