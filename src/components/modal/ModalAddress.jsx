import { useEffect, useState } from "react";
import Modal from "./Modal";
import { IoIosSearch } from "react-icons/io";
import { getAddressAPI } from "../../server/server";
import { useInView } from "react-intersection-observer";

export const ModalAddress = ({ onClose, setAddress }) => {
  const [ref, inView] = useInView();
  const [values, setValues] = useState({
    address: "",
    search: false,
    totalCount: 0,
  });
  const [page, setPage] = useState(1);
  const [searchData, setSearchData] = useState();

  // 검색
  const handleSubmit = async (e) => {
    e.preventDefault();
    getAddressAPI(1, 10, values.address)
      .then((res) => {
        setValues({ ...values, search: true, totalCount: res.data.totalCount });
        setSearchData(res.data.items);
        setPage(2);
      })
      .catch((e) => {
        console.log(`e`, e);
      });
  };

  // 검색 후 무한 스크롤
  useEffect(() => {
    if (inView) {
      getAddress();
    }
  }, [inView]);
  const getAddress = () => {
    getAddressAPI(page, 10, values.address)
      .then((res) => {
        setSearchData([...searchData, ...res.data.items]);
        setPage((page) => page + 1);
      })
      .catch((e) => {
        console.log(`e`, e);
      });
  };

  // 주소 선택
  const onClickAddress = (zipCode, address, jibunAddress) => {
    setAddress(zipCode, address, jibunAddress);
  };

  return (
    <Modal onClose={onClose} title={"주소찾기"}>
      <div className="address-search-header">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="address"
            placeholder="도로명 + 건물번호, 건물명, 지번"
            value={values.address}
            onChange={(e) => setValues({ ...values, address: e.target.value })}
          />
          <button type="submit">
            <IoIosSearch size={30} />
          </button>
        </form>
        <div>도로명, 건물명, 지번에 대해 통합검색이 가능합니다.</div>
      </div>
      <div>
        {values.search ? (
          <div>
            <div className="address-search-totalCount">
              <div>전체 검색 결과</div>
              <div className="address-search-totalCount-num">
                {values.totalCount}
              </div>
            </div>
            <div className="address-search-list">
              {searchData.map((item, index) => (
                <button
                  key={item.zipCode + index}
                  className="address-search-list-btn"
                  onClick={() =>
                    onClickAddress(
                      item.zipCode,
                      item.address,
                      item.jibunAddress
                    )
                  }
                >
                  <div className="address-search-list-zipCode">
                    {item.zipCode}
                  </div>
                  <div className="address-search-list-item">
                    <div>도로명</div>
                    <p>{item.address}</p>
                  </div>
                  <div className="address-search-list-item">
                    <div>지번</div>
                    <p>{item.jibunAddress}</p>
                  </div>
                </button>
              ))}
              <div ref={ref} className="address-search-ref"></div>
            </div>
          </div>
        ) : (
          <ul>
            <li>
              TIP! 이렇게 검색해보세요. 도로명 + 건물번호 (예: 월드컵로 10길 9)
            </li>
            <li>지역명 + (동/읍/면/리) + 지번 (예: 서교동 476-25)</li>
            <li>건물명(아파트명) (예: 반포자이아파트)</li>
          </ul>
        )}
      </div>
    </Modal>
  );
};
