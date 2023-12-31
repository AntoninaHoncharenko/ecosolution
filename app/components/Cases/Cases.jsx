import { Container } from "../Common/Container/Container";
import { Title } from "../Common/Title/Title";
import { Slider } from "./Slider/Slider";
import css from "./Cases.module.scss";

export const Cases = () => {
  return (
    <section id="Cases" className={css.section}>
      <Container className={css.container}>
        <Title className={css.title}>Successful cases of our company</Title>
        <Slider />
      </Container>
    </section>
  );
};
