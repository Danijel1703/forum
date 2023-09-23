import { FormField } from "~/types";
import { fieldValidate } from "~/utils";

const UserCreateFields: Array<FormField> = [
  {
    validators: [],
    name: "username",
    label: "Username",
    type: "text",
    className: "",
    value: undefined,
    validate: fieldValidate,
  },
  {
    validators: [],
    name: "password",
    label: "Password",
    type: "password",
    className: "",
    value: undefined,
    validate: fieldValidate,
  },
  {
    validators: [],
    name: "confirmedPassword",
    label: "Confirmed Password",
    type: "password",
    className: "",
    value: undefined,
    validate: fieldValidate,
  },
  {
    validators: [],
    name: "email",
    label: "Email",
    type: "text",
    className: "",
    value: undefined,
    validate: fieldValidate,
  },
  {
    validators: [],
    name: "confirmedEmail",
    label: "Confirmed Email",
    type: "text",
    value: undefined,
    validate: fieldValidate,
  },
  {
    validators: [],
    name: "firstName",
    label: "First Name",
    type: "text",
    value: undefined,
    validate: fieldValidate,
  },
  {
    validators: [],
    name: "lastName",
    label: "Last Name",
    type: "text",
    value: undefined,
    validate: fieldValidate,
  },
];

export default UserCreateFields;
