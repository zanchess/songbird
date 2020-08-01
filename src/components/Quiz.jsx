import React from 'react';
import Header from './Header/Header';
import birdsData from '../constants/data';
import categories from '../constants/categories';
import Categories from './Categories/Categories';
import Audio from './Audio/Audio';
import BirdList from './BirdList/BirdList';
import Description from './Description/Description';
import './quiz.scss';

class Quiz extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      birdsData,
      categories,
      score: 0,
      page: 0,
    };
  }

  render() {
    const a = 1;
    return (
      <>
        <div className="quiz">
          <Header score={this.state.score} />
          <Categories categories={this.state.categories} />
          <Audio />
          <div className="birds__wrap">
            <BirdList data={this.state.birdsData} page={this.state.page} />
            <Description data={this.state.birdsData} page={this.state.page} />
          </div>

        </div>
      </>

    );
  }
}

export default Quiz;
