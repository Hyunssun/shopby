/*
page: 회원가입 선택
path: /join
*/

import { Link } from "react-router-dom";

export const JoinMenu = () => {
  return (
    <div>
      <Link to={"/join-shop"}>쇼핑몰 회원가입</Link>
    </div>
  );
};
