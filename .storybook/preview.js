import { AuthContext } from "../imports/context/AuthContext";
import { addDecorator } from "@storybook/react";
import { useContext } from "react";
import { users } from "./mocks";

export const parameters = {
  layout: "fullscreen",
  actions: { argTypesRegex: "^on[A-Z].*" },
};

export const globalTypes = {
  role: {
    name: "User Roles",
    description: "User Roles",
    defaultValue: "admin",
    toolbar: {
      icon: "globe",
      items: Object.keys(users),
    },
  },
};

addDecorator((Story, context) => (
  <AuthContext.Provider value={context.globals.role}>
    <Story />
  </AuthContext.Provider>
));
