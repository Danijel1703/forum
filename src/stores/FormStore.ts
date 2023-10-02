import { isEmpty, map } from "lodash";
import { TFieldProps, TFormField } from "~/types";
import { PasswordInput, TextInput } from "~/components";
import { makeObservable, observable } from "mobx";
import { validateField } from "~/utils";
import { required } from "~/utils/form/validators";
import { FunctionComponent } from "react";

type Options = {
  formTemplate: string;
};

type Form = Array<TFormField>;

class FormStore<TEntity> {
  defaultOptions: Options = {
    formTemplate: "default",
  };
  #form: Form = [];
  entity: TEntity | any;
  formFields: Array<TFieldProps>;
  options: Options = this.defaultOptions;
  onSubmit: Function;

  constructor(
    EntityClass: new () => TEntity,
    formFields: Array<TFieldProps>,
    onSubmit: Function,
    options?: Options,
    entity?: TEntity
  ) {
    this.formFields = formFields;
    this.options = { ...this.defaultOptions, ...options };
    this.entity = {};
    this.onSubmit = onSubmit;
    this.generateForm();
    if (entity) {
      this.initializeEntity(EntityClass, entity);
    }
  }

  get form() {
    return this.#form;
  }

  initializeEntity(EntityClass: new () => TEntity, entity: TEntity) {
    if (isEmpty(this.entity)) {
      this.entity = new EntityClass();
    } else {
      this.entity = entity;
    }
  }

  generateForm() {
    this.#form = map(this.formFields, (formField: TFieldProps) => {
      let component;
      switch (formField.type) {
        case "text":
          component = TextInput;
          break;
        case "password":
          component = PasswordInput;
          break;
      }
      const field: TFormField = this.generateFormField(formField);
      field.component = component as FunctionComponent;
      return field;
    });
  }

  generateFormField(formField: TFieldProps) {
    const field = {
      ...formField,
    } as TFormField;
    if (isEmpty(field.validators)) {
      field.validators = [required];
    }
    field.validate = () => validateField(field.value, field.validators);
    field.value = undefined;
    field.error = undefined;
    field.isValid = true;
    const self = this;
    const handler = {
      get(obj: TFormField, key: string) {
        type Key = keyof typeof obj;
        switch (key) {
          case "value":
            return isEmpty(obj[key as Key])
              ? self.entity[key]
              : obj[key as Key];
          case "error":
            return field.validate().error;
          case "isValid":
            return field.validate().isValid;
          default:
            return obj[key as Key];
        }
      },
    };
    const fieldProxy = new Proxy(field, handler);
    fieldProxy.onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      fieldProxy.value = e.target.value;
    };
    return makeObservable(fieldProxy, {
      value: observable,
      error: observable,
      isValid: observable,
    });
  }
}

export default FormStore;
