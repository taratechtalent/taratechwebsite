"use client";
import { createContext } from "react";
import { SelectServiceItem } from "./book/SelectServiceItem";

// Step 1: Create a context
const MyContext = createContext<any>({
  setInfo: (input: any) => {},
  info: {
    components: [],
  },
});

export default MyContext;
