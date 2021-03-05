import React from "react";
import SimpleComponent from "./SimpleComponent";

export default {
  title: "SimpleComponent",
  component: SimpleComponent,
  args: {
    title: "Simple",
  },
};

const Template = (args) => <SimpleComponent {...args} />;

export const Default = Template.bind({});
Default.args = {};
