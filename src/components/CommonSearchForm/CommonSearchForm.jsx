import { useSearchParams } from "react-router-dom";
import { useEffect, useState, useRef } from "react";
import { useDispatch } from "react-redux";
import { Formik } from "formik";
import * as Yup from "yup";

import { setSearch } from "../../redux/Slice/searchSelectSlice/searchSelectSlice";

import { SearchFormBox, SearchFormInput, ErrorText } from "./CommonSearchForm.styled";

const userSchema = Yup.object({
   query: Yup.string()
      .min(3,"At least 3 characters")
      .matches(/^[A-Za-z\s_-]+$/, "Invalid query")
      .required("Please fill field"),
});

export const CommonSearchForm = ({
   CustomButtonComponent,
   SearchFormContainer,
   handleSearchFormInput,
   initialQuery,
}) => {
   const dispatch = useDispatch();
   const [searchParams, setSearchParams] = useSearchParams();
   const [query, setQuery] = useState("");
   const submitButtonRef = useRef(null);

   useEffect(() => {
      const queryFromURL = searchParams.get("query");
      setQuery(initialQuery || queryFromURL || "");
   }, [searchParams, initialQuery]);

   const handleSubmit = (values, { resetForm }) => {
      dispatch(setSearch("Title"));
      console.log("qwe");

      setSearchParams({ query: values.query });
      handleSearchFormInput(values.query);
      resetForm();
      submitButtonRef.current.blur();
   };

   return (
      <SearchFormContainer>
         <Formik initialValues={{ query }} onSubmit={handleSubmit} validationSchema={userSchema}>
            {({ values, handleChange, handleBlur }) => (
               <SearchFormBox>
                  <SearchFormInput
                     type="text"
                     name="query"
                     placeholder="Enter the text"
                     onChange={handleChange}
                     onBlur={handleBlur}
                     value={values.query}
                     required
                  />
                  <ErrorText name="query" component="div" />
                  <CustomButtonComponent type="submit" ref={submitButtonRef}>
                     Search
                  </CustomButtonComponent>
               </SearchFormBox>
            )}
         </Formik>
      </SearchFormContainer>
   );
};
