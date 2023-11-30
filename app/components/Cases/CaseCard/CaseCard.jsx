import Image from "next/image";
import ArrowIcon from "@/public/icons/arrow-right.svg";
import css from "./CaseCard.module.scss";

export const CaseCard = () => {
  return (
    <div>
      <div className={css.img_wrap}>
        <Image
          src="/images/1case2x.jpg"
          width={320}
          height={168}
          alt="windmill"
          // sizes="(max-width: 480px) 100%, 320px"
          loading="lazy"
          style={{ objectFit: "cover", width: "100%", height: "100%" }}
        />
      </div>
      <div className={css.wrap}>
        <div className={css.title_wrap}>
          <h3 className={css.title}>
            Lviv Region, Radekhiv town Private Enterprise “ZAKHIDNYI BUH”
          </h3>
          <button type="button" className={css.button}>
            <ArrowIcon width={28} height={28} className={css.icon} />
          </button>
        </div>
        <div className={css.text_wrap}>
          <p className={css.text}>Wind Power for auto field irrigation</p>
          <p className={css.text}>July 2023</p>
        </div>
      </div>
    </div>
  );
};
