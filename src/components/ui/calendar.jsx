import { useState } from 'react';

export function Calendar({ selected, onSelect }) {
  const [value, setValue] = useState(selected || new Date());

  return (
    <input
      type="date"
      value={value.toISOString().split('T')[0]}
      onChange={(e) => {
        const date = new Date(e.target.value);
        setValue(date);
        onSelect(date);
      }}
      className="border p-2 rounded w-full"
    />
  );
}