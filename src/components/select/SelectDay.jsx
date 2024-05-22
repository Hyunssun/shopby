import { useEffect, useState } from "react";

export const SelectDay = ({ setDay }) => {
  const [value, setValue] = useState("day7");
  useEffect(() => {
    setDay(value);
  }, [value]);

  return (
    <div>
      <select
        name="select-day"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      >
        <option value="today">오늘</option>
        <option value="day7">7일</option>
        <option value="month1">1개월</option>
        <option value="month3">3개월</option>
        <option value="year1">1년</option>
      </select>
    </div>
  );
};
