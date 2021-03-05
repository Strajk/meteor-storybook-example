import React from "react";

// eslint-disable-next-line no-unused-vars
export const useTracker = jest.fn((fn, deps) => {
  return fn(); // TODO: Maybe handle deps in the future?
});
