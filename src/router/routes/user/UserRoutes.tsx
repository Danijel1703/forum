import { UserCreatePage } from "~/pages";
import { UserCreateStore } from "~/stores";
import { inject } from "~/utils";

export default {
  path: "/user",
  children: [
    {
      path: "create",
      element: inject(UserCreatePage, UserCreateStore),
    },
  ],
};
