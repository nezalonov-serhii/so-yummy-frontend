import { useSearchParams } from "react-router-dom";
// import { useState } from "react";
import {
   SearchFormBox,
   SearchFormInput,
   ErrorText
} from "./CommonSearchForm.styled";
// import { Formik, Form, Field, ErrorMessage } from 'formik';
import { Formik } from "formik";
import * as Yup from "yup";

const userSchema = Yup.object({
   query: Yup.string()
      .matches(/^[A-Za-z\s_-]+$/, "Invalid query")
      .required("Please fill field"),
});

const initialValue = {
   query: "",
};
export const CommonSearchForm = ({ CustomButtonComponent, SearchFormContainer,handleSearchFormInput }) => {
   const [searchParams, setSearchParams] = useSearchParams();
   // const [searchInputValue, setSearchInputValue] = useState('');

   const handleSubmit = (values, { resetForm }) => {
      handleSearchFormInput(values.query)
      resetForm();
   };
   
 

 
   
   const query = searchParams.get("query")
   return (
      <SearchFormContainer>
         <Formik initialValues={initialValue} onSubmit={handleSubmit} validationSchema={userSchema}>{({values,handleChange,handleBlur})=>(
            <SearchFormBox>
               <SearchFormInput
                  type="text"
                  name="query"
                  placeholder="Enter the text"
                  // value={query?query:searchInputValue}
                  value={query??values.query}
                  // onChange={handleChange}
                  // onBlur = {handleBlur}
                  // id="inputName"
                  required
               />

               <ErrorText name="query" component="div" />
               <CustomButtonComponent type="submit">Search</CustomButtonComponent>
            </SearchFormBox>
)}
      </Formik>
      </SearchFormContainer>
   );
};
