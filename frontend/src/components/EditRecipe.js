import React, { useState } from 'react';
import axios from 'axios';
import './CreateRecipe.css';

const EditRecipe = ({ id, title: initialTitle, ingredients: initialIngredients }) => {
  const [title, setTitle] = useState(initialTitle);
  const [ingredients, setIngredients] = useState(initialIngredients);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.put(`http://localhost:5000/api/recipes/${id}`, { id, title, ingredients })
      .then(response => {
        console.log('Recipe updated:', response.data);
        // Optionally update the UI after successful update
      })
      .catch(error => {
        console.error('Error updating recipe:', error);
        // Add code to handle error (e.g., show error message)
      });
      window.location.reload();
  };
  

  return (
    <div class="edit">
    
      <form onSubmit={handleSubmit}>
        <label><b>Title:</b></label>
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required />
        <label><b>Ingredients:</b></label>
        <textarea value={ingredients} onChange={(e) => setIngredients(e.target.value)} required />
        <button type="submit">Update Recipe</button> 
        <br></br>
      </form>
    </div>
  );
};

export default EditRecipe;
