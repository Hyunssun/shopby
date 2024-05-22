import { useEffect, useRef, useState } from "react";
import { FaXmark } from "react-icons/fa6";
import { IoIosSearch } from "react-icons/io";
import { IoIosArrowRoundBack } from "react-icons/io";

// import useOutSideClick from "../../utill/useOutSideClick.js";

function Modal({ onClose, title, children }) {
  const modalRef = useRef(null);
  const [searchText, setSearchText] = useState("");

  const handleClose = () => {
    onClose?.();
  };

  // useOutSideClick(modalRef, handleClose);
  useEffect(() => {
    const $body = document.querySelector("body");
    $body.style.overflow = "hidden";
    return () => ($body.style.overflow = "auto");
  }, []);
  return (
    <div className="modal-background">
      <div ref={modalRef} className="modal">
        {title != "검색" ? (
          <div className="modal-header">
            <div>{title}</div>
            <button onClick={handleClose} className="modal-xmark">
              <FaXmark size={30} />
            </button>
          </div>
        ) : (
          <div className="modal-header2">
            <button onClick={handleClose}>
              <IoIosArrowRoundBack size={30} />
            </button>
            <input
              type="text"
              name="search-text"
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
            />
            <button>
              <IoIosSearch size={30} />
            </button>
          </div>
        )}

        <div>{children}</div>
      </div>
    </div>
  );
}

export default Modal;
