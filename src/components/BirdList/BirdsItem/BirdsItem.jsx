import React from 'react';
import './birds-item.scss';

class BirdsItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      answered: null,
      background: 'whitesmoke',
    };
  }

  componentDidUpdate = (prevProps) => {
    if (prevProps.clearList !== this.props.clearList) {
      this.resetItem();
    }
  }

  resetItem = () => {
    this.setState({
      background: 'whitesmoke',
      answered: false,
    });
  }

  checkItem = async () => {
    setTimeout(() => {
      if (!this.state.answered && !this.props.truth && !this.props.endLevel) {
        this.setState({
          background: 'red',
          answered: true,
        });
        this.props.minusScore();
        document.getElementsByClassName('no')[0].play();
      }
      if (!this.state.answered && this.props.truth && !this.props.endLevel) {
        this.setState({
          background: 'green',
          answered: true,
        });
        this.props.minusScore();
        document.getElementsByClassName('yes')[0].play();
      }
    }, 0);
  }

  render() {
    return (
      <>
        <li onClick={this.checkItem} className="bird__item" key={this.props.id} data-id={this.props.data}>
          {' '}
          <span style={{ backgroundColor: `${this.state.background}` }} className="bird__check" />
          {' '}
          {this.props.name}
        </li>
      </>
    );
  }
}

export default BirdsItem;
