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

class Quiz extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      birdsData: null,
      birdsList: null,
      currentBird: null,
      categories,
      score: 0,
      page: 0,
      truthAnswer: false,
      clickedBirdList: false,

    };
  }

  componentDidMount = () => {
    this.setBirds();
  }

  setBirds = async () => {
    const birds = await birdsData;
    const currentBirds = await getShuffledArr(birds[this.state.page]);
    await this.setState({
      birdsData: birds,
      birdsList: currentBirds,
    });
    await console.log(this.state.birdsList);
    await console.log(this.state.birdsData);
  }

  showClickedBird = (e) => {
    const bird = e.target.getAttribute('data-set');
    console.log(bird);
  }

  render() {
    return (
      <>
        <div className="quiz">
          <Header score={this.state.score} />
          <Categories categories={this.state.categories} />
          <Audio />
          <div className="birds__wrap">
            <BirdList
              showBird={this.showClickedBird}
              data={this.state.birdsList}
              page={this.state.page}
            />
            <Description data={this.state.birdsList} page={this.state.page} />
          </div>
          <button>Next Level</button>
        </div>
      </>

    );
  }
}

export default Quiz;
