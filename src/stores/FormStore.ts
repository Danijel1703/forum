import { each, find, indexOf, isEmpty, map, random } from "lodash";
import { FormField } from "~/types";
import { PasswordInput, TextInput } from "~/components";
import { action, makeObservable, observable } from "mobx";

type Options = {
  formTemplate: string;
};

type Form = Array<{
  component: any;
  field: FormField;
}>;

class FormStore<TEntity> {
  defaultOptions: Options = {
    formTemplate: "default",
  };
  form: Form = [];
  entity: TEntity | any;
  formFields: Array<FormField>;
  options: Options = this.defaultOptions;
  onSubmit: Function;

  constructor(
    EntityClass: new () => TEntity,
    formFields: Array<FormField>,
    onSubmit: Function,
    options?: Options,
    entity?: TEntity
  ) {
    makeObservable(this, {
      form: observable,
    });
    this.formFields = formFields;
    this.options = { ...this.defaultOptions, ...options };
    this.entity = {};
    this.onSubmit = onSubmit;
    this.generateForm();
    if (entity) {
      this.initializeEntity(EntityClass, entity);
    }
  }

  initializeEntity(EntityClass: new () => TEntity, entity: TEntity) {
    if (isEmpty(this.entity)) {
      this.entity = new EntityClass();
    } else {
      this.entity = entity;
    }
  }

  generateForm() {
    this.form = map(this.formFields, (formField: FormField) => {
      let component;
      switch (formField.type) {
        case "text":
          component = TextInput;
          break;
        case "password":
          component = PasswordInput;
          break;
      }
      const field = this.generateFormField(formField);
      return {
        field,
        component: component,
      };
    });
  }

  generateFormField(formField: FormField) {
    const field = {
      ...formField,
    };
    const self = this;
    const handler = {
      get(obj: FormField, key: string) {
        type Key = keyof typeof obj;
        switch (key) {
          case "value":
            return isEmpty(obj[key as Key])
              ? self.entity[key]
              : obj[key as Key];
          case "error":
            return formField.validate().error;
          case "isValid":
            return formField.validate().isValid;
          default:
            return obj[key as Key];
        }
      },
    };
    const fieldProxy = new Proxy(field, handler);
    fieldProxy.onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      fieldProxy.value = e.target.value;
    };
    return fieldProxy;
  }

  setEntityValue(key: string, value: string) {
    this.entity[key] = value;
  }
}

export default FormStore;
