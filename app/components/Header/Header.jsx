"use client";

import { useState } from "react";
import { Container } from "../Common/Container/Container";
import { MobMenu } from "./MobMenu/MobMenu";
import LogoIcon from "@/public/icons/logo.svg";
import MenuIcon from "@/public/icons/menu.svg";
import css from "./Header.module.scss";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <header className={css.header}>
        <Container className={css.container}>
          <a href="/" className={css.logo}>
            <LogoIcon width={31} height={18} />
            <p className={css.logo_title}>ecosolution</p>
            <p className={css.logo_text}>
              <span className={css.logo_span}>GREEN</span>ERGY FOR LIFE
            </p>
          </a>
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
