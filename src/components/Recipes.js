import React, { useEffect, useState } from "react";
import "./Recipes.css";
import axios from "axios";
import { Button } from "@mui/material";
import { useNavigate } from "react-router";
import "./Recipes.css";
const URL = "http://localhost:5000/recipe/getall";

const fetchHandler = async () => {
  return await axios.get(URL).then((res) => res.data);
  // .then((res) => console.log(res));
};

const Recipes = () => {
  const [recipes, setRecipes] = useState();
  console.log(recipes);
  useEffect(() => {
    fetchHandler().then((data) => setRecipes(data.recipe));
  }, []);

  return (
    <div>
      <ul>
        {recipes &&
          recipes.map((recipe, i) => (
            <li key={i}>
              <Recipe recipe={recipe} />
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Recipes;

const Recipe = (data) => {
  const navigate = useNavigate();
  const { _id, name, ingredients, cookingTime, preparation, notes, image } =
    data.recipe;

  const deleteHandler = async () => {
    await axios
      .delete(`http://localhost:5000/recipe/delete/${_id}`)
      .then((res) => console.log(res.data))
      .then(() => navigate("/"))
      .then(() => navigate("/recipes"));
  };

  return (
    <>
      <div className="card">
        <img src={image} alt={name} />
        <h3>{name} </h3>
        <p> Ingredients: {ingredients} </p>
        <h3>{cookingTime} </h3>
        <p>{preparation} </p>
        <p>{notes} </p>
      </div>

      <div>
        <Button
          onClick={deleteHandler}
          sx={{ mt: "auto", marginLeft: "3.5rem" }}
        >
          Delete
        </Button>

        <Button sx={{ mt: "auto" }}>Edit</Button>
      </div>
    </>
  );
};
