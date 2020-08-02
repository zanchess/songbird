import React from 'react';
import './description.scss';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';

const Description = (props) => {
  if (props.data) {
    return (
      <>
        <div className="descr">
          <div className="descr__head">
            <img src="" alt="bird" />
            <h3 className="descr__h">
              {props.data[props.page].name}
            </h3>
            <h5>
              {props.data[props.page].specied}
            </h5>
            <hr />
            <AudioPlayer
              src={props.data[props.page].audio}
            />
          </div>
          <div className="descr__text">
            <p>
              {props.data[props.page].description}
            </p>
          </div>
        </div>
      </>
    );
  }
  return (
    <>
      <h3>
        Птица
      </h3>
    </>
  );
};

export default Description;
