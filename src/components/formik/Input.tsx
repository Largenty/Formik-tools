import React from "react";
import { Field, ErrorMessage } from "formik";
import TextError from "./TextError";
import { FormikProps } from "../../types/formik";

function Input(props: FormikProps) {
  const { label, name, ...rest } = props;
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <label htmlFor={name}>{label}</label>
      <Field id={name} name={name} {...rest} />
      <ErrorMessage name={name} component={TextError} />
    </div>
  );
}

export default Input;
