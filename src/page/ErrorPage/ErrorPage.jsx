import React from "react";

import NotFound from "../../components/NotFound/NotFound";
import { Title } from "../../components/Title/Title";

const ErrorPage = () => {
   return (
      <>
         <Title />
         <NotFound>but the page you were looking for can’t be found..</NotFound>
      </>
   );
};

export default ErrorPage;
