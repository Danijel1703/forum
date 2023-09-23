import { Form } from "~/components";
import { UserCreateStore } from "~/stores";
import { observer } from "mobx-react";
import "styles/User.Module.css";

type Props = {
  store: UserCreateStore;
};

const UserCreatePage = ({ store }: Props) => {
  const { form } = store;

  return (
    <div>
      <div className="form-wrapper">
        <Form
          formProperties={form}
          onSubmit={() => {
            console.log(form);
          }}
        />
      </div>
    </div>
  );
};

export default observer(UserCreatePage);
