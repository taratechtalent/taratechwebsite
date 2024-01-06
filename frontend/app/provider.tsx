"use client";
import React, { useState } from "react";

import MyContext from "./context";
import { SelectServiceItem } from "./book/SelectServiceItem";

// Step 2: Create a provider component
const MyProvider = ({ children }: any) => {
  const [info, setInfo] = useState<any>({
    updateDate: new Date(),
    components: [],
  });

  const contextValue: any = {
    info,
    setInfo,
  };

  return (
    <MyContext.Provider value={contextValue}>{children}</MyContext.Provider>
  );
};

export default MyProvider;
