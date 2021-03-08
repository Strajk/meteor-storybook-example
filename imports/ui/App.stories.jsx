import * as mocks from "../../.storybook/mocks";

import React, { useContext } from "react";

import App from "./App";
import { AuthContext } from "../context/AuthContext";
import useStorybookMocks from "../../.storybook/useStorybookMocks";

export default {
  title: "App",
  component: App,
  args: {
    simpleComponentTitle: "Passed title",
  },
};

// TODO
// We would like to have only one story
// and select which user should be used by some "context" select dropdown

export const Regular = (args) => {
  useStorybookMocks({
    user: mocks.users.regular,
  });
  return <App {...args} />;
};

export const Admin = (args) => {
  useStorybookMocks({
    user: mocks.users.admin,
  });
  return <App {...args} />;
};

export const AuthTest = (args) => {
  const auth = useContext(AuthContext);
  console.log(auth);
  return <App {...args} />;
};
