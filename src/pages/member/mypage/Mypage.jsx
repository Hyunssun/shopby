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
import { LuChevronRight } from "react-icons/lu";

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
      <div className="mypage-group1">
        <Link to={"coupon"}>보유쿠폰</Link>
        <Link to={"accumulation"}>적립금</Link>
        <Link to={"like"}>좋아요</Link>
      </div>
      <div className="mypage-group2">
        <Link to={"orders"}>주문/배송 조회</Link>
        <Link to={"claims"}>클레임 내역</Link>
      </div>
      <div className="mypage-group3">
        <Link to={"product-review"}>
          <div>상품후기</div> <LuChevronRight size={30} color="#7E7F7F" />
        </Link>
        <Link to={"product-inquiry"}>
          <div>상품문의</div> <LuChevronRight size={30} color="#7E7F7F" />
        </Link>
        <Link to={"personal-inquiry"}>
          <div>1:1문의</div> <LuChevronRight size={30} color="#7E7F7F" />
        </Link>
        <Link onClick={() => setModalOpen(true)}>
          <div>회원정보 수정</div> <LuChevronRight size={30} color="#7E7F7F" />
        </Link>
        <Link to={"shipping-address"}>
          <div>배송지 관리</div> <LuChevronRight size={30} color="#7E7F7F" />
        </Link>
      </div>
      <div className="mypage-group4">
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
