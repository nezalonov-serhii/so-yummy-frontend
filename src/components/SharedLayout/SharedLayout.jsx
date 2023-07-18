import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { Header } from "../Header/Header";
import Loader from "../Loader/Loader";
import Background from "../Background";
import { useSelector } from "react-redux";
import { selectToken } from "../../redux/selector/selectors";

import Footer from "../Footer/Footer";

const SharedLayout = () => {
   const isAuthorize = useSelector(selectToken);

   return (
      <>
         {isAuthorize && (
            <Background>
               <Header />
               <main>
                  <Suspense fallback={<Loader />}>
                     <Outlet />
                  </Suspense>
               </main>
               <Footer />
            </Background>
         )}
         {!isAuthorize && (
            <Suspense fallback={<Loader />}>
               <main>
                  <Outlet />
               </main>
            </Suspense>
         )}
      </>
   );
};

export default SharedLayout;
