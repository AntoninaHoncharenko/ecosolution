import PropTypes from "prop-types";
import { scrollToSection } from "@/app/helpers/scroll";
import css from "./ContactBtn.module.scss";

export const ContactBtn = ({ children, className }) => {
  return (
    <button
      type="button"
      className={`${css.contact_btn} ${className}`}
      onClick={() => {
        scrollToSection("#Contact");
        localStorage.setItem("menu", "Contact");
      }}
    >
      {children}
    </button>
  );
};

ContactBtn.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};
