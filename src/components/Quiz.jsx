import React from 'react';
import Header from './Header/Header';
import birdsData from '../constants/data';
import categories from '../constants/categories';
import Categories from './Categories/Categories';
import Audio from './Audio/Audio';
import BirdList from './BirdList/BirdList';
import Description from './Description/Description';
import './quiz.scss';

const getShuffledArr = (arr) => {
  const newArr = arr.slice();
  for (let i = newArr.length - 1; i > 0; i -= 1) {
    const rand = Math.floor(Math.random() * (i + 1));
    [newArr[i], newArr[rand]] = [newArr[rand], newArr[i]];
  }
  return newArr;
};

const randomInteger = (min, max) => {
  const rand = min - 0.5 + Math.random() * (max - min + 1);
  return Math.round(rand);
};

const minVaArrValue = 0;

class Quiz extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      birdsList: null,
      currentBird: null,
      needBird: null,
      categories,
      score: 0,
      page: 0,
      truthAnswer: false,
      endLevel: false,
      birdListIsClear: true,
      maxScore: 5,
      errors: new Audio('/audio/windows-error.mp3'),
      notError: new Audio('/audio/ding.mp3'),

    };
  }

  componentDidMount = () => {
    this.setBirds();
  }

  setBirds = async () => {
    const birds = await birdsData;
    const currentBirds = await getShuffledArr(birds[this.state.page]);
    const currentBirdIndex = randomInteger(minVaArrValue, currentBirds.length - 1);

    await this.setState({
      birdsList: currentBirds,
      needBird: currentBirds[currentBirdIndex],
    });
  }

  resetBirdList = () => {
    this.setState({
      birdListIsClear: true,
    });
  }

  clickedBirdList = () => {
    this.setState({
      birdListIsClear: false,
    });
  }

  showClickedBird = (e) => {
    this.clickedBirdList();
    const birdId = e.target.getAttribute('data-id');
    this.state.birdsList.forEach((element) => {
      if (+birdId === element.id) {
        this.setState({
          currentBird: element,
        });
      }
      if (+birdId === this.state.needBird.id) {
        this.trueAnswer();
        this.endLevel();
        this.addLevelScore();
      }
    });
  }

  minusScore = async () => {
    await this.setState({
      maxScore: this.state.maxScore - 1,
    });
    await console.log(this.state.maxScore);
  }

  addLevelScore = () => {
    const currentScore = this.state.maxScore;
    this.setState({
      score: this.state.score + currentScore,
    });
  }

  resetEndGame = () => {
    this.setState({
      truthAnswer: false,
      endLevel: false,
      maxScore: 5,
    });
  }

  trueAnswer = () => {
    this.setState({
      truthAnswer: true,
    });
  }

  endLevel = () => {
    setTimeout(() => {
      this.setState({
        endLevel: true,
      });
    }, 10);
  }

  resetGame = () => {
    this.setState({
      truthAnswer: false,
    });
  }

  nextPage = () => {
    this.setState({
      page: this.state.page + 1,
    });
  }

  resetCurrentBird = () => {
    this.setState({
      currentBird: null,
    });
  }

  nextLevel = () => {
    this.nextPage();
    this.resetGame();
    this.setBirds();
    this.resetCurrentBird();
    this.resetEndGame();
    this.resetBirdList();
  }

  render() {
    return (
      <>
        <div className="quiz">
          <Header score={this.state.score} />
          <Categories categories={this.state.categories} page={this.state.page} />
          <Audio bird={this.state.needBird} answer={this.state.truthAnswer} />
          <div className="birds__wrap">
            <BirdList
              minusScore={this.minusScore}
              clearList={this.state.birdListIsClear}
              endLevel={this.state.endLevel}
              showBird={this.showClickedBird}
              data={this.state.birdsList}
              page={this.state.page}
              truth={this.state.truthAnswer}
              errors={this.state.errors}
              notError={this.state.notError}
            />
            <Description data={this.state.currentBird} page={this.state.page} />
          </div>
          <hr />
          <button className="quiz__btn" onClick={this.nextLevel} disabled={!this.state.truthAnswer}>Следующий уровень</button>
        </div>
      </>

    );
  }
}

export default Quiz;
