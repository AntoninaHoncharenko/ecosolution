import css from "./Title.module.scss";

export const Title = ({ children, className, isMainTitle = false }) => {
  if (isMainTitle)
    return <h1 className={`${css.title} ${className}`}>{children}</h1>;

  return <h2 className={`${css.title} ${className}`}>{children}</h2>;
};
