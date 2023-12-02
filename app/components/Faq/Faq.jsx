"use client";

import { useState } from "react";
import { Container } from "../Common/Container/Container";
import { Title } from "../Common/Title/Title";
import { ContactBtn } from "../Common/ContactBtn/ContactBtn";
import MinusIcon from "@/public/icons/minus.svg";
import PlusIcon from "@/public/icons/plus.svg";
import faq from "@/app/data/faq.json";
import css from "./Faq.module.scss";

export const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const toggleAnswer = (index) => {
    if (activeIndex === index) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };

  return (
    <section id="FAQ" className={css.section}>
      <Container className={css.container}>
        <Title className={css.mob_title}>Frequently Asked Questions</Title>
        <ul className={css.list}>
          {faq.map((question, index) => (
            <li className={css.card} key={question.id}>
              <div className={css.wrap} onClick={() => toggleAnswer(index)}>
                {activeIndex === index ? (
                  <MinusIcon width={16} height={16} />
                ) : (
                  <PlusIcon width={16} height={16} />
                )}

                <h3 className={css.question_title}>{question.title}</h3>
              </div>
              {activeIndex === index && (
                <p className={css.text}>{question.text}</p>
              )}
            </li>
          ))}
        </ul>
        <div className={css.title_wrap}>
          <Title className={css.desk_title}>Frequently Asked Questions</Title>
          <div>
            <p className={css.contact_text}>
              Didn`t find the answer to your question?
            </p>
            <ContactBtn className={css.contact_btn}>Contact Us</ContactBtn>
          </div>
        </div>
      </Container>
    </section>
  );
};
