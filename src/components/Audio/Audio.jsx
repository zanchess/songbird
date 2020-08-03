import React from 'react';
import './audio.scss';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import unknownBird from '../../assets/images/bird.jpg';

const Audio = (props) => {
  console.log(props);
  if (props.bird) {
    return (
      <div className="audio__wrap">
        <div className="audio__img">
          <img src={props.answer ? props.bird.image : './images/bird.jpg'} alt="bird" />
        </div>
        <div className="audio__player">
          <div className="audio__need-bird">
            <span>{props.answer ? props.bird.name : '****'}</span>
          </div>
          <hr />
          <AudioPlayer
            src={props.bird.audio}
            autoPlayAfterSrcChange={false}
          />
        </div>
      </div>
    );
  }
  return (
    <h2>Птица</h2>
  );
};

export default Audio;
