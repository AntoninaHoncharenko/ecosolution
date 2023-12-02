import { Container } from "../Common/Container/Container";
import { Title } from "../Common/Title/Title";
import { ValuesList } from "./ValuesList";
import { Electricity } from "../Electricity/Electricity";
import css from "./About.module.scss";

export const About = () => {
  return (
    <section className={css.section} id="About">
      <Container>
        <div className={css.wrap}>
          <Title className={css.title}>Main values of our company</Title>
          <p className={css.text}>
            EcoSolution envisions a world where sustainable energy solutions
            power a brighter and cleaner future for all. We aspire to be at the
            forefront of the global shift towards renewable energy, leading the
            way in innovative technologies that harness the power of nature to
            meet the world`s energy needs.
          </p>
        </div>
        <ValuesList />
        <Electricity />
      </Container>
    </section>
  );
};
