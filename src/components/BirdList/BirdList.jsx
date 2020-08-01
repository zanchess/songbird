import React from 'react';
import './birds.scss';

const BirdList = (props) => (
  <>
    <ul className="birds">
      {props.data[props.page].map((elem) => <li key={elem.id}>{elem.name}</li>)}
    </ul>
  </>
);

export default BirdList;
