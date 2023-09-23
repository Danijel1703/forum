import { TUserCreate } from "~/types";
import { FormStore } from "..";
import { UserCreateFields } from "~/form-fields";
import { UserCreateModel } from "~/models";

class UserCreateStore extends FormStore<TUserCreate> {
  constructor() {
    super(UserCreateModel, UserCreateFields, () => {});
  }
}

export default UserCreateStore;
