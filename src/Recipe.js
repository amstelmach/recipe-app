import React from 'react';
import './Recipe.css';

const Recipe = ({ title, calories, image, cuisine, dishType, recipe }) => {
  return (
    <div className='container'>
      <div className='recipe'>
        <div className='mealImage'>
          <img src={image} alt='' />
        </div>
        <div className='mealDetails'>
          <h1 className='label'>{title}</h1>

          <ul className='additionalInfo'>
            <li>
              Calories
              <p>{Math.round(calories)}</p>
            </li>
            <li>
              Cuisine Type
              <p>{cuisine}</p>
            </li>
            <li>
              Dish Type
              <p>{dishType}</p>
            </li>
          </ul>
          <button className='button'>
            <a href={recipe} rel='noreferrer' target='_blank'>
              view recipe
            </a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Recipe;
