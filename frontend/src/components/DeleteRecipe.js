import React from 'react';
import axios from 'axios';
import './CreateRecipe.css';

const DeleteRecipe = ({ recipe, setRecipes, recipes }) => {
  const handleDelete = (id) => {
    axios.delete(`http://localhost:5000/api/recipes/${id}`)
      .then(response => {
        console.log('Recipe deleted:', response.data);
        // Remove the deleted recipe from the recipes state
        setRecipes(recipes.filter(recipe => recipe._id !== id));
      })
      .catch(error => {
        console.error('Error deleting recipe:', error);
      });
  }

  return(
    <div class="buttons-container">
      
      <button class="delete" onClick={() => handleDelete(recipe._id)}>Delete</button>
    </div>
  )


};

export default DeleteRecipe;
