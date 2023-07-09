import React, { useState } from "react";

import {
    Form,
    Input,
    Button
} from "./SearchForm.styled"


const SearchForm = () => {
    const [searchTerm, setSearchTerm] = useState("");
  
    const handleInputChange = (event) => {
      setSearchTerm(event.target.value);
    };
  
    const handleSubmit = (event) => {
      event.preventDefault();
      console.log("Search term:", searchTerm);
    };
  
    return (
      <Form>
        <Input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={handleInputChange}
        />
        <Button type="submit" onClick={handleSubmit}>
          Search
        </Button>
      </Form>
    );
  };
  
  export default SearchForm;
