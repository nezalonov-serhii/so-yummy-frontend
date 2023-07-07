import { ToastContainer } from "react-toastify";
import { Routes, Route } from "react-router-dom";
import { lazy, Suspense, useEffect } from "react";
import PrivateRoute from "./service/route/PrivateRoute";
import PublicRoute from "./service/route/PublicRoute";
import ShoppingListPage from "./page/ShoppingListPage/ShoppingListPage";
function App() {
   return (
      <>
      <ShoppingListPage/>
         <ToastContainer />
      </>
   );
}

export default App;
