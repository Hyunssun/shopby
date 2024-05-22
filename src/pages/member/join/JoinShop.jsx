/*
page: 회원가입 쇼핑몰
path: /join-shop
*/

import { useState } from "react";
import {
  getEmailExistAPI,
  getIDExistAPI,
  getMobileExistAPI,
  postJoinAPI,
} from "../../../server/server.js";
import { useNavigate } from "react-router-dom";
import { regExEmail, regExPhone, regExPwd } from "../../../utill/regexCheck.js";
import { joinTextDiv } from "../../../utill/joinTextDiv.js";
import { ModalAddress } from "../../../components/modal/ModalAddress.jsx";

export const JoinShop = () => {
  const navigate = useNavigate();
  const [modalOpen, setModalOpen] = useState(false);
  const [values, setValues] = useState({
    memberId: "",
    password: "",
    password_check: "",
    name: "",
    email: "",
    mobile: "",
    zipCd: "",
    address: "",
    detailAddress: "",
    jibunAddress: "",

    smsAgree: false,
    emailAgree: false,
  });

  const [textDiv, setTextDiv] = useState({
    memberId: "",
    password: "",
    password_check: "",
    name: "",
    email: "",
    mobile: "",
  });

  // textDiv 설정
  const check = (id, val) => {
    // 아이디
    if (id === "memberId") {
      if (val.length < 1) {
        setTextDiv({
          ...textDiv,
          memberId: joinTextDiv.memberId[0],
        });
      } else if (val.length < 5 || val.length > 20) {
        setTextDiv({
          ...textDiv,
          memberId: joinTextDiv.memberId[1],
        });
        return;
      }
      // 아이디 중복 확인
      getIDExistAPI(val)
        .then((res) => {
          if (res.data.exist) {
            setTextDiv({
              ...textDiv,
              memberId: joinTextDiv.memberId[2],
            });
          } else {
            setTextDiv({ ...textDiv, memberId: joinTextDiv.available });
          }
        })
        .catch((e) => {
          console.log(`e`, e);
        });
    }
    // 비밀번호
    else if (id === "password") {
      if (val.length < 1) {
        setTextDiv({
          ...textDiv,
          password: joinTextDiv.password[0],
        });
      } else if (val.length < 8 || val.length > 20) {
        setTextDiv({
          ...textDiv,
          password: joinTextDiv.password[1],
        });
      } else if (regExPwd(val)) {
        setTextDiv({
          ...textDiv,
          password: joinTextDiv.password[2],
        });
      } else {
        setTextDiv({ ...textDiv, password: joinTextDiv.available });
      }
    }
    // 비밀번호 확인
    else if (id === "password_check") {
      if (val.length < 1) {
        setTextDiv({
          ...textDiv,
          password_check: joinTextDiv.password_check[0],
        });
      } else if (values.password !== val) {
        setTextDiv({
          ...textDiv,
          password_check: joinTextDiv.password_check[1],
        });
      } else {
        setTextDiv({
          ...textDiv,
          password_check: joinTextDiv.password_check[2],
        });
      }
    }
    // 이름
    else if (id === "name") {
      if (val.length < 1) {
        setTextDiv({
          ...textDiv,
          name: joinTextDiv.name[0],
        });
      } else {
        setTextDiv({
          ...textDiv,
          name: joinTextDiv.name[1],
        });
      }
    }
    // 이메일
    else if (id === "email") {
      if (val.length < 1) {
        setTextDiv({
          ...textDiv,
          email: joinTextDiv.email[0],
        });
        return;
      } else if (regExEmail(val)) {
        setTextDiv({
          ...textDiv,
          email: joinTextDiv.email[1],
        });
        return;
      }
      // 이메일 중복 확인

      getEmailExistAPI(val)
        .then((res) => {
          if (res.data.exist) {
            setTextDiv({
              ...textDiv,
              email: joinTextDiv.email[2],
            });
          } else {
            setTextDiv({ ...textDiv, email: joinTextDiv.available });
          }
        })
        .catch((e) => {
          console.log(`e`, e);
        });
    }
    // 휴대폰번호
    else if (id === "mobile") {
      if (val.length < 1) {
        setTextDiv({
          ...textDiv,
          mobile: joinTextDiv.mobile[0],
        });
        return;
      } else if (regExPhone(val)) {
        setTextDiv({
          ...textDiv,
          mobile: joinTextDiv.mobile[1],
        });
        return;
      }
      // 휴대폰번호 중복 확인
      getMobileExistAPI(val)
        .then((res) => {
          if (res.data.mobileNoExist) {
            setTextDiv({
              ...textDiv,
              mobile: joinTextDiv.mobile[2],
            });
          } else {
            setTextDiv({ ...textDiv, mobile: joinTextDiv.available });
          }
        })
        .catch((e) => {
          console.log(`e`, e);
        });
    }
  };

  const handleChange = (e) => {
    check(e.target.id, e.target.value);
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  // 회원가입 버튼 클릭 시
  const onClickJoin = () => {
    const postData = {
      memberId: values.memberId, // 회원 아이디
      password: values.password, // 비밀번호
      mobileNo: values.mobile, // 핸드폰 번호 (nullable)
      memberName: values.name, // 회원 이름 (nullable)
      email: values.email, // 이메일 주소 (nullable)
      zipCd: values.zipCd, // 우편번호 (nullable)
      address: values.address, // 도로명 주소 (nullable)
      detailAddress: values.detailAddress, // 도로명 주소 상세 (nullable)
      jibunAddress: values.jibunAddress, // 도로명 주소 (지번 주소) (nullable)

      smsAgreed: values.smsAgreed, // 단문메시지서비스(SMS) 동의 여부
      directMailAgreed: values.emailAgree, // 광고 우편물(DM) 수신 동의 여부

      // pushNotificationAgreed: false, // 푸쉬 알림 동의 여부 - deprecated
      // countryCd: "KR", // 거주 국가 (nullable)
      // registrationNo: null, // 사업자 등록번호
      // businessName: null, // 회사명
      // city: null, // (국내, 해외 겸용) 도시 (nullable)
      // state: null, // (국내, 해외 겸용) 국내: 군/구, 해외: 주 (nullable)
    };
    postJoinAPI(postData)
      .then((res) => {
        navigate("/complete", { state: values.memberId });
      })
      .catch((e) => {
        console.log(`e`, e);
      });
  };

  return (
    <div>
      <div>
        <div>
          <label htmlFor="memberId">아이디</label>
          <input
            type="text"
            name="memberId"
            id="memberId"
            placeholder="아이디"
            onChange={handleChange}
          />
          <div>{textDiv.memberId}</div>
        </div>
        <div>
          <label htmlFor="memberId">비밀번호</label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="비밀번호"
            onChange={handleChange}
          />
          <div>{textDiv.password}</div>
        </div>
        <div>
          <label htmlFor="memberId">비밀번호 확인</label>
          <input
            type="password"
            name="password_check"
            id="password_check"
            placeholder="비밀번호 확인"
            onChange={handleChange}
          />
          <div>{textDiv.password_check}</div>
        </div>
        <div>
          <label htmlFor="memberId">이름</label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="이름"
            onChange={handleChange}
          />
          <div>{textDiv.name}</div>
        </div>
        <div>
          <label htmlFor="memberId">이메일</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="이메일"
            onChange={handleChange}
          />
          <div>{textDiv.email}</div>
        </div>

        <div>
          <input
            type="checkbox"
            name="emailAgree"
            id="emailAgree"
            onChange={(e) =>
              setValues({ ...values, emailAgree: e.target.checked })
            }
          />
          <label htmlFor="emailAgree">이메일 수신 동의</label>
        </div>
        <div>
          <label htmlFor="memberId">휴대폰번호</label>
          <input
            type="text"
            name="mobile"
            id="mobile"
            placeholder="휴대폰번호 입력"
            onChange={handleChange}
          />
          <div>{textDiv.mobile}</div>
        </div>

        <div>
          <input
            type="checkbox"
            name="smsAgree"
            id="smsAgree"
            onChange={(e) =>
              setValues({ ...values, smsAgree: e.target.checked })
            }
          />
          <label htmlFor="smsAgree">SMS 수신 동의</label>
        </div>

        <p>주소</p>
        <div className="shopjoin-address-input">
          <div>
            <input
              type="text"
              name="zipCd"
              id="zipCd"
              value={values.zipCd}
              onChange={handleChange}
            />
            <button onClick={() => setModalOpen(true)}>주소찾기</button>
          </div>
          <input
            type="text"
            name="address"
            id="address"
            value={values.address}
            onChange={handleChange}
          />
          <input
            type="text"
            name="detailAddress"
            id="detailAddress"
            value={values.detailAddress}
            onChange={handleChange}
          />
        </div>
      </div>

      <button className="shopjoin-btn" onClick={onClickJoin}>
        회원가입
      </button>
      {modalOpen && (
        <ModalAddress
          onClose={() => {
            setModalOpen(false);
          }}
          setAddress={(zipCd, address, jibunAddress) => {
            setModalOpen(false);
            setValues({
              ...values,
              zipCd: zipCd,
              address: address,
              jibunAddress: jibunAddress,
            });
          }}
        />
      )}
    </div>
  );
};
