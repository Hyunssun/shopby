/*
page: 상품후기
path: /mypage/product-review
*/

import { Tab } from "../../../../components/tab/Tab";

export const ProductReview = () => {
  const tabContArr = [
    {
      tabTitle: "작성 가능 후기",
      tabCont: (
        <div>
          <div>작성 가능 후기 0건</div>
          <div>작성가능 후기가 없습니다.</div>
        </div>
      ),
    },
    {
      tabTitle: "작성 완료 후기",
      tabCont: (
        <div>
          <div>작성 완료 후기 0건</div>
          <div>작성완료 후기가 없습니다.</div>
        </div>
      ),
    },
  ];
  return (
    <div>
      <Tab tabContArr={tabContArr} />
    </div>
  );
};
