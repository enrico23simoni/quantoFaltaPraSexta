export const getTimeUntilFriday = () => {
    const now = new Date();
    const today = now.getDay(); // Dia da semana (0 = Domingo, ..., 5 = Sexta)
  
    // Se for sexta-feira, exibe "HOJE É SEXTA-FEIRA!"
    if (today === 5) {
      return "HOJE É SEXTA-FEIRA!";
    }
  
    // Caso contrário, calcula o tempo até a próxima sexta-feira
    let daysUntilFriday = (5 - today + 7) % 7;
    if (daysUntilFriday === 0) daysUntilFriday = 7; // Se já for sexta, conta para a próxima sexta
  
    const nextFriday = new Date(now);
    nextFriday.setDate(now.getDate() + daysUntilFriday); // Calcula a próxima sexta-feira
    nextFriday.setHours(0, 0, 0, 0); // Ajusta para a meia-noite de sexta-feira
  
    const timeDiff = nextFriday - now; // Calcula a diferença em milissegundos
  
    // Convertendo milissegundos para dias, horas, minutos e segundos
    const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24)); // dias
    const hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)); // horas
    const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60)); // minutos
    const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000); // segundos
  
    return `${days} dias, ${hours}h ${minutes}m ${seconds}s para a próxima sexta-feira!`;
  };
  