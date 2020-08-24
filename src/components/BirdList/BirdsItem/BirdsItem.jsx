import React from 'react';
import './birds-item.scss';

class BirdsItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      answered: null,
      background: 'grey',
    };
  }

  componentDidUpdate = (prevProps) => {
    if (prevProps.clearList !== this.props.clearList) {
      this.resetItem();
    }
  }

  resetItem = () => {
    this.setState({
      background: 'grey',
      answered: false,
    });
  }

  checkItem = () => {
    setTimeout(() => {
      if (!this.state.answered && !this.props.truth && !this.props.endLevel) {
        this.setState({
          background: 'red',
        });
        console.log('red');
      }
      if (!this.state.answered && this.props.truth && !this.props.endLevel) {
        this.setState({
          background: 'green',
          answered: true,
        });
        console.log('green');
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
