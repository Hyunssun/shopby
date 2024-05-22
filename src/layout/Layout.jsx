import { Footer } from "../components/layout/Footer";
import { Header } from "../components/layout/Header";
import { useEffect } from "react";
import { scrollToTop } from "../utill/common";
import { NavBottom } from "../components/nav/NavBottom";
import { Outlet } from "react-router-dom";
import { CategoriesSide } from "../components/nav/CategoriesSide";

export const Layout = () => {
  useEffect(() => {
    scrollToTop();
  }, []);

  return (
    <div className="page-container">
      <div></div>
      <div className="page-inner">
        <article className="page-article">
          <figure>
            <div>
              <img
                width={"500px"}
                src="/src/assets/images/pc_left_banner.png"
              />
            </div>
          </figure>
        </article>
        <div className="page-content">
          <Header />
          <main className="l-content">
            <CategoriesSide />
            <Outlet />
          </main>
          <Footer />
          <NavBottom />
        </div>
      </div>
      <div></div>
    </div>
  );
};
