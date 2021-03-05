import React from "react";

const SimpleComponent = ({ title = "Default title" }) => {
  return (
    <pre>
      SimpleComponent with passed title: <b>{title}</b>
    </pre>
  );
};

export default SimpleComponent;
