export enum FieldType {
  CHECKBOX = "CHECKBOX",
  DATE = "DATE",
  INPUT = "INPUT",
  RADIO = "RADIO",
  SELECT = "SELECT",
  TEXTAREA = "TEXTAREA",
}
export interface MyFormValues {
  email: string;
  description: string;
  selectOption: string;
  radioOption: string;
  checkboxOption: string[];
  date: string | null;
}

export interface FormikProps {
  control?: FieldType;
  label: string;
  name: string;
  options?: any[];
  type?: string;
}
