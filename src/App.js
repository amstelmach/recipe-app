import React, { useEffect, useState } from 'react';
import './App.css';
import Recipe from './Recipe';

const App = () => {
  const APP_ID = '807653a2';
  const APP_KEY = '9b391241b8eee565362a188c507c0b54';
  // const exampeReq = `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`;

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('');

  // const [dietLabels, setDietLabels] = useState('vegan');

  // const ingredients = recipes.recipe.ingredients;

  useEffect(() => {
    getRecipes();
  }, [query]);

  const getRecipes = async () => {
    const response = await fetch(
      `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
    );
    const data = await response.json();
    setRecipes(data.hits);
    console.log(data.hits);
  };

  const updateSearch = (e) => {
    setSearch(e.target.value);
    console.log(search);
  };

  const getSearch = (e) => {
    e.preventDefault();
    setQuery(search);
  };

  return (
    <div className='App'>
      <form className='search-form' onSubmit={getSearch}>
        <input
          className='search-bar'
          type='text'
          placeholder='enter ingredient'
          value={search}
          onChange={updateSearch}
        />
        <button className='search-button' type='submit'>
          search
        </button>
      </form>

      <div className='repices-container'>
        {recipes.map((recipe) => (
          <Recipe
            title={recipe.recipe.label}
            calories={recipe.recipe.calories}
            image={recipe.recipe.image}
            cuisine={recipe.recipe.cuisineType}
            dishType={recipe.recipe.dishType}
            recipe={recipe.recipe.url}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
