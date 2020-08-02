import React from 'react';
import './birds.scss';

const BirdList = (props) => {
  console.log(props);
  if (props.data) {
    return (
      <>
        <ul className="birds" onClick={props.showBird}>
          {props.data.map((elem) => <li key={elem.id} data-id={elem.id}>{elem.name}</li>)}
        </ul>
      </>
    );
  }
  return (
    <h3>Список</h3>
  );
};

export default BirdList;
