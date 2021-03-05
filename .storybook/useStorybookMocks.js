import { useEffect } from "react";

export default function useStorybookMocks(mocks) {
  global.StorybookMocks = mocks;
  useEffect(() => () => {
    global.StorybookMocks ??= undefined;
  });
}
