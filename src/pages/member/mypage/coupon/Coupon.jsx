/*
page: 보유쿠폰
path: /mypage/coupon
*/

import { useEffect, useState } from "react";
import Modal from "../../../../components/modal/Modal";
import { Tab } from "../../../../components/tab/Tab";
import { useRecoilValue } from "recoil";
import { accessToken } from "../../../../store/accessToken";
import { getCouponsAPI, postCouponsCodeAPI } from "../../../../server/server";

export const Coupon = () => {
  const token = useRecoilValue(accessToken);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalOpen2, setModalOpen2] = useState({ modal: false, text: "" });
  const [code, setCode] = useState("");
  const [couponList, setCouponList] = useState([]);
  const [usable, setUsable] = useState(true);

  useEffect(() => {
    getCoupons();
  }, [usable]);

  const getCoupons = () => {
    getCouponsAPI(1, 30, token, usable)
      .then((res) => {
        setCouponList(res.data.items);
      })
      .catch((e) => {
        console.log(`e`, e);
      });
  };

  const onClickCouponsCode = () => {
    console.log(code, token);
    postCouponsCodeAPI(token, code)
      .then((res) => {
        console.log(res);
        setModalOpen2({ ...modalOpen2, modal: true, text: "등록되었습니다." });
        getCoupons();
      })
      .catch((e) => {
        console.log(`e`, e);
        setModalOpen2({
          ...modalOpen2,
          modal: true,
          text: "존재하지 않는 쿠폰입니다.",
        });
      });
  };

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
      <Tab
        tabContArr={tabContArr}
        setIndex={(idx) => (idx == 0 ? setUsable(true) : setUsable(false))}
      />

      <div>보유 쿠폰 리스트</div>
      <div>
        {couponList.length == 0 ? (
          <div>보유한 쿠폰이 없습니다.</div>
        ) : (
          couponList.map((item, index) => {
            return (
              <div key={item.couponIssueNo}>
                <div>{item.discountAmt}원 상품 할인</div>
                <div>{item.couponName}</div>
                <div>{item.minSalePrice}원 이상 구매 시 사용가능</div>
                <div>
                  {item.issueYmdt.substr(0, 10)}~{item.useEndYmdt.substr(0, 10)}
                </div>
              </div>
            );
          })
        )}
      </div>
      {modalOpen && (
        <Modal
          onClose={() => {
            setModalOpen(false);
            setCode("");
          }}
          title={"쿠폰 번호 입력"}
        >
          <div>발급 받으신 쿠폰 인증 번호를 아래에 입력해주세요.</div>
          <input
            type="text"
            name="code"
            value={code}
            onChange={(e) => setCode(e.target.value)}
            placeholder="쿠폰 번호를 입력하세요"
          />
          <div>
            <button
              onClick={() => {
                setModalOpen(false);
                setCode("");
              }}
            >
              취소
            </button>
            <button onClick={onClickCouponsCode}>등록하기</button>
          </div>
        </Modal>
      )}
      {modalOpen2.modal && (
        <Modal
          onClose={() => {
            setModalOpen2(false);
            setCode("");
          }}
          title={"확인"}
        >
          <div>{modalOpen2.text}</div>

          <div>
            <button
              onClick={() => {
                setModalOpen2(false);
                setCode("");
              }}
            >
              확인
            </button>
          </div>
        </Modal>
      )}
    </div>
  );
};
