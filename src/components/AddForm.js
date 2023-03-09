import React from "react";
import { useState } from "react";
import LinkButton from "./LinkButton";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "./styles/Button.styled";
import { StyledForm } from "./styles/Form.styled";
import { StyledFormWrapper } from "./styles/FormWrapper.styled";
import { StyledInput } from "./styles/Input.styled";

const AddForm = () => {
  const [values, setValues] = useState({
    name: "",
    country: "",
    city: "",
    item: "",
    image: "",
    email: "",
    price: "",
  });

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    console.log(values);
    event.preventDefault();
    try {
      const response = await axios.post("https://6400dc59ab6b7399d09ce778.mockapi.io/posts", values);
      if (!response.statusText === "OK") {
        throw new Error("Could not get post");
      }
    } catch (error) {
      console.log(error);
    }
    navigate("/posts");
  };

  function changeHandler(e) {
    const name = e.target.name;
    const value = e.target.value;
    setValues({ ...values, [name]: value });
  }

  return (
    <StyledFormWrapper>
      <StyledForm onSubmit={handleSubmit}>
        <div className="input-wrapper">
          <label>Name:</label>
          <StyledInput name="name" type="text" value={values.name || ""} onChange={changeHandler} />
        </div>
        <div className="input-wrapper">
          <label>Country:</label>
          <StyledInput name="country" type="text" value={values.country || ""} onChange={changeHandler} />
        </div>
        <div className="input-wrapper">
          <label>City:</label>
          <StyledInput name="city" type="text" value={values.city || ""} onChange={changeHandler} />
        </div>
        <div className="input-wrapper">
          <label>Item:</label>
          <StyledInput name="item" type="text" value={values.item || ""} onChange={changeHandler} />
        </div>
        <div className="input-wrapper">
          <label>Item image:</label>
          <StyledInput name="image" type="text" value={values.image || ""} onChange={changeHandler} />
        </div>
        <div className="input-wrapper">
          <label>Email:</label>
          <StyledInput name="email" type="text" value={values.email || ""} onChange={changeHandler} />
        </div>
        <div className="input-wrapper">
          <label>Price:</label>
          <StyledInput name="price" type="number" value={values.price || ""} onChange={changeHandler} />
        </div>
        <Button type="submit" margintop="30px" marginleft="120px">
          Add
        </Button>
        <LinkButton to="/posts" margintop="30px" marginleft="120px">
          Back
        </LinkButton>
      </StyledForm>
    </StyledFormWrapper>
  );
};

export default AddForm;
