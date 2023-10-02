import { fieldTypeConstants } from "~/constants";
import { TFieldProps } from "~/types";

const UserCreateFields: Array<TFieldProps> = [
  {
    name: "username",
    label: "Username",
    type: fieldTypeConstants.text,
  },
  {
    name: "password",
    label: "Password",
    type: fieldTypeConstants.password,
  },
  {
    name: "confirmedPassword",
    label: "Confirmed Password",
    type: fieldTypeConstants.password,
  },
  {
    name: "email",
    label: "Email",
    type: fieldTypeConstants.text,
  },
  {
    name: "confirmedEmail",
    label: "Confirmed Email",
    type: fieldTypeConstants.text,
  },
  {
    name: "firstName",
    label: "First Name",
    type: fieldTypeConstants.text,
  },
  {
    name: "lastName",
    label: "Last Name",
    type: fieldTypeConstants.text,
  },
];

export default UserCreateFields;
