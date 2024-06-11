import React from 'react';
import RecipeList from './components/RecipeList';
import CreateRecipe from './components/CreateRecipe';
import './App.css';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Recipe Sharing Platform</h1>
      </header>
      <main>
        <CreateRecipe />
        <RecipeList />
      </main>
    </div>
  );
}

export default App;
