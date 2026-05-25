// Custom hook useToggle

// Створити власний хук, який перемикає значення true / false.
// Використати його для показу/приховування блоку.
import { useState } from 'react';

function useToggle(initialValue = false) {
  const [isVisible, setIsVisible] = useState(initialValue);

  const toggleVisibility = () => {
    setIsVisible((current) => !current);
  };

  return [isVisible, toggleVisibility];
}

export default function CustomHook() {
  const [isVisible, toggleVisibility] = useToggle(false);

  return (
    <div>
      
        <input type="checkbox" checked={isVisible} onChange={toggleVisibility} />
      {isVisible && <h1>ELEMENT</h1>}
    </div>
  );
}