import React, { useState, useEffect } from 'react';
import { getTimeUntilFriday } from '../Main/main.js'; // Importe a função aqui
import '../Main/main.css';

const Main = () => {
  const [timeLeft, setTimeLeft] = useState('');

  useEffect(() => {
    const updateCountdown = () => {
      const time = getTimeUntilFriday();
      setTimeLeft(time);
    };

    updateCountdown(); // Atualiza na primeira renderização
    const interval = setInterval(updateCountdown, 1000); // Atualiza a cada segundo

    return () => clearInterval(interval); // Limpa o intervalo quando o componente desmonta
  }, []);

  return (
    <div className="divMain">
      <div className="mainText">{timeLeft}</div>
    </div>
  );
};

export default Main;
