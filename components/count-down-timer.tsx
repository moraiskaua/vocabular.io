'use client';

import { useEffect, useState } from 'react';

interface CountdownTimerProps {
  initialTimeLeft: number;
}

export default function CountdownTimer({
  initialTimeLeft,
}: CountdownTimerProps) {
  const [timeLeft, setTimeLeft] = useState(initialTimeLeft);

  useEffect(() => {
    if (timeLeft <= 0) return;

    const interval = setInterval(() => {
      setTimeLeft((prev) => (prev > 1000 ? prev - 1000 : 0));
    }, 1000);

    return () => clearInterval(interval);
  }, [timeLeft]);

  const hours = Math.floor((timeLeft / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((timeLeft / (1000 * 60)) % 60);
  const seconds = Math.floor((timeLeft / 1000) % 60);

  return (
    <div className='mt-6 text-gray-700 text-lg'>
      Próxima palavra em:{' '}
      <span className='font-semibold text-indigo-600'>
        {String(hours).padStart(2, '0')}h {String(minutes).padStart(2, '0')}m{' '}
        {String(seconds).padStart(2, '0')}s
      </span>
    </div>
  );
}
