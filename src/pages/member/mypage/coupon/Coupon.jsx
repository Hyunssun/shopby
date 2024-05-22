/*
page: 보유쿠폰
path: /mypage/coupon
*/

import { useState } from "react";
import Modal from "../../../../components/modal/Modal";
import { Tab } from "../../../../components/tab/Tab";

export const Coupon = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [coupon, setCoupon] = useState("");

  const tabContArr = [
    {
      tabTitle: "사용 가능 쿠폰",
      tabCont: (
        <div>
          <div>사용 가능 쿠폰 수 0건</div>
          <button onClick={() => setModalOpen(true)}>쿠폰 번호 등록</button>
        </div>
      ),
    },
    {
      tabTitle: "사용 불가 쿠폰",
      tabCont: <div></div>,
    },
  ];

  return (
    <div>
      <Tab tabContArr={tabContArr} />

      <div>보유 쿠폰 리스트</div>
      <div>보유한 쿠폰이 없습니다.</div>
      {modalOpen && (
        <Modal onClose={() => setModalOpen(false)} title={"쿠폰 번호 입력"}>
          <div>발급 받으신 쿠폰 인증 번호를 아래에 입력해주세요.</div>
          <input
            type="text"
            name="coupon"
            value={coupon}
            onChange={(e) => setCoupon(e.target.value)}
            placeholder="쿠폰 번호를 입력하세요"
          />
          <div>
            <button onClick={() => setModalOpen(false)}>취소</button>
            <button>등록하기</button>
          </div>
        </Modal>
      )}
    </div>
  );
};
