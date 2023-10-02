import { map } from "lodash";
import { observer } from "mobx-react";
import { TFormField } from "~/types";

type Props = {
  formFields: Array<TFormField>;
  onSubmit: () => void;
  className?: string;
};

function Form(props: Props) {
  const { formFields, onSubmit, className } = props;
  return (
    <form className={`col ${className}`}>
      {map(formFields, (formField) => (
        <RenderComponent formField={formField} />
      ))}
      <input type="button" onClick={onSubmit} />
    </form>
  );
}

const RenderComponent = observer(({ formField }: { formField: TFormField }) => {
  const Component = formField.component;
  return <Component key={formField.name} {...formField} />;
});

export default observer(Form);
