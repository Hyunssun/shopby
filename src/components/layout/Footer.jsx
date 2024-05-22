import { useState } from "react";
import { Link } from "react-router-dom";
import Modal from "../modal/Modal";

export const Footer = () => {
  const [modalOpen1, setModalOpen1] = useState(false);
  const [modalOpen2, setModalOpen2] = useState(false);
  return (
    <footer>
      <div className="footer-nav">
        <button
          onClick={() => {
            setModalOpen1(true);
          }}
        >
          이용약관
        </button>
        <button
          onClick={() => {
            setModalOpen2(true);
          }}
        >
          개인정보처리방침
        </button>
        <Link to={"/customer-center"}>고객센터</Link>
      </div>
      <div className="footer_text">
        <p>대표자명 : 박현선</p>
        <p>대표전화번호 : 010-4660-2089</p>
        <p>
          이메일 :<a href="mailto:sunny20829@gmail.com">sunny20829@gmail.com</a>
        </p>
        <p>호스트제공 : 엔에이치엔커머스(주)</p>
      </div>

      <p>Copyright © 2024 ALL RIGHT RESERVED</p>
      {modalOpen1 && (
        <Modal onClose={() => setModalOpen1(false)} title={"이용약관"}>
          <div>이용약관</div>
        </Modal>
      )}
      {modalOpen2 && (
        <Modal onClose={() => setModalOpen2(false)} title={"개인정보처리방침"}>
          <div>개인정보처리방침</div>
        </Modal>
      )}
    </footer>
  );
};
