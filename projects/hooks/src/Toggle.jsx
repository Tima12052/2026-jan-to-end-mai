import { useState, useEffect } from 'react';

function Toggle() {
  const [isOn, setIsOn] = useState(false);

  useEffect(() => {
    if (isOn) {
      console.log('Toggle is ON');
    } else {
      console.log('Toggle is OFF');
    }
  }, [isOn]);

  const handleToggle = () => {
    setIsOn((prev) => !prev);
  };

  return (
    <div>
      <button type="button" onClick={handleToggle}>
        {isOn ? 'Вимкнути' : 'Увімкнути'}
      </button>
      <p>Стан: {isOn ? 'Увімкнено' : 'Вимкнено'}</p>
    </div>
  );
}

export default Toggle;
