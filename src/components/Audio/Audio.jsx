import React from 'react';
import './audio.scss';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';

const Audio = () => (
  <div className="audio__wrap">
    <div className="audio__img">
      <img src="" alt="bird" />
    </div>
    <div className="audio__player">
      <div className="audio__need-bird">
        <span>***</span>
      </div>
      <hr />
      <AudioPlayer />
    </div>
  </div>
);

export default Audio;
