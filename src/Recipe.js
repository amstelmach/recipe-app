import React from 'react';
import './Recipe.css';

const Recipe = ({ title, calories, image, cuisine, dishType }) => {
  return (
    <div className='container'>
      <div className='recipe'>
        <div className='mealImage'>
          <img src={image} alt='' />
        </div>
        <div className='mealDetails'>
          <h1 className='label'>{title}</h1>
          <p>ingredients.....</p>
          <ul className='additionalInfo'>
            <li>
              Calories
              <p>{calories}</p>
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
        </div>
      </div>
    </div>
  );
};

export default Recipe;
