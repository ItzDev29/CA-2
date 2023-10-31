import React, { useState, useEffect } from 'react';
import './aa.css';

const CountUpAnimation = ({ title, target }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      if (count < target) {
        setCount(count + 1);
      }
    }, 1);
    return () => clearInterval(timer);
  }, [count, target]);

  return (
    <div className="text-center mt-4 sm:mt-6">
      <h2 className="text-lg sm:text-2xl font-bold text-white mb-2 sm:mb-4">{title}</h2>
      <div className="text-xl sm:text-3xl font-bold" style={{ color: '#e6496d' }}>
        {count}+
      </div>
    </div>
  );
};

const CountUpGroup = () => {
  return (
    <div className="flex flex-col sm:flex-row justify-center sm:justify-evenly mt-4 sm:mt-8">
      <CountUpAnimation title="COLLEGE AMBASSADORS" target={2563} />
      <CountUpAnimation title="INDIAN COLLEGES" target={1464} />
      <CountUpAnimation title="INTERNATIONAL COLLEGES" target={768} />
    </div>
  );
};

export default CountUpGroup;
