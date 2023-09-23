import React from "react";

type Props = {
  onChange: () => void;
  placeholder: string;
  isFormInput?: boolean;
  label?: string;
  value?: string;
  className?: string;
};

function PasswordInput(props: Props) {
  const { onChange, placeholder, label, className, value } = props;
  return (
    <React.Fragment>
      <span>{label}</span>
      <input
        value={value}
        className={className}
        type="password"
        onChange={onChange}
        placeholder={placeholder}
      />
    </React.Fragment>
  );
}

export default PasswordInput;
