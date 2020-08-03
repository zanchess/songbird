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
      birdsData: birds,
      birdsList: currentBirds,
      needBird: currentBirds[currentBirdIndex],
    });
  }

  showClickedBird = (e) => {
    const birdId = e.target.getAttribute('data-id');
    this.state.birdsList.forEach((element) => {
      if (+birdId === element.id) {
        this.setState({
          currentBird: element,
        });
      }
      if (+birdId === this.state.needBird.id) {
        console.log('yes');
      }
    });
  }

  render() {
    return (
      <>
        <div className="quiz">
          <Header score={this.state.score} />
          <Categories categories={this.state.categories} />
          <Audio bird={this.state.needBird} answer={this.state.truthAnswer} />
          <div className="birds__wrap">
            <BirdList
              showBird={this.showClickedBird}
              data={this.state.birdsList}
              page={this.state.page}
            />
            <Description data={this.state.currentBird} page={this.state.page} />
          </div>
          <button>Next Level</button>
        </div>
      </>

    );
  }
}

export default Quiz;
