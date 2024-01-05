"use client";
import React, { useState } from "react";

import MyContext from "./context";
import { SelectServiceItem } from "./book/SelectServiceItem";

// Step 2: Create a provider component
const MyProvider = ({ children }: any) => {
  const [state, setState] = useState<any>({
    updateDate: new Date(),
    items: [
      {
        id: 0,
        selectedInfo: {
          selectedService: "web",
          selectedLevel: "Senior",
          selectedCount: 1,
        },
        component: <SelectServiceItem key={0} />,
      },
    ],
  });

  const contextValue: any = {
    state,
    setState,
  };

  return (
    <MyContext.Provider value={contextValue}>{children}</MyContext.Provider>
  );
};

export default MyProvider;
