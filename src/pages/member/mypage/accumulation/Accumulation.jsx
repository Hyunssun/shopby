/*
page: 적립금
path: /mypage/accumulation
*/

import { useEffect, useState } from "react";
import { SelectDay } from "../../../../components/select/SelectDay";
import { useRecoilValue } from "recoil";
import { accessToken } from "../../../../store/accessToken";
import { getAccumulationAPI } from "../../../../server/server";
import { dateCalc } from "../../../../utill/date";

export const Accumulation = () => {
  const token = useRecoilValue(accessToken);
  const [date, setDate] = useState("");
  const [dateVal, setDateVal] = useState("");
  const [total, setTotal] = useState("");
  const [accumulationList, setAccumulationList] = useState([]);

  useEffect(() => {
    setDateVal(dateCalc(date));
  }, [date]);
  useEffect(() => {
    getAccumulation();
  }, []);

  const getAccumulation = () => {
    getAccumulationAPI(token)
      .then((res) => {
        setAccumulationList(res.data.items);
        setTotal(res.data.totalAmt);
      })
      .catch((e) => {
        console.log(`e`, e);
      });
  };

  return (
    <div>
      <div>적립금 {total}원</div>
      <SelectDay
        setDay={(val) => {
          setDate(val);
        }}
      />
      {accumulationList.length == 0 ? (
        <div>적립금 적립 내역이 없습니다.</div>
      ) : (
        accumulationList.map((item, index) => {
          const date1 = new Date(dateVal);
          const date2 = new Date(item.registerYmdt);
          if (date1 > date2) {
            return;
          }
          return (
            <div key={item.accumulationNo}>
              <div>지급 일시 : {item.registerYmdt}</div>
              <div>{item.reasonDetail}</div>
              <div>{item.accumulationAmt}원</div>
              <div>
                {item.startYmdt}~{item.expireYmdt}
              </div>
            </div>
          );
        })
      )}
    </div>
  );
};
