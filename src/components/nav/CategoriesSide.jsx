import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { Link } from "react-router-dom";
import { categoriesList } from "../../store/categoriesList";
import { menuOpen } from "../../store/menuOpen";
import { accessToken } from "../../store/accessToken";
import { FaXmark } from "react-icons/fa6";
import { LuChevronRight } from "react-icons/lu";
import { goPath } from "../../store/goPath";
import { profileInfo } from "../../store/profileInfo";

export const CategoriesSide = () => {
  const token = useRecoilValue(accessToken);
  const categories = useRecoilValue(categoriesList);
  const setPath = useSetRecoilState(goPath);
  const [menu, setMenu] = useRecoilState(menuOpen);
  const name = useRecoilValue(profileInfo);

  const menuClose = () => {
    setMenu(false);
  };
  return (
    <div>
      {menu ? (
        <div className="categories-side">
          <div className="categories-header">
            {token ? (
              <div>
                <Link to={"/mypage"} onClick={menuClose}>
                  {name}
                </Link>
                님
              </div>
            ) : (
              <div>
                <Link
                  to={"/login"}
                  onClick={() => {
                    menuClose();
                    setPath("/");
                  }}
                >
                  로그인
                </Link>
                을 해주세요
              </div>
            )}
            <button onClick={menuClose}>
              <FaXmark size={30} color="#F5F5FB" />
            </button>
          </div>
          <div className="categories-list">
            {categories.map((item, index) => {
              return (
                <Link
                  to={item.depth1CategoryNo}
                  key={item.depth1CategoryNo + index}
                  className="categories-list-item"
                  onClick={menuClose}
                >
                  <div>{item.depth1Label}</div>
                  <div>
                    <LuChevronRight size={30} color="#7E7F7F" />
                  </div>
                </Link>
              );
            })}
          </div>

          <div className="categories-footer">
            <Link to={"/notice"} onClick={menuClose}>
              공지사항
            </Link>
            <Link to={"/customer-center"} onClick={menuClose}>
              고객센터
            </Link>
          </div>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
};
