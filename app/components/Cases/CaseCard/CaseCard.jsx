import PropTypes from "prop-types";
import Image from "next/image";
import ArrowIcon from "@/public/icons/arrow-right.svg";
import css from "./CaseCard.module.scss";

export const CaseCard = ({ onecase }) => {
  return (
    <div className={css.card}>
      <div className={css.img_wrap}>
        <Image
          src={onecase.image}
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
          <h3 className={css.title}>{onecase.full_title}</h3>
          <div>
            <h3 className={css.desk_title}>{onecase.city}</h3>
            <h3 className={css.desk_title}>{onecase.name}</h3>
          </div>
          <button type="button" className={css.button}>
            <ArrowIcon width={28} height={28} className={css.icon} />
          </button>
        </div>
        <div className={css.text_wrap}>
          <p className={css.text}>{onecase.type}</p>
          <p className={css.text}>{onecase.date}</p>
        </div>
      </div>
    </div>
  );
};

CaseCard.propTypes = {
  onecase: PropTypes.shape({
    id: PropTypes.string,
    city: PropTypes.string,
    name: PropTypes.string,
    full_title: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
};
