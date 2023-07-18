import { Suspense } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState } from "react";
import { useEffect } from "react";

import { Header } from "../Header/Header";
import Loader from "../Loader/Loader";
import Background from "../Background";
import Footer from "../Footer/Footer";

import { selectToken } from "../../redux/selector/selectors";

const SharedLayout = () => {
   const isAuthorize = useSelector(selectToken);
   const [currentPage, setCurrentPage] = useState("");
   const { pathname } = useLocation();

   useEffect(() => {
      setCurrentPage(pathname);
   }, [pathname]);

   return (
      <>
         {isAuthorize && (
            <Background>
               <Header page={currentPage} />
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
