import { map } from "lodash";
import { observer } from "mobx-react";
import { FormField } from "~/types";

type Props = {
  formProperties: Array<{
    component: any;
    field: FormField;
  }>;
  onSubmit: () => void;
  className?: string;
};

function Form(props: Props) {
  const { formProperties, onSubmit, className } = props;
  return (
    <form className={`col ${className}`}>
      {map(formProperties, (formProperty) => {
        const Component = formProperty.component;
        return (
          <Component key={formProperty.field.name} {...formProperty.field} />
        );
      })}
      <input type="button" onClick={onSubmit} />
    </form>
  );
}

export default observer(Form);
