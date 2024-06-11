import React, { useState, useEffect } from 'react';
import axios from 'axios';
import DeleteRecipe from './DeleteRecipe';
import EditRecipe from './EditRecipe';
import './CreateRecipe.css';

const RecipeList = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/get')
      .then(response => setRecipes(response.data))
      .catch(error => console.error('Error fetching recipes:', error));
  }, []);

  return (
    <div>
      <h2>Recipes</h2>
      <ul>
        {recipes.map(recipe => (
          <li key={recipe._id} className="recipe">
            <div>
              <EditRecipe id={recipe._id} title={recipe.title} ingredients={recipe.ingredients} />
              <DeleteRecipe recipe={recipe} setRecipes={setRecipes} recipes={recipes} />
            </div>
            <br />
            <h3>{recipe.title}</h3>
            <p>{recipe.ingredients}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecipeList;
