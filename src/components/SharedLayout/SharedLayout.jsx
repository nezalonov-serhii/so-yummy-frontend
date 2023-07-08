import { Suspense } from "react";
import { Outlet } from "react-router-dom";

import { Header } from "../Header/Header";
// import { Footer } from "../Footer/Footer";
import Loader from "../Loader/Loader";
import { useSelector } from "react-redux";
import { selectToken } from "../../redux/selector/selectors";
import {Footer } from "../../Loyaut/Footer/Footer"

const SharedLayout = () => {
   const isAuthorize = useSelector(selectToken);
   return (
      <div>
         {isAuthorize && <Header />}
         <Suspense fallback={<Loader />}>
            <Outlet />
         </Suspense>
         {isAuthorize && <Footer />}
      </div>
   );
};

export default SharedLayout;
