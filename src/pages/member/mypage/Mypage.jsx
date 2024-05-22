/*
page: 마이페이지
path: /mypage
*/

import { useSetRecoilState } from "recoil";
import { Link, useNavigate } from "react-router-dom";
import { profileInfo } from "../../../store/profileInfo";
import { accessToken } from "../../../store/accessToken";
import { useState } from "react";
import Modal from "../../../components/modal/Modal";

export const Mypage = () => {
  const navigate = useNavigate();
  const setProfile = useSetRecoilState(profileInfo);
  const setToken = useSetRecoilState(accessToken);
  const [modalOpen, setModalOpen] = useState(false);
  const [values, setValues] = useState({
    id: "",
    pw: "",
  });

  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(e);
    navigate("/member-modification");
  };

  const onClickLogout = () => {
    setProfile("");
    setToken("");
    navigate("/");
  };

  const onClickCheck = () => {
    navigate("/member-modification");
  };

  return (
    <div className="mypage">
      <div>
        <Link to={"coupon"}>보유쿠폰</Link>
        <Link to={"accumulation"}>적립금</Link>
        <Link to={"like"}>좋아요</Link>
      </div>
      <div>
        <Link to={"orders"}>주문/배송 조회</Link>
        <Link to={"claims"}>클레임 내역</Link>
      </div>
      <div>
        <Link to={"product-review"}>상품후기</Link>
        <Link to={"product-inquiry"}>상품문의</Link>
        <Link to={"personal-inquiry"}>1:1문의</Link>
        <button onClick={() => setModalOpen(true)}>회원정보 수정</button>
        <Link to={"shipping-address"}>배송지 관리</Link>
      </div>
      <div>
        <button onClick={onClickLogout}>로그아웃</button>
        <button>회원탈퇴</button>
      </div>
      {modalOpen && (
        <Modal
          onClose={() => {
            setModalOpen(false);
          }}
          title={"회원정보수정"}
        >
          <div>
            <p>
              회원님의 정보를 안전하게 보호하기 위해
              <br />
              다시 한 번 입력해 주세요.
            </p>
            <form onSubmit={handleSubmit}>
              <div>
                <label htmlFor="id">아이디</label>
                <input
                  type="text"
                  name="id"
                  id="id"
                  value={values.id}
                  onChange={handleChange}
                />
                <label htmlFor="pw">비밀번호</label>
                <input
                  type="password"
                  name="pw"
                  id="pw"
                  value={values.pw}
                  onChange={handleChange}
                />
              </div>
              <div>
                <button onClick={() => setModalOpen(false)}>취소</button>
                <button type="submit" onClick={onClickCheck}>
                  인증하기
                </button>
              </div>
            </form>
          </div>
        </Modal>
      )}
    </div>
  );
};
