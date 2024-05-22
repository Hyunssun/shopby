/*
page: 회원가입 완료
path: /complete
*/

import { Link } from "react-router-dom";
import { useLocation } from "react-router";
export const JoinConfirm = () => {
  const { state } = useLocation();

  return (
    <div>
      <div>회원가입이 완료되었습니다.</div>
      <div>{state}님 회원가입을 축하합니다.</div>
      <Link to={"/"}>홈으로</Link>
      <Link to={"/login"}>로그인</Link>
    </div>
  );
};
