import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import LinkButton from "./LinkButton";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Button } from "./styles/Button.styled";
import { FlexColumn } from "./styles/FlexColumn.styled";
import { StyledForm } from "./styles/Form.styled";
import { StyledFormWrapper } from "./styles/FormWrapper.styled";
import { StyledInput } from "./styles/Input.styled";
import { Flex } from "./styles/Flex.styled";

const EditForm = () => {
  const [values, setValues] = useState({
    name: "",
    country: "",
    city: "",
    item: "",
    image: "",
    email: "",
    price: "",
  });
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    loadPost();
  }, []);

  const loadPost = async () => {
    const result = await axios.get(`https://6400dc59ab6b7399d09ce778.mockapi.io/posts/${id}`);
    setValues(result.data);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setValues({ ...values, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.put(`https://6400dc59ab6b7399d09ce778.mockapi.io/posts/${id}`, values);
    } catch (error) {
      console.log(error);
    }
    navigate("/posts");
  };

  const handleDelete = async () => {
    try {
      await axios.delete(`https://6400dc59ab6b7399d09ce778.mockapi.io/posts/${id}`);
    } catch (error) {
      console.error(error);
    }
    navigate("/posts");
  };

  return (
    <StyledFormWrapper>
      <StyledForm onSubmit={handleSubmit}>
        <div className="input-wrapper">
          <label htmlFor="name">Name</label>
          <StyledInput type="text" name="name" value={values.name} onChange={handleChange} />
        </div>
        <div className="input-wrapper">
          <label htmlFor="avatar">Avatar</label>
          <StyledInput type="text" name="avatar" value={values.avatar} onChange={handleChange} />
        </div>
        <div className="input-wrapper">
          <label htmlFor="country">Country</label>
          <StyledInput type="text" name="country" value={values.country} onChange={handleChange} />
        </div>
        <div className="input-wrapper">
          <label htmlFor="city">City</label>
          <StyledInput type="text" name="city" value={values.city} onChange={handleChange} />
        </div>
        <div className="input-wrapper">
          <label htmlFor="item">Item</label>
          <StyledInput type="text" name="item" value={values.item} onChange={handleChange} />
        </div>
        <div className="input-wrapper">
          <label htmlFor="image">Image</label>
          <StyledInput type="text" name="image" value={values.image} onChange={handleChange} />
        </div>
        <div className="input-wrapper">
          <label htmlFor="email">Email</label>
          <StyledInput type="email" name="email" value={values.email} onChange={handleChange} />
        </div>
        <div className="input-wrapper">
          <label htmlFor="price">Price</label>
          <StyledInput type="number" name="price" value={values.price} onChange={handleChange} />
        </div>
        <div className="form-actions">
          <Flex>
            <Button type="submit" margintop="10px" marginleft="55px">
              Save
            </Button>
            <Button type="button" onClick={handleDelete} margintop="10px" marginleft="55px" hoverbg="#A60F26" hovercolor="#fff" opa="1" transform="1">
              Delete
            </Button>
            <LinkButton to="/posts" margintop="10px" marginleft="55px">
              Back
            </LinkButton>
          </Flex>
        </div>
      </StyledForm>
    </StyledFormWrapper>
  );
};

export default EditForm;
