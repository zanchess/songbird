import React from 'react';
import './categories.scss';

const Categories = (props) => {
  const active = {
    backgroundColor: 'green',
  };
  const notActive = {
    backgroundColor: 'red',
  };
  return (
    <>
      <ul className="categories">
        {
        props.categories.map((elem, i) => (
          <li
            data-cat={i}
            key={elem.id}
            style={props.page === i ? active : notActive}
          >
            {elem.name}
          </li>
        ))
        }
      </ul>
    </>
  );
};

export default Categories;
