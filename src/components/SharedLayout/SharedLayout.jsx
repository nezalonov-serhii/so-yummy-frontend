import { Suspense } from "react";
import { Outlet } from "react-router-dom";

import { Header } from "../Header/Header";
import Loader from "../Loader/Loader";
import { useSelector } from "react-redux";
import { selectToken } from "../../redux/selector/selectors";
import Footer from "./Footer/Footer";

const SharedLayout = () => {
   const isAuthorize = useSelector(selectToken);
   return (
      <>
         {isAuthorize && <Header />}
         <Suspense fallback={<Loader />}>
            <Outlet />
         </Suspense>
         {isAuthorize && <Footer />}
      </>
   );
};

export default SharedLayout;
