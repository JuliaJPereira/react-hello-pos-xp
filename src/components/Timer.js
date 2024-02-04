import { useEffect, useState } from 'react';

export function Timer() {
  const [value, setValue] = useState(0);

  useEffect(() => {
    setInterval(() => {
      setValue(currentValue => currentValue + 1);
    }, 1000);
  }, []);

  return (
    <div>
      <span className="bg-red-200 p-3 font-semibold">{value}</span>
    </div>
  );
}