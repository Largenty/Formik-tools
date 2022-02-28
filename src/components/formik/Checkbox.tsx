import React from "react";
import { Field, ErrorMessage } from "formik";
import TextError from "./TextError";
import { FormikProps } from "../../types/formik";

function Checkbox(props: FormikProps) {
  const { label, name, options, ...rest } = props;
  return (
    <div>
      <label>{label}</label>
      <Field as="select" name={name} {...rest}>
        {({ field }: any) => {
          return options?.map((option: any) => {
            return (
              <React.Fragment key={option.value}>
                <input
                  type="checkbox"
                  id={option.value}
                  {...field}
                  value={option.value}
                  checked={field.value.includes(option.value)}
                />
                <label htmlFor={option.value}>{option.key}</label>
              </React.Fragment>
            );
          });
        }}
      </Field>
      <ErrorMessage name={name} component={TextError} />
    </div>
  );
}

export default Checkbox;
