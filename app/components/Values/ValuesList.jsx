import Image from "next/image";
import CircleIcon from "@/public/icons/circle.svg";
import WorldIcon from "@/public/icons/world.svg";
import ChargeIcon from "@/public/icons/charge.svg";
import RankIcon from "@/public/icons/ranking.svg";
import css from "./Values.module.scss";

export const ValuesList = () => {
  return (
    <ul className={css.value_list}>
      <li className={css.value_card}>
        <div className={css.value_wrap}>
          <CircleIcon width={16} height={16} className={css.icon} />
          <h3 className={css.value_title}>Openness</h3>
        </div>
        <p className={css.value_text}>
          to the world, people, new ideas and projects
        </p>
      </li>
      <li className={css.value_card}>
        <div className={css.value_wrap}>
          <WorldIcon width={16} height={16} className={css.icon} />
          <h3 className={css.value_title}>Responsibility</h3>
        </div>
        <p className={css.value_text}>
          we are aware that the results of our work have an impact on our lives
          and the lives of future generations
        </p>
      </li>
      <li className={css.img_wrap1}>
        <Image
          src="/images/1value2x.jpg"
          width={320}
          height={200}
          alt="windmill"
          sizes="(max-width: 768px) 100%, 320px"
          loading="lazy"
          style={{ objectFit: "cover", width: "100%", height: "100%" }}
        />
      </li>
      <li className={css.img_wrap2}>
        <Image
          src="/images/2value2x.jpg"
          width={342}
          height={197}
          alt="windmill"
          sizes="(max-width: 768px) 100%, 342px"
          loading="lazy"
          style={{ objectFit: "cover", width: "100%", height: "100%" }}
        />
      </li>
      <li className={css.value_card}>
        <div className={css.value_wrap}>
          <ChargeIcon width={16} height={16} className={css.icon} />
          <h3 className={css.value_title}>Innovation</h3>
        </div>
        <p className={css.value_text}>
          we use the latest technology to implement non-standard solutions
        </p>
      </li>
      <li className={css.value_card}>
        <div className={css.value_wrap}>
          <RankIcon width={16} height={16} className={css.icon} />
          <h3 className={css.value_title}>Quality</h3>
        </div>
        <p className={css.value_text}>
          we do not strive to be the first among others, but we want to be the
          best in our business
        </p>
      </li>
    </ul>
  );
};
