import React from 'react';
import './description.scss';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';

const Description = (props) => {
  if (props.data) {
    const image = {
      backgroundImage: `url(${props.data.image})`,
    };

    return (
      <>
        <div className="descr">
          <div className="descr__head">
            <div className="head__img" style={image} />
            <h3 className="descr__h">
              {props.data.name}
            </h3>
            <h5>
              {props.data.specied}
            </h5>
            <hr />
            <AudioPlayer
              src={props.data.audio}
              autoPlayAfterSrcChange={false}
            />
          </div>
          <div className="descr__text">
            <p>
              {props.data.description}
            </p>
          </div>
        </div>
      </>
    );
  }
  return (
    <>
      <div className="descr">
        <h3>
          Описание птицы
        </h3>
      </div>
    </>
  );
};

export default Description;
