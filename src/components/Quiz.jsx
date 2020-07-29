import React from 'react';
import Header from './Header/Header';

class Quiz extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      score: 0,
    };
  }

  render() {
    const a = 1;
    return (
      <>
        <Header score={this.state.score} />
        <div className="quiz">
          {a}
        </div>
      </>

    );
  }
}

export default Quiz;
