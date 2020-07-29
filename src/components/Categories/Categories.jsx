import React from 'react';
import './categories.scss';

const Categories = (props) => (
  <>
    <ul className="categories">
      {props.categories.map((elem) => <li key={elem.id}>{elem.name}</li>)}
    </ul>
  </>
);

export default Categories;
