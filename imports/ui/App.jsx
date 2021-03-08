import NestedComponent from "./NestedComponent";
import React from "react";
import SimpleComponent from "./SimpleComponent";

const App = ({ auth, simpleComponentTitle }) => {
  return (
    <div>
      <h1>Meteor ☄️ Storybook example</h1>
      <h2>{auth}</h2>
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
