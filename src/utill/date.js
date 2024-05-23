export const dateCalc = (date) => {
  const now = new Date();
  const utc = now.getTime() + now.getTimezoneOffset() * 60 * 1000;
  const koreaTimeDiff = 9 * 60 * 60 * 1000;
  const korNow = new Date(utc + koreaTimeDiff);

  if (date === "today") {
    return `${korNow.getFullYear()}-${korNow.getMonth()}-${korNow.getDate()}`;
  } else if (date === "day7") {
    return new Date(korNow.setDate(korNow.getDate() - 7));
  } else if (date === "month1") {
    return new Date(korNow.setMonth(korNow.getMonth() - 1));
  } else if (date === "month3") {
    return new Date(korNow.setMonth(korNow.getMonth() - 3));
  } else if (date === "year1") {
    return new Date(korNow.setFullYear(korNow.getFullYear() - 1));
  }
};
