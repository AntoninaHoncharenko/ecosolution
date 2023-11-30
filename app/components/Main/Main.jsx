import { Container } from "../Common/Container/Container";
import { Title } from "../Common/Title/Title";
import ArrowIcon from "@/public/icons/arrow.svg";
import css from "./Main.module.scss";

export const MainSection = () => {
  return (
    <section className={css.section}>
      <Container>
        <div className={css.wrap}>
          <Title isMainTitle className={css.title}>
            RENEWABLE ENERGY For any task
          </Title>
          <p className={css.text}>
            Development and implementation of renewable non-polluting energy
            sources, generating power generation using energy wind, sun, water,
            biomass
          </p>
          <a href="#cases" className={css.button}>
            <p>Learn more</p>
            <div className={css.icon_wrap}>
              <ArrowIcon width={16} heght={16} className={css.icon}/>
            </div>
          </a>
        </div>
      </Container>
    </section>
  );
};
