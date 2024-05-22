/*
page: 404
path: *
*/

import { useNavigate } from "react-router-dom";

export const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div>
      <p>요청하신 페이지를 찾을 수 없습니다.</p>

      <button label="홈 바로가기" onClick={() => navigate("/")} />
    </div>
  );
};
