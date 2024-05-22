import { Link } from "react-router-dom";

import { IoHomeOutline } from "react-icons/io5";
import { IoIosSearch } from "react-icons/io";
import { CiFaceSmile } from "react-icons/ci";
import { useState } from "react";

import { useRecoilValue, useSetRecoilState } from "recoil";
import { accessToken } from "../../store/accessToken";
import { goPath } from "../../store/goPath";
import Modal from "../modal/Modal";

export const NavBottom = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const token = useRecoilValue(accessToken);
  const setPath = useSetRecoilState(goPath);

  return (
    <div>
      <div className="bottom-nav">
        <Link to={"/"}>
          <IoHomeOutline size={30} />홈
        </Link>
        <button onClick={() => setModalOpen(true)}>
          <IoIosSearch size={30} />
          검색
        </button>
        <Link
          to={token ? "/mypage" : "/login"}
          onClick={() => setPath("/mypage")}
        >
          <CiFaceSmile size={30} />
          마이페이지
        </Link>
      </div>
      {modalOpen && (
        <Modal
          onClose={() => {
            setModalOpen(false);
          }}
          title={"검색"}
        ></Modal>
      )}
    </div>
  );
};
