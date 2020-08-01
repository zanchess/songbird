import React from 'react';
import './description.scss';
import Audio from '../Audio/Audio';

const Description = (props) => {
  const birds = props.data[0];
  const bird = birds[props.page];
  console.log(bird);
  return (
    <>
      <div className="descr">
        <div className="descr__head">
          <img src="" alt="bird" />
          <h3 className="descr__h">
            {bird.name}
          </h3>
          <h5>
            {bird.species}
          </h5>
          <hr />
          <Audio />
        </div>
        <div className="descr__text">
          <p>
            {bird.description}
          </p>
        </div>
      </div>
    </>
  );
};

export default Description;
