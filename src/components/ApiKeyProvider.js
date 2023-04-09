import { createContext, useState } from "react";

export const ApiKeyContext = createContext({});
export const ApiKeyProvider = (props) => {
  const { children } = props;
  const [selectedKey, setSelectedKey] = useState();

  return (
    <ApiKeyContext.Provider value={{ selectedKey, setSelectedKey }}>
      {children}
    </ApiKeyContext.Provider>
  );
};