import React from "react";
import useStorybookMocks from "../../.storybook/useStorybookMocks";
import App from "./App";
import * as mocks from "../../.storybook/mocks";

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
