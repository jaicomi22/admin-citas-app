import { useState } from 'react';

export function Select({ value, onValueChange, children }) {
  return <div>{children}</div>;
}

export function SelectTrigger({ children }) {
  return <div className="border p-2 rounded">{children}</div>;
}

export function SelectValue({ placeholder }) {
  return <span className="text-gray-500">{placeholder}</span>;
}

export function SelectContent({ children }) {
  return <div className="mt-1">{children}</div>;
}

export function SelectItem({ children, value }) {
  return (
    <div
      onClick={() => alert("Implement onClick para SelectItem")}
      className="p-2 hover:bg-gray-100 cursor-pointer"
    >
      {children}
    </div>
  );
}