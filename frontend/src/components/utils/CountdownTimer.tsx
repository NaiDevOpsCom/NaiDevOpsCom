import React, { useState, useEffect } from 'react';

const CountdownTimer: React.FC<{ targetDate: Date }> = ({ targetDate }) => {
  const [timeRemaining, setTimeRemaining] = useState('');

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate.getTime() - now;

      if (difference <= 0) {
        setTimeRemaining('Event has already happened');
        clearInterval(interval);
      } else {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));

        let timeRemainingString = '';
        if (days > 0) {
          timeRemainingString += `${days} day${days > 1 ? 's' : ''} remaining `;
        }
        else if (hours > 0) {
          timeRemainingString += `${hours} hour${hours > 1 ? 's' : ''} remaining `;
        }
        else if (minutes > 0) {
          timeRemainingString += `${minutes} minute${minutes > 1 ? 's' : ''} remaining`;
        }
        setTimeRemaining(timeRemainingString);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate])

  return <span>{timeRemaining}</span>


};

export default CountdownTimer;
