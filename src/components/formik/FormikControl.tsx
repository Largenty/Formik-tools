import React from "react";
import Checkbox from "./Checkbox";
import DatePicker from "./DatePicker";
import Input from "./Input";
import Radio from "./Radio";
import Select from "./Select";
import Textarea from "./Textarea";
import { FieldType, FormikProps } from "../../types/formik";

function FormikControl(props: FormikProps) {
  const { control, ...rest } = props;

  switch (control) {
    case FieldType.CHECKBOX:
      return <Checkbox {...rest} />;
    case FieldType.DATE:
      return <DatePicker {...rest} />;
    case FieldType.INPUT:
      return <Input {...rest} />;
    case FieldType.RADIO:
      return <Radio {...rest} />;
    case FieldType.SELECT:
      return <Select {...rest} />;
    case FieldType.TEXTAREA:
      return <Textarea {...rest} />;
    default:
      return null;
  }
}

export default FormikControl;
