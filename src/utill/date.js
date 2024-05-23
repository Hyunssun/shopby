export const dateCalc = (date) => {
  const now = new Date();
  const utc = now.getTime() + now.getTimezoneOffset() * 60 * 1000;
  const koreaTimeDiff = 9 * 60 * 60 * 1000;
  const korNow = new Date(utc + koreaTimeDiff);

  switch (date) {
    case "today":
      return `${korNow.getFullYear()}-${
        korNow.getMonth() + 1
      }-${korNow.getDate()}`;
    case "day7":
      return new Date(korNow.setDate(korNow.getDate() - 7));
    case "month1":
      return new Date(korNow.setMonth(korNow.getMonth() - 1));
    case "month3":
      return new Date(korNow.setMonth(korNow.getMonth() - 3));
    case "year1":
      return new Date(korNow.setFullYear(korNow.getFullYear() - 1));
  }
};
