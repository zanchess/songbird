import React from 'react';

const Categories = (props) => (
  <>
    <ul className="categories">
      {props.categories.map((elem) => {
        <li key={props.categories.id}>{props.categories.name}</li>;
      })}
    </ul>
  </>
);

export default Categories;
