export const isToday = (date: Date): boolean => {
  const currentDateFormatted = dateToString(date);

  const today = new Date();
  const todayFormatted = dateToString(today);

  return currentDateFormatted === todayFormatted;
};

export const dateFormatted = (date: Date): string => {
  return isToday(date) ? "Hoje" : dateToString(date);
};

export const dateToString = (date: Date): string => {
  const day = date.getDate();
  const mounth = date.getMonth();
  const year = date.getFullYear();
  return `${day}/${mounth}/${year}`;
};

export const compareDates = (firstDate: Date, secondDate: Date) => {
  return dateToString(firstDate) === dateToString(secondDate);
};
