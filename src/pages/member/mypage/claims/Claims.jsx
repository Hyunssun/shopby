/*
page: 클레임 내역
path: /mypage/claims
*/

import { SelectDay } from "../../../../components/select/SelectDay";
import { Tab } from "../../../../components/tab/Tab";

export const Claims = () => {
  const tabContArr = [
    {
      tabTitle: "전체",
      tabCont: <div></div>,
    },
    {
      tabTitle: "반품",
      tabCont: <div></div>,
    },
    {
      tabTitle: "교환",
      tabCont: <div></div>,
    },
    {
      tabTitle: "취소",
      tabCont: <div></div>,
    },
  ];
  return (
    <div>
      <div>
        <Tab tabContArr={tabContArr} />
        <SelectDay setDay={(val) => {}} />
        <div>내역이 없습니다.</div>
      </div>
    </div>
  );
};
