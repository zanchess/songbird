import React from 'react';
import './audio.scss';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';

const Audio = (props) => {
  if (props.bird) {
    const imgUrl = props.answer ? `url(${props.bird.image})` : 'url(./images/bird.jpg)';
    return (
      <div className="audio__wrap">
        <div className="audio__img">
          <div className="audio__img" style={{ backgroundImage: imgUrl }} />
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
