import React from "react";
import { Meteor } from "meteor/meteor";
import { useTracker } from "meteor/react-meteor-data";

const NestedComponent = () => {
  const user = useTracker(() => {
    return Meteor.user();
  });

  return (
    <div>
      <h3>User info</h3>
      <small>
        Fetched in useTracker, control these in Storybook with our "Context"
        addon
      </small>
      <pre>{JSON.stringify(user, null, 2)}</pre>
    </div>
  );
};

export default NestedComponent;
