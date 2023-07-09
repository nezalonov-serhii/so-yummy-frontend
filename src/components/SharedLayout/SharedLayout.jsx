import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { Header } from "../Header/Header";
import Loader from "../Loader/Loader";
import { useSelector } from "react-redux";
import { selectToken } from "../../redux/selector/selectors";
import Footer from "../../Loyaut/Footer/Footer";
import Background from "../Background";

const SharedLayout = () => {
   const isAuthorize = useSelector(selectToken);
   return (
      <Background>
      {isAuthorize && <Header />}
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      {isAuthorize && <Footer />}
      </Background>
   );
};

export default SharedLayout;
