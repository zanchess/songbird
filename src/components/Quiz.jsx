import React from 'react';
import Header from './Header/Header';
import birdsData from '../constants/data';
import categories from '../constants/categories';
import Categories from './Categories/Categories';

class Quiz extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      birdsData,
      categories,
      score: 0,
    };
  }

  render() {
    const a = 1;
    return (
      <>
        <Header score={this.state.score} />
        <Categories categories={this.state.categories} />
        <div className="quiz">
          {a}
        </div>
      </>

    );
  }
}

export default Quiz;
