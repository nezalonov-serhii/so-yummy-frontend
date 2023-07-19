import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Formik } from "formik";
import { toast } from "react-toastify";
import * as Yup from "yup";

import "react-toastify/dist/ReactToastify.css";
import { SearchFormBox, SearchFormInput } from "./SearchForm.styled";

const validationSchema = Yup.object().shape({
   query: Yup.string().required("Search term is required"),
});

const SearchForm = ({ CustomButtonComponent, SearchFormContainer }) => {
   const [searchTerm, setSearchTerm] = useState("");
   const navigate = useNavigate();

   const handleInputChange = (event) => {
      setSearchTerm(event.target.value);
   };

   const handleSubmit = (event) => {
      event.preventDefault();

      if (searchTerm) {
         navigate(`/search?query=${searchTerm}`);
      } else {
         toast.error("Please enter a search term.");
      }
   };

   return (
      <SearchFormContainer>
         <Formik
            initialValues={{ query: "" }}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
         >
            <SearchFormBox>
               <SearchFormInput
                  type="text"
                  placeholder="Search..."
                  name="query"
                  value={searchTerm}
                  onChange={handleInputChange}
               />
               <CustomButtonComponent type="submit" onClick={handleSubmit}>
                  Search
               </CustomButtonComponent>
            </SearchFormBox>
         </Formik>
      </SearchFormContainer>
   );
};

export default SearchForm;
