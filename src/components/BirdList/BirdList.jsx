import React from 'react';
import './birds.scss';
import BirdsItem from './BirdsItem';

const BirdList = (props) => {
  console.log(props);
  if (props.data) {
    return (
      <>
        <ul className="birds" onClick={props.showBird}>
          {props.data.map((elem) => <BirdsItem key={elem.id} data={elem.id} name={elem.name} />)}
        </ul>
      </>
    );
  }
  return (
    <h3>Список</h3>
  );
};

export default BirdList;
