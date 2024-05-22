/*
page: 적립금
path: /mypage/accumulation
*/

import { useEffect, useState } from "react";
import { SelectDay } from "../../../../components/select/SelectDay";

export const Accumulation = () => {
  const [value, setValue] = useState("");

  return (
    <div>
      <div>적립금 0원</div>
      <SelectDay
        setDay={(val) => {
          setValue(val);
        }}
      />
      <div>적립금 적립 내역이 없습니다.</div>
    </div>
  );
};
