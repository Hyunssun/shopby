import { useRoutes } from "react-router-dom";
import { Layout } from "../layout/Layout";
import { NotFound } from "../pages/notFound/NotFound.jsx";
import { Main } from "../pages/main/Main";
import { Cart } from "../pages/cart/Cart";
import { Login } from "../pages/member/login/Login";
import { JoinMenu } from "../pages/member/join/JoinMenu";
import { JoinShop } from "../pages/member/join/JoinShop";
import { JoinConfirm } from "../pages/member/join/JoinConfirm";
import { FindId } from "../pages/member/find/FindId";
import { FindPw } from "../pages/member/find/FindPw";
import { Mypage } from "../pages/member/mypage/Mypage";
import { Coupon } from "../pages/member/mypage/coupon/Coupon";
import { Like } from "../pages/member/mypage/like/Like";
import { Accumulation } from "../pages/member/mypage/accumulation/Accumulation.jsx";
import { Orders } from "../pages/member/mypage/orders/Orders.jsx";
import { ProductReview } from "../pages/member/mypage/product-review/ProductReview.jsx";
import { ProductInquiry } from "../pages/member/mypage/product-inquiry/ProductInquiry.jsx";
import { PersonalInquiry } from "../pages/member/mypage/personal-inquiry/PersonalInquiry.jsx";
import { ShippingAddress } from "../pages/member/mypage/shipping-address/ShippingAddress.jsx";
import { MemberModification } from "../pages/member/member-modification/MemberModification.jsx";
import { CustomerCenter } from "../pages/customer-center/CustomerCenter.jsx";
import { Claims } from "../pages/member/mypage/claims/Claims.jsx";
import { Notice } from "../pages/notice/Notice.jsx";

const MyRouter = () => {
  let element = useRoutes([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Main />,
        },
        {
          path: "cart",
          element: <Cart />,
        },
        // member
        {
          path: "login",
          element: <Login />,
        },
        {
          path: "join",
          element: <JoinMenu />,
        },
        {
          path: "join-shop",
          element: <JoinShop />,
        },
        {
          path: "complete",
          element: <JoinConfirm />,
        },
        {
          path: "find-id",
          element: <FindId />,
        },
        {
          path: "find-pw",
          element: <FindPw />,
        },
        {
          path: "member-modification",
          element: <MemberModification />,
        },
        {
          path: "customer-center",
          element: <CustomerCenter />,
        },
        {
          path: "notice",
          element: <Notice />,
        },
        {
          path: "mypage",
          children: [
            {
              path: "/mypage",
              element: <Mypage />,
            },
            {
              path: "coupon",
              element: <Coupon />,
            },
            {
              path: "accumulation",
              element: <Accumulation />,
            },
            {
              path: "like",
              element: <Like />,
            },
            {
              path: "orders",
              element: <Orders />,
            },
            {
              path: "claims",
              element: <Claims />,
            },
            {
              path: "product-review",
              element: <ProductReview />,
            },
            {
              path: "product-inquiry",
              element: <ProductInquiry />,
            },
            {
              path: "personal-inquiry",
              element: <PersonalInquiry />,
            },
            {
              path: "shipping-address",
              element: <ShippingAddress />,
            },
          ],
        },
      ],
    },

    {
      path: "*",
      element: <NotFound />,
    },
  ]);
  return element;
};

export default MyRouter;
