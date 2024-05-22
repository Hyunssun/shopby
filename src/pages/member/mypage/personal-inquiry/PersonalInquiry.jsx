/*
page: 1:1문의
path: /mypage/personal-inquiry
*/

import { useState } from "react";
import Modal from "../../../../components/modal/Modal";

export const PersonalInquiry = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [value, setValue] = useState("member");

  return (
    <div>
      <div>1:1문의 0건</div>
      <button
        onClick={() => {
          setModalOpen(true);
        }}
      >
        1:1문의 등록하기
      </button>
      <div>아직 등록된 1:1 문의가 없어요</div>
      {modalOpen && (
        <Modal
          onClose={() => {
            setModalOpen(false);
          }}
          title={"1:1문의 등록"}
        >
          <div>
            <select
              name="select-category"
              value={value}
              onChange={(e) => setValue(e.target.value)}
            >
              <option value="member">회원/정보관리</option>
              <option value="order">주문/결제</option>
              <option value="delivery">배송</option>
              <option value="return">반품/환불/교환/AS</option>
              <option value="event">상품/이벤트</option>
              <option value="etc">기타</option>
            </select>
            <input type="text" name="title" placeholder="제목을 입력하세요." />
            <input
              type="text"
              name="contents"
              placeholder="문의 내용을 입력하세요."
            />
            <button>사진 첨부하기</button>
            <p>※ 업로드 용량은 5MB 이하로만 가능합니다.</p>
            <button
              onClick={() => {
                setModalOpen(false);
              }}
            >
              취소
            </button>
            <button>등록</button>
          </div>
        </Modal>
      )}
    </div>
  );
};
