import React from "react";
import NestedComponent from "./NestedComponent";
import SimpleComponent from "./SimpleComponent";

const App = ({ simpleComponentTitle }) => {
  return (
    <div>
      <h1>Meteor ☄️ Storybook example</h1>

      <h3>Simple component</h3>
      <small>
        Passed via props, control these in Storybook with Controls addon
      </small>

      <SimpleComponent title={simpleComponentTitle} />

      <NestedComponent />
    </div>
  );
};
export default App;
