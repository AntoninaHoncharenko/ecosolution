import { Title } from "../Common/Title/Title";
import css from "./Electricity.module.scss";

export const Electricity = () => {
  return (
    <>
      <Title className={css.title}>Electricity we produced for all time</Title>
      <div className={css.wrap}>
        <p className={css.number}>1.134.147.814</p>
        <span className={css.span}>kWh</span>
      </div>
    </>
  );
};
