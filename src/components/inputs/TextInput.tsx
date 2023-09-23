import { observer } from "mobx-react";
import React from "react";

type Props = {
  onChange: () => void;
  placeholder: string;
  isFormInput?: boolean;
  label?: string;
  value?: string;
  className?: string;
  isValid?: boolean;
  error?: string;
};

function TextInput(props: Props) {
  const { placeholder, label, value, onChange, className, isValid, error } =
    props;
  console.log(value, isValid, error);
  return (
    <React.Fragment>
      <span>{label}</span>
      <input
        className={className}
        type="text"
        onChange={onChange}
        placeholder={placeholder}
        value={value}
      />
    </React.Fragment>
  );
}

export default observer(TextInput);
