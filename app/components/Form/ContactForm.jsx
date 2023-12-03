"use client";

import { Formik, Form, Field } from "formik";
import toast from "react-hot-toast";
import { validationSchema } from "@/app/helpers/validation";
import ArrowIcon from "@/public/icons/arrow.svg";
import css from "./ContactForm.module.scss";

export const ContactForm = () => (
  <Formik
    initialValues={{
      firstName: "",
      lastName: "",
      email: "",
    }}
    validationSchema={validationSchema}
    onSubmit={(values, { resetForm }) => {
      toast.success("Successfully sent!");
      resetForm({
        values: {
          name: "",
          email: "",
          phone: "",
          message: "",
        },
      });
    }}
  >
    {({ errors }) => (
      <Form className={css.form}>
        <div className={css.wrap}>
          <label htmlFor="name" className={css.label}>
            * Full name:
          </label>
          <Field
            name="name"
            id="name"
            placeholder="John Rosie"
            className={css.input}
            style={{
              borderBottom: `1px solid ${errors.name ? "#d28b8b" : "#97d28b"}`,
            }}
          />
          {errors.name ? <p className={css.error_text}>{errors.name}</p> : null}
        </div>

        <div className={css.wrap}>
          <label htmlFor="email" className={css.label}>
            * E-mail:
          </label>
          <Field
            name="email"
            type="email"
            id="email"
            placeholder="johnrosie@gmail.com"
            className={css.input}
            style={{
              borderBottom: `1px solid ${errors.email ? "#d28b8b" : "#97d28b"}`,
            }}
          />
          {errors.email ? (
            <p className={css.error_text}>{errors.email}</p>
          ) : null}
        </div>

        <div className={css.wrap}>
          <label htmlFor="phone" className={css.label}>
            * Phone:
          </label>
          <Field
            name="phone"
            id="phone"
            placeholder="380961234567"
            className={css.input}
            style={{
              borderBottom: `1px solid ${errors.phone ? "#d28b8b" : "#97d28b"}`,
            }}
          />
          {errors.phone ? (
            <p className={css.error_text}>{errors.phone}</p>
          ) : null}
        </div>

        <label htmlFor="message" className={css.label}>
          Message:
        </label>
        <Field
          as="textarea"
          name="message"
          id="message"
          placeholder="Your message"
          className={css.textarea}
        />

        <button type="submit" className={css.button}>
          <p>Send</p>
          <div className={css.icon_wrap}>
            <ArrowIcon width={16} heght={16} className={css.icon} />
          </div>
        </button>
      </Form>
    )}
  </Formik>
);
