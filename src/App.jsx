import { lazy, Suspense, useEffect } from "react";
import { ToastContainer } from "react-toastify";
import { Routes, Route } from "react-router-dom";

import PrivateRoute from "./service/route/PrivateRoute";
import PublicRoute from "./service/route/PublicRoute";

import SharedLayout from "./components/SharedLayout/SharedLayout";

import { currentUserThunk } from "./redux/thunk/auth/authThunk";
import { useDispatch, useSelector } from "react-redux";
import { selectTheme, selectToken } from "./redux/selector/selectors";

import GlobalStyles from "./GlobalStyles";
import "react-toastify/dist/ReactToastify.css";

const AddRecipePage = lazy(() => import("./page/AddRecipePage/AddRecipePage"));
const CategoriesPage = lazy(() => import("./page/CategoriesPage/CategoriesPage"));
const FavoritePage = lazy(() => import("./page/FavoritePage/FavoritePage"));
const MainPage = lazy(() => import("./page/MainPage/MainPage"));
const MyRecipesPage = lazy(() => import("./page/MyRecipesPage/MyRecipesPage"));
const RecipePage = lazy(() => import("./page/RecipePage/RecipePage"));
const SearchPage = lazy(() => import("./page/SearchPage/SearchPage"));
const ShoppingListPage = lazy(() => import("./page/ShoppingListPage/ShoppingListPage"));
const RegisterPage = lazy(() => import("./page/Auth/RegisterPage/RegisterPage"));
const SigninPage = lazy(() => import("./page/Auth/SigninPage/SigninPage"));
const WelcomePage = lazy(() => import("./page/WelcomePage/WelcomePage"));
const ErrorPage = lazy(() => import("./page/ErrorPage/ErrorPage"));

function App() {
   const token = useSelector(selectToken);
   const dispatch = useDispatch();
   useEffect(() => {
      token && dispatch(currentUserThunk(token));
   }, [dispatch, token]);
   const theme = useSelector(selectTheme);

   return (
      <>
         <GlobalStyles darkThem={theme} />
         <ToastContainer />
         <Routes>
            <Route path="/" element={<SharedLayout />}>
               <Route
                  index
                  element={
                     <PublicRoute>
                        <WelcomePage />
                     </PublicRoute>
                  }
               />
               <Route
                  path="register"
                  element={
                     <PublicRoute>
                        <RegisterPage />
                     </PublicRoute>
                  }
               />
               <Route
                  path="signin"
                  element={
                     <Suspense>
                        <PublicRoute>
                           <SigninPage />
                        </PublicRoute>
                     </Suspense>
                  }
               />
               <Route
                  path="main"
                  element={
                     <Suspense>
                        <PrivateRoute>
                           <MainPage />
                        </PrivateRoute>
                     </Suspense>
                  }
               />
               <Route
                  path="categories/:categoryName"
                  element={
                     <Suspense>
                        <PrivateRoute>
                           <CategoriesPage />
                        </PrivateRoute>
                     </Suspense>
                  }
               />
               <Route
                  path="add"
                  element={
                     <Suspense>
                        <PrivateRoute>
                           <AddRecipePage />
                        </PrivateRoute>
                     </Suspense>
                  }
               />
               <Route
                  path="favorite"
                  element={
                     <Suspense>
                        <PrivateRoute>
                           <FavoritePage />
                        </PrivateRoute>
                     </Suspense>
                  }
               />
               <Route
                  path="recipe/:recipeId"
                  element={
                     <Suspense>
                        <PrivateRoute>
                           <RecipePage />
                        </PrivateRoute>
                     </Suspense>
                  }
               />
               <Route
                  path="my"
                  element={
                     <Suspense>
                        <PrivateRoute>
                           <MyRecipesPage />
                        </PrivateRoute>
                     </Suspense>
                  }
               />
               <Route
                  path="search"
                  element={
                     <Suspense>
                        <PrivateRoute>
                           <SearchPage />
                        </PrivateRoute>
                     </Suspense>
                  }
               />
               <Route
                  path="shopping-list"
                  element={
                     <Suspense>
                        <PrivateRoute>
                           <ShoppingListPage />
                        </PrivateRoute>
                     </Suspense>
                  }
               />
               <Route
                  path="*"
                  element={
                     <Suspense>
                        <ErrorPage />
                     </Suspense>
                  }
               />
            </Route>
            <Route path="*" element={<SharedLayout />} />
         </Routes>
      </>
   );
}

export default App;
