import PropTypes from "prop-types";
import { useSwiper } from "swiper/react";
import ArrowIcon from "@/public/icons/arrow.svg";
import css from "./Slider.module.scss";

export default function SlideNextButton({ count }) {
  const swiper = useSwiper();

  return (
    <div className={css.wrap}>
      <p className={css.count}>
        <span style={{ color: "#173d33" }}>0{count}</span> /05
      </p>
      <div className={css.btn_wrap}>
        <button
          type="button"
          onClick={() => swiper.slidePrev()}
          className={css.button}
        >
          <ArrowIcon
            width={36}
            height={36}
            className={css.icon}
            style={{ transform: "rotate(-180deg)" }}
          />
        </button>
        <button
          type="button"
          onClick={() => swiper.slideNext()}
          className={css.button}
        >
          <ArrowIcon width={36} height={36} className={css.icon} />
        </button>
      </div>
    </div>
  );
}

SlideNextButton.propTypes = {
  count: PropTypes.number.isRequired,
};
