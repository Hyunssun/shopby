/*
page: 비밀번호 찾기
path: /find-pw
*/

import { useState } from "react";
import { Tab } from "../../../components/tab/Tab";
import { Link } from "react-router-dom";
import Modal from "../../../components/modal/Modal";

export const FindPw = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [values, setValues] = useState({
    index: "",
    name: "",
    email: "",
    number: "",
  });
  const [number, setNumber] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
  };
  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
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
            placeholder="아이디 입력"
            value={values.name}
            onChange={handleChange}
          />
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
            placeholder="아이디 입력"
            value={values.name}
            onChange={handleChange}
          />
        </div>
      ),
    },
  ];

  return (
    <div>
      <Tab tabContArr={tabContArr} />
      <Link to={"/find-id"}>아이디 찾기</Link>
      <button onClick={() => setModalOpen(true)}>비밀번호 찾기</button>
      {modalOpen && (
        <Modal
          onClose={() => {
            setModalOpen(false);
          }}
          title={"비밀번호 찾기"}
        >
          <div>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                name="number"
                placeholder="인증번호"
                value={number}
                onChange={(e) => setNumber(e.target.value)}
              />
              <button type="submit">확인</button>
            </form>
          </div>
        </Modal>
      )}
    </div>
  );
};
