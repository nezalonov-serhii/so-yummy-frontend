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
const initialValue = {
   query: "",
};

export const CommonSearchForm = ({
   CustomButtonComponent,
   SearchFormContainer,
   handleSearchFormInput,

}) => {
   
   const [searchParams, setSearchParams] = useSearchParams();
   const [queryValue, setQueryValue] = useState("");
   const submitButtonRef = useRef(null);
  
useEffect(() => {
    const valueInput = searchParams.get("query")
   
      setQueryValue(valueInput)
      //  setQueryValue(valueInput??queryValue)
      if (queryValue&&queryValue.length>=3) {
         console.log("CommonSearchForm useEffect:",queryValue)
         handleSearchFormInput(queryValue);
       
        }
 
}, [queryValue]);
   
   const value = searchParams.get("query")

   const handleSubmit = (values, { resetForm }) => {
   //  console.log("onSubmit:",values.query)
     handleSearchFormInput(value ?? values.query);
      
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
