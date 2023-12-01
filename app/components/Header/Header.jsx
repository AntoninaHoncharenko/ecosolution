"use client";

import { useState, useEffect } from "react";
import { Container } from "../Common/Container/Container";
import { MobMenu } from "./MobMenu/MobMenu";
import { Logo } from "../Common/Logo/Logo";
import MenuIcon from "@/public/icons/menu.svg";
import {
  scrollToTop,
  toggleScroll,
  handleHeaderScroll,
} from "@/app/helpers/scroll";
import css from "./Header.module.scss";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    toggleScroll(isMenuOpen);
  }, [isMenuOpen]);

  useEffect(() => {
    handleHeaderScroll(setScroll);
  }, []);

  return (
    <>
      <header className={`${css.header} ${scroll && css.scrolled}`}>
        <Container className={css.container}>
          <Logo scrollToTop={scrollToTop} />
          <button
            type="button"
            className={css.menu_btn}
            onClick={() => setIsMenuOpen(true)}
          >
            <MenuIcon width={16} height={16} />
          </button>
        </Container>
      </header>
      {isMenuOpen && <MobMenu setIsMenuOpen={setIsMenuOpen} />}
    </>
  );
};
