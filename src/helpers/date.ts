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
  const d = new Date(date);
  const day = d.getDate();
  const mounth = d.getMonth();
  const year = d.getFullYear();
  return `${day}/${mounth}/${year}`;
};

export const dateToHoursTemplate = (date: Date): string => {
  const d = new Date(date);
  const hours = String(d.getHours()).padStart(2, "0");
  const minutes = String(d.getMinutes()).padStart(2, "0");
  return `${hours}:${minutes}`;
};

export const compareDates = (firstDate: Date, secondDate: Date) => {
  return dateToString(firstDate) === dateToString(secondDate);
};
