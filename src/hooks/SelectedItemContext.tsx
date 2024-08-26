import React, { createContext, useContext, useState, ReactNode } from "react";

// 創建Context
const SelectedItemContext = createContext<any>(null);

// 創建一個供應器的組件
export const SelectedItemProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [selectedItem, setSelectedItem] = useState("View");
  return (
    <SelectedItemContext.Provider value={{ selectedItem, setSelectedItem }}>
      {children}
    </SelectedItemContext.Provider>
  );
};

// 自訂 Hook 來使用 Context
export const useSelectedItem = () => {
  return useContext(SelectedItemContext);
};
