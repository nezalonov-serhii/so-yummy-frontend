import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { Header } from "../Header/Header";
import { Footer } from "../Footer/Footer";
import Loader from "../Loader/Loader";
import { useSelector } from "react-redux";
import { selectToken } from "../../redux/selector/selectors";
import { SharedLayoutWrapper,
   BackgroundImageLeft,
   BackgroundImageRight,
   BackgroundContent
} from "./SharedLayout.styled";


const SharedLayout = () => {
   const isAuthorize = useSelector(selectToken);
   return (
      <SharedLayoutWrapper>
      <BackgroundImageLeft />
      <BackgroundImageRight />
      <BackgroundContent>
      {isAuthorize && <Header />}
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      {isAuthorize && <Footer />}
      </BackgroundContent>
    </SharedLayoutWrapper>
   );
};

export default SharedLayout;
