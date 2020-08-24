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

  checkItem = () => {
    setTimeout(() => {
      if (this.props.clearList) {
        this.setState({
          background: 'grey',
        });
      }
      if (!this.state.answered && !this.props.truth && !this.props.endLevel) {
        this.setState({
          background: 'red',
        });
      }
      if (!this.state.answered && this.props.truth && !this.props.endLevel) {
        this.setState({
          background: 'green',
          answered: true,
        });
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
