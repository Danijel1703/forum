import { FunctionComponent } from "react";

type TFormField = {
  validators: Array<() => { valid: boolean; error: string }>;
  name: string;
  label: string;
  type: string;
  value: string | number | undefined;
  onChange?: Function;
  component?: FunctionComponent;
  className?: string;
  validate: Function;
  isValid?: boolean;
  error?: string;
  id?: string;
};

export default TFormField;
