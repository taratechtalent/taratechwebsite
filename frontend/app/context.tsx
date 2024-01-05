"use client";
import { createContext } from "react";

// Step 1: Create a context
const MyContext = createContext<any>({
  state: { items: [] },
  setState: (input: any[]) => {},
});

export default MyContext;
