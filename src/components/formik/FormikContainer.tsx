import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import FormikControl from "./FormikControl";
import { FieldType, MyFormValues } from "../../types/formik";

function FormikContainer<React, FC>() {
  const initialValues: MyFormValues = {
    email: "",
    description: "",
    selectOption: "",
    radioOption: "",
    checkboxOption: [],
    date: null,
  };

  const validationSchema = Yup.object({
    email: Yup.string().email().required("Required"),
    description: Yup.string().required("Required"),
    selectOption: Yup.string().required("Required"),
    radioOption: Yup.string().required("Required"),
    checkboxOption: Yup.array().required("Required"),
    date: Yup.date().required("Required").nullable(),
  });

  const onSubmit = (values: any) => console.log("FormDAta", values);

  const dropDownOptions = [
    { key: "Select an option", value: "" },
    { key: "Select 1", value: "Select1" },
    { key: "Select 2", value: "Select2" },
    { key: "Select 3", value: "Select3" },
    { key: "Select 4", value: "Select4" },
  ];

  const radioOptions = [
    { key: "Radio 1", value: "Radio1" },
    { key: "Radio 2", value: "Radio2" },
    { key: "Radio 3", value: "Radio3" },
    { key: "Radio 4", value: "Radio4" },
  ];

  const checkboxOptions = [
    { key: "Check 1", value: "Check1" },
    { key: "Check 2", value: "Check2" },
    { key: "Check 3", value: "Check3" },
    { key: "Check 4", value: "Check4" },
  ];

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {(formik) => (
        <Form>
          <FormikControl
            control={FieldType.INPUT}
            label="Email"
            name="email"
            type="email"
          />
          <FormikControl
            control={FieldType.TEXTAREA}
            label="Description"
            name="description"
          />
          <FormikControl
            control={FieldType.SELECT}
            label="Select a topic"
            name="selectOption"
            options={dropDownOptions}
          />
          <FormikControl
            control={FieldType.RADIO}
            label="Radio Topic"
            name="radioOption"
            options={radioOptions}
          />
          <FormikControl
            control={FieldType.CHECKBOX}
            label="Checkbox Topics"
            name="checkboxOption"
            options={checkboxOptions}
          />
          <FormikControl
            control={FieldType.DATE}
            label="Pick a date"
            name="date"
          />
          <button type="submit">Submit</button>
        </Form>
      )}
    </Formik>
  );
}

export default FormikContainer;
