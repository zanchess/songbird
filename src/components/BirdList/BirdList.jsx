import React from 'react';
import './birds.scss';
import BirdsItem from './BirdsItem/BirdsItem';

const BirdList = (props) => {
  if (props.data) {
    return (
      <>
        <ul className="birds" onClick={props.showBird}>
          {props.data.map((elem) => (
            <BirdsItem
              clearList={props.clearList}
              endLevel={props.endLevel}
              truth={props.truth}
              key={elem.id}
              data={elem.id}
              name={elem.name}
            />
          ))}
        </ul>
      </>
    );
  }
  return (
    <h3>Список</h3>
  );
};

export default BirdList;
