import {
  TextField,
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  FormLabel,
} from "@mui/material";
import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddRecipe = () => {
  const navigate = useNavigate();
  const [inputs, setInputs] = useState({
    name: "",
    ingredients: "",
    cookingTime: "",
    preparation: "",

    notes: "",
    image: "",
    available: "",
  });
  const [checked, setChecked] = useState(false);
  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
    // console.log(e.target.name, "Value", e.target.value);
  };

  const sendRequest = async () => {
    await axios
      .post("http://localhost:5000/recipe/add", {
        name: String(inputs.name),
        ingredients: String(inputs.ingredients),
        cookingTime: Number(inputs.cookingTime),
        preparation: String(inputs.preparation),
        notes: String(inputs.notes),
        image: String(inputs.image),
        available: Boolean(checked),
      })
      .then((res) => res.data);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputs, checked);
    sendRequest().then(() => navigate("/"));
  };

  return (
    <div>
      {inputs && (
        <form onSubmit={handleSubmit}>
          <Box
            display="flex"
            flexDirection="column"
            justifyContent={"center"}
            alignContent={"center"}
            alignSelf="center"
            marginLeft={"150px"}
            marginRight="150px"
            marginTop={10}
          >
            <FormLabel>Recipe Name</FormLabel>
            <TextField
              value={inputs.name}
              onChange={handleChange}
              margin="normal"
              fullWidth
              variant="outlined"
              name="name"
            />

            <FormLabel>Ingredients</FormLabel>
            <TextField
              value={inputs.ingredients}
              onChange={handleChange}
              margin="normal"
              fullWidth
              variant="outlined"
              name="ingredients"
            />

            <FormLabel>Cooking Time (min)</FormLabel>

            <TextField
              value={inputs.cookingTime}
              onChange={handleChange}
              type="number"
              margin="normal"
              fullWidth
              variant="outlined"
              name="cookingTime"
            />

            <FormLabel>Preparation</FormLabel>

            <TextField
              value={inputs.preparation}
              onChange={handleChange}
              margin="normal"
              variant="outlined"
              name="preparation"
            />

            <FormLabel>Notes</FormLabel>

            <TextField
              value={inputs.notes}
              onChange={handleChange}
              fullWidth
              margin="normal"
              variant="outlined"
              name="notes"
            />

            <FormLabel>Image URL</FormLabel>

            <TextField
              value={inputs.image}
              onChange={handleChange}
              fullWidth
              margin="normal"
              variant="outlined"
              name="image"
            />

            <FormControlLabel
              control={
                <Checkbox
                  checked={checked}
                  onChange={() => setChecked(!checked)}
                />
              }
              label="Available"
            />

            <Button variant="contained" type="submit">
              Submit
            </Button>
          </Box>
        </form>
      )}
    </div>
  );
};

export default AddRecipe;
