import { useSearchParams } from "react-router-dom";
import { useEffect, useState, useRef } from "react";

import { Formik } from "formik";
import * as Yup from "yup";



import { SearchFormBox, SearchFormInput, ErrorText } from "./CommonSearchForm.styled";


// const initialValue = {
//    query: "",
// };

export const CommonSearchForm = ({
   CustomButtonComponent,
   SearchFormContainer,
   handleSearchFormInput,

}) => {
const [searchParams, setSearchParams] = useSearchParams();

   const userSchema = Yup.object({
      query: Yup.string()
      .default(searchParams.get("query"))
      .min(3,"At least 3 characters")
      .matches(/^[A-Za-z\s_-]+$/, "Invalid query")
      .required("Please fill field"),
});   



   
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
         <Formik initialValues={{query:""}} onSubmit={handleSubmit} validationSchema={userSchema}>
            {({ values, handleChange, handleBlur }) => (
               <SearchFormBox>
                  <SearchFormInput
                     type="text"
                     name="query"
                     placeholder="Enter the text"
                     onChange={(e) => {
                        
                        setSearchParams({query:e.target.value })
                        handleChange(e)
                     }}
                     onBlur={handleBlur}
                     value={value??values.query}
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
