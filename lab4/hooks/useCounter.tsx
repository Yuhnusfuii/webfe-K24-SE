import { useState } from 'react';

export function useCounter(min = -10, max = 10, initial = 0) {
  const [count, setCount] = useState(initial);

    const increment = () => {
    setCount((c) => (c < max ? c + 1 : c));
  };

  const decrement = () => {
    setCount((c) => (c > min ? c - 1 : c));
  };
    const reset = () => {
    setCount(initial);
  };

  return {
    count,
    increment,
    decrement,
    reset,
    min,
    max,
  };
}