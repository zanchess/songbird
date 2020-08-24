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
            <div className="descr__img" style={image} />
            <div className="descr__main">
              <h3 className="descr__h">
                {props.data.name}
              </h3>
              <h5>
                {props.data.specied}
              </h5>
              <div className="descr__text">
                <p>
                  {props.data.description}
                </p>
              </div>
            </div>
          </div>
          <AudioPlayer
            src={props.data.audio}
            autoPlayAfterSrcChange={false}
          />
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
