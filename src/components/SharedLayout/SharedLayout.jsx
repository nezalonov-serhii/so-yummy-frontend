import { Suspense } from "react";
import { Outlet, useParams } from "react-router-dom";
import { Header } from "../Header/Header";
import Loader from "../Loader/Loader";
import Background from "../Background";
import { useSelector } from "react-redux";
import { selectToken } from "../../redux/selector/selectors";

import Footer from "../Footer/Footer";
import { useState } from "react";

const SharedLayout = () => {
   const isAuthorize = useSelector(selectToken);
   const [currentPage, setCurrentPage] = useState("");

   const { page } = useParams();

   console.log(page);

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
