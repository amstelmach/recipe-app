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
              view recipe{' '}
              <svg
                width='24'
                height='24'
                xmlns='http://www.w3.org/2000/svg'
                fill-rule='evenodd'
                clip-rule='evenodd'
              >
                <path d='M21.883 12l-7.527 6.235.644.765 9-7.521-9-7.479-.645.764 7.529 6.236h-21.884v1h21.883z' />
              </svg>
            </a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Recipe;
