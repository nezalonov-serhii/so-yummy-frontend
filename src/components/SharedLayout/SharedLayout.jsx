import { Suspense } from "react";
import { Outlet } from "react-router-dom";

import { Header } from "../Header/Header";
import { Footer } from "../Footer/Footer";
import Loader from "../Loader/Loader";
import { useSelector } from "react-redux";
import { selectToken } from "../../redux/selector/selectors";

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
