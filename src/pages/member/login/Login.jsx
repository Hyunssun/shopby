/*
page: 로그인
path: /login
*/

import { useState } from "react";

import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { accessToken } from "../../../store/accessToken";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { goPath } from "../../../store/goPath";
import { getProfileAPI, postLoginAPI } from "../../../server/server";
import { profileInfo } from "../../../store/profileInfo";

export const Login = () => {
  const [token, setToken] = useRecoilState(accessToken);
  const path = useRecoilValue(goPath);
  const setProfile = useSetRecoilState(profileInfo);
  const navigate = useNavigate();

  const [values, setValues] = useState({
    memberId: "",
    password: "",
  });

  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const [id, pw] = [e.target[0].value, e.target[1].value];

    postLoginAPI(id, pw)
      .then((res) => {
        setToken(res.data.accessToken);
        getProfile(res.data.accessToken);
      })
      .catch((e) => {
        console.log(`e`, e);
      });
    navigate(path);
  };

  const getProfile = (resToken) => {
    getProfileAPI(resToken)
      .then((res) => {
        setProfile(res.data.memberName);
      })
      .catch((e) => {
        console.log(`e`, e);
      });
  };

  return (
    <div>
      <form className="login" onSubmit={handleSubmit}>
        <input
          type="text"
          name="memberId"
          placeholder="아이디"
          value={values.memberId}
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          placeholder="비밀번호"
          value={values.password}
          onChange={handleChange}
        />
        <button type="submit">로그인</button>
      </form>
      <div className="login-nav">
        <Link to={"/find-id"}>아이디 찾기</Link>
        <Link to={"/find-pw"}>비밀번호 찾기</Link>
        <Link to={"/join"}>회원가입</Link>
      </div>
    </div>
  );
};
