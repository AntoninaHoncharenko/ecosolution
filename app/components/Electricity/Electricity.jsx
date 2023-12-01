"use client";

import React, { useState, useEffect } from "react";
import { Title } from "../Common/Title/Title";
import css from "./Electricity.module.scss";

export const Electricity = () => {
  const [count, setCount] = useState(1134147814);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCount((prevCount) => prevCount + 1);
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <>
      <Title className={css.title}>Electricity we produced for all time</Title>
      <div className={css.wrap}>
        <p className={css.number}>
          {count.toLocaleString("en-US").replace(/,/g, ".")}
        </p>
        <span className={css.span}>kWh</span>
      </div>
    </>
  );
};
