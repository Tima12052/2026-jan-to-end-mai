// 3. Порахувати кліки без useState

// Створіть кнопку:

// Click me

// Умова:
// При кожному кліку число збільшується в консолі:

// 1
// 2
// 3
// 4

import React from 'react';

export default function UnUseState() {
  let clickCount = 0;

  const handleClick = () => {
    clickCount++;
    console.log(clickCount);
  };

  return (
    <button onClick={handleClick}>
      Click me
    </button>
  );
}