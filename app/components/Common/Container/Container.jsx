import PropTypes from "prop-types";
import css from "./Container.module.scss";

export const Container = ({ children, className }) => {
  return <div className={`${css.container} ${className}`}>{children}</div>;
};

Container.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};
