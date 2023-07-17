import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { Header } from "../Header/Header";
import Loader from "../Loader/Loader";
import Background from "../Background";
import { useDispatch, useSelector } from "react-redux";
import { selectToken } from "../../redux/selector/selectors";

import Footer from "../Footer/Footer";
import { switcherTheme } from "../../redux/Slice/themeSwitcherSlice/themeSwitcherSlice";

const SharedLayout = () => {
   const isAuthorize = useSelector(selectToken);
   const dispatch = useDispatch();

   return (
      <>
         <input
            type="checkbox"
            onChange={() => {
               dispatch(switcherTheme());
            }}
            style={{
               width: "70px",
               height: "70px",
               display: "block",
               marginLeft: "auto",
               marginRight: "auto",
            }}
         />

         {isAuthorize && (
            <Background>
               <Header />
               <Suspense fallback={<Loader />}>
                  <Outlet />
               </Suspense>
               <Footer />
            </Background>
         )}
         {!isAuthorize && (
            <Suspense fallback={<Loader />}>
               <Outlet />
            </Suspense>
         )}
      </>
   );
};

export default SharedLayout;
