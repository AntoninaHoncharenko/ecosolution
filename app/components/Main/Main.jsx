import Image from "next/image";
import { Container } from "../Common/Container/Container";
import { Title } from "../Common/Title/Title";
import { LearnMoreBtn } from "./LearnMoreBtn";
import css from "./Main.module.scss";

export const MainSection = () => {
  return (
    <section className={css.section} id="Main">
      <Container>
        <div className={css.wrap}>
          <Title isMainTitle className={css.title}>
            RENEWABLE ENERGY For any task
          </Title>
          <div className={css.content_wrap}>
            <p className={css.text}>
              Development and implementation of renewable non-polluting energy
              sources, generating power generation using energy wind, sun,
              water, biomass
            </p>
            <LearnMoreBtn />
          </div>
        </div>
        <div className={css.contact_wrap}>
          <p className={css.adress}>
            79005, Ukraine, Lvivstreet. Shota Rustaveli, 7
          </p>
          <div className={css.contact_wrap_add}>
            <p className={css.email}>office@ecosolution.com</p>
            <p className={css.rights}>ecosolution © 2023</p>
          </div>
        </div>
        <div className={css.img_wrap}>
          <Image
            src="/images/about2x.jpg"
            width={320}
            height={200}
            alt="windmill"
            sizes="(max-width: 768px) 100%, 320px"
            loading="lazy"
            style={{ objectFit: "cover", width: "100%", height: "100%" }}
          />
        </div>
      </Container>
    </section>
  );
};
