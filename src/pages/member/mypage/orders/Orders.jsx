/*
page: 주문/배송 조회
path: /mypage/orders
*/

import { useEffect, useState } from "react";
import { SelectDay } from "../../../../components/select/SelectDay";

export const Orders = () => {
  const [value, setValue] = useState("");

  return (
    <div>
      <SelectDay
        setDay={(val) => {
          setValue(val);
        }}
      />
      <div>주문 내역이 없습니다.</div>
    </div>
  );
};
