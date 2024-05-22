import logo from "../../assets/images/logo_hyunsun.png";

import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import { useSetRecoilState } from "recoil";
import { categoriesList } from "../../store/categoriesList";

import { RxHamburgerMenu } from "react-icons/rx";
import { FiShoppingCart } from "react-icons/fi";
import { IoIosArrowRoundBack } from "react-icons/io";

import { menuOpen } from "../../store/menuOpen";
import { getMallAPI } from "../../server/server";

export const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const setCategories = useSetRecoilState(categoriesList);
  const setMenu = useSetRecoilState(menuOpen);

  useEffect(() => {
    getMall();
  }, []);

  const getMall = () => {
    getMallAPI()
      .then((res) => {
        setCategories(res.data.categories.flatCategories);
      })
      .catch((e) => {
        console.log(`e`, e);
      });
  };

  return (
    <header>
      {location.pathname === "/" ? (
        <div className="header-main">
          <button
            onClick={() => {
              setMenu(true);
            }}
          >
            <RxHamburgerMenu size={30} />
          </button>
          <img src={logo} alt="logo" className="logo-hyunsun" />
          <Link to={"/cart"}>
            <FiShoppingCart size={30} />
          </Link>
        </div>
      ) : (
        <div className="header-sub">
          <button onClick={() => navigate(-1)}>
            <IoIosArrowRoundBack size={30} />
          </button>
          <p>{location.pathname}</p>
        </div>
      )}
    </header>
  );
};
