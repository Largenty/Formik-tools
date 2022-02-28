import React from "react";
import { Field, ErrorMessage } from "formik";
import TextError from "./TextError";
import { FormikProps } from "../../types/formik";

function Radio(props: FormikProps) {
  const { label, name, options, ...rest } = props;
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-around",
      }}
    >
      <h3>{label}</h3>
      <div style={{ display: "flex" }}>
        <Field as="select" name={name} {...rest}>
          {({ field }: any) => {
            return options?.map((option: any) => {
              return (
                <React.Fragment key={option.value}>
                  <div style={{ marginRight: "1em" }}>
                    <input
                      type="radio"
                      id={option.value}
                      {...field}
                      value={option.value}
                      checked={field.value === option.value}
                    />
                    <label
                      htmlFor={option.value}
                      style={{ marginLeft: "0.5em" }}
                    >
                      {option.key}
                    </label>
                  </div>
                </React.Fragment>
              );
            });
          }}
        </Field>
        <ErrorMessage name={name} component={TextError} />
      </div>
    </div>
  );
}

export default Radio;
