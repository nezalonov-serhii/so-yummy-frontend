import { useSearchParams } from "react-router-dom";
import {
   SearchFormBox,
   SearchFormInput,
   ErrorText,
   SearchFormContainer
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
export const CommonSearchForm = ({ CustomButtonComponent }) => {
   const [searchParams, setSearchParams] = useSearchParams();
   const handleSubmit = (values, { resetForm }) => {
      ;

      resetForm();
   };
   //   const submitSearch = e => {
   //   e.preventDefault();
   //   const form = e.currentTarget;
   //   setSearchParams({ query: form.elements.query.value });
   //   form.reset();
   // };

   // const inputSearch = e => {

   //   // e.preventDefault();
   //   const input = e.currentTarget;
   //   setSearchParams({ query: input.value });

   // form.reset();
   // };
   const query = searchParams.get("query");
   return (
      <SearchFormContainer>
      <Formik initialValues={initialValue} onSubmit={handleSubmit} validationSchema={userSchema}>
         <SearchFormBox>
            <SearchFormInput
               type="text"
               name="query"
               placeholder="Enter the text"
               value={query}

               // onChange={this.handleStateInput}
               // id="inputName"
               // required
            />

            <ErrorText name="query" component="div" />
            <CustomButtonComponent type="submit">Search</CustomButtonComponent>
         </SearchFormBox>
      </Formik>
      </SearchFormContainer>
   );
};
