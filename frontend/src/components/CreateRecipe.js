import React, { useState } from 'react';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';
import './CreateRecipe.css';

const CreateRecipe = () => {
  const [title, setTitle] = useState('');
  const [ingredients, setIngredients] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    const newRecipe = {
      id: uuidv4(),
      title,
      ingredients
    };

    axios.post('http://localhost:5000/api/recipes', newRecipe)
      .then(() => window.location.reload())
      .catch(error => console.error('Error creating recipe:', error));
  };

  return (
    <div>
      <h2>Create Recipe</h2>
      <div className="create">
        <form onSubmit={handleSubmit}>
          <label><b>Title:</b></label>
          <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required /><br />
          <label><b>Ingredients:</b></label>
          <textarea value={ingredients} onChange={(e) => setIngredients(e.target.value)} required /><br />
          <button type="submit">Create Recipe</button>
        </form>
      </div>
    </div>
  );
};

export default CreateRecipe;
