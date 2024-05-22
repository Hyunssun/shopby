/*
page: 배송지 관리
path: /mypage/shipping-address
*/

import { useState } from "react";
import Modal from "../../../../components/modal/Modal";

export const ShippingAddress = () => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div>
      <div>배송지 0건</div>
      <button
        onClick={() => {
          setModalOpen(true);
        }}
      >
        배송지 등록하기
      </button>
      <div>배송지를 등록해주세요</div>
      {modalOpen && (
        <Modal
          onClose={() => {
            setModalOpen(false);
          }}
          title={"배송지 등록"}
        >
          <div>
            <div>
              <button>취소</button>
              <button>등록</button>
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
};
