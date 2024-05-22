/*
page: 아이디 찾기
path: /find-id
*/

import { useEffect, useState } from "react";
import { Tab } from "../../../components/tab/Tab.jsx";
import { postFindIdAPI } from "../../../server/server.js";
import Modal from "../../../components/modal/Modal.jsx";
import { Link } from "react-router-dom";

export const FindId = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [values, setValues] = useState({
    index: "",
    name: "",
    email: "",
    number: "",

    id: "",
    mail: "",
    selectMail: "",

    first: "010",
    second: "",
    third: "",
  });
  useEffect(() => {
    setValues({ ...values, email: values.id + "@" + values.mail });
  }, [values.id, values.mail]);
  useEffect(() => {
    setValues({
      ...values,
      number: `${values.first}-${values.second}-${values.third}`,
    });
  }, [values.first, values.second, values.third]);

  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  const onClickFindId = () => {
    setModalOpen(true);
    let data = {};
    if (values.index == 0) {
      data = {
        findMethod: "EMAIL",
        memberName: values.name,
        email: values.email,
      };
    } else {
      data = {
        findMethod: "SMS",
        memberName: values.name,
        mobileNo: values.number,
      };
    }
    postFindIdAPI(data)
      .then((res) => {
        console.log(res);
      })
      .catch((e) => {
        console.log(`e`, e);
      });
  };

  const tabContArr = [
    {
      tabTitle: "이메일 인증",
      tabCont: (
        <div>
          <input
            type="text"
            name="name"
            placeholder="이름 입력"
            value={values.name}
            onChange={handleChange}
          />
          <div>
            <div>
              <input
                type="text"
                name="id"
                value={values.id}
                onChange={handleChange}
              />
              @
              <input
                type="text"
                name="mail"
                value={values.mail}
                onChange={(e) => {
                  setValues({
                    ...values,
                    mail: e.target.value,
                    selectMail: "직접입력",
                  });
                }}
              />
            </div>
            <select
              name="selectMail"
              value={values.selectMail}
              onChange={(e) =>
                setValues({
                  ...values,
                  mail: e.target.value,
                  selectMail: e.target.value,
                })
              }
            >
              <option value="직접입력">직접입력</option>
              <option value="naver.com">naver.com</option>
              <option value="hanmail.net">hanmail.net</option>
              <option value="daum.net">daum.net</option>
              <option value="nate.com">nate.com</option>
              <option value="gmail.com">gmail.com</option>
            </select>
          </div>
        </div>
      ),
    },
    {
      tabTitle: "휴대폰번호 인증",
      tabCont: (
        <div>
          <input
            type="text"
            name="name"
            placeholder="이름 입력"
            value={values.name}
            onChange={handleChange}
          />
          <div>
            <div>
              <select name="first" value={values.first} onChange={handleChange}>
                <option value="010">010</option>
                <option value="011">011</option>
                <option value="016">016</option>
                <option value="017">017</option>
                <option value="018">018</option>
                <option value="019">019</option>
              </select>
              -
              <input
                type="number"
                name="second"
                value={values.second}
                onChange={handleChange}
              />
              -
              <input
                type="number"
                name="third"
                value={values.third}
                onChange={handleChange}
              />
            </div>
          </div>
        </div>
      ),
    },
  ];

  return (
    <div>
      <Tab tabContArr={tabContArr} />
      <button onClick={onClickFindId}>아이디 찾기</button>
      {modalOpen && (
        <Modal
          onClose={() => {
            setModalOpen(false);
          }}
          title={"아이디 찾기 결과"}
        >
          <div>
            <Link to={"/find-pw"}>비밀번호 찾기</Link>
            <Link to={"/login"}>로그인</Link>
          </div>
        </Modal>
      )}
    </div>
  );
};
