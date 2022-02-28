import React from "react";
import { Field, ErrorMessage } from "formik";
import TextError from "./TextError";
import { FormikProps } from "../../types/formik";

function Textarea(props: FormikProps) {
  const { label, name, ...rest } = props;
  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <Field
        as="textarea"
        id={name}
        name={name}
        {...rest}
        style={{ width: "100%" }}
      />
      <ErrorMessage name={name} component={TextError} />
    </div>
  );
}

export default Textarea;
