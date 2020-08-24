import React from 'react';
import './categories.scss';

const Categories = (props) => {
  const active = {
    backgroundColor: '#5c5c5c',
  };
  const notActive = {
    backgroundColor: '#919191',
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
