import { useSearchParams } from "react-router-dom";
import { useEffect, useState, useRef } from "react";

import { Formik } from "formik";
import * as Yup from "yup";

import {
  SearchFormBox,
  SearchFormInput,
  ErrorText,
} from "./CommonSearchForm.styled";

export const CommonSearchForm = ({
  CustomButtonComponent,
  SearchFormContainer,
  handleSearchFormInput,
}) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const valueInput = searchParams.get("query");

  const userSchema = Yup.object({
    query: Yup.string()
      .default(valueInput)
      .min(3, "At least 3 characters")
      .matches(/^[A-Za-z\s_-]+$/, "Invalid query")
      .required("Please fill field"),
  });

  const [queryValue, setQueryValue] = useState("");
  const submitButtonRef = useRef(null);

  useEffect(() => {
    setQueryValue(valueInput);
    if (queryValue && queryValue.length >= 3) {
      handleSearchFormInput(queryValue);
    }
  }, [queryValue]);

  const handleSubmit = (values) => {
    handleSearchFormInput(valueInput ?? values.query);
    submitButtonRef.current.blur();
  };

  return (
    <SearchFormContainer>
      <Formik
        initialValues={{ query: "" }}
        onSubmit={handleSubmit}
        validationSchema={userSchema}
      >
        {({ values, handleChange, handleBlur }) => (
          <SearchFormBox>
            <SearchFormInput
              type="text"
              name="query"
              placeholder="Enter the text"
              onChange={(e) => {
                setSearchParams({ query: e.target.value });
                handleChange(e);
              }}
              onBlur={handleBlur}
              value={valueInput ?? values.query}
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
