import React from 'react';

const trueAnswer = 'yes';
const falseAnswer = 'no';

class BirdsItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      answered: null,
    };
  }

  render() {
    return (
      <>
        <li className="bird__item" key={this.props.id} data-id={this.props.data}>
          {' '}
          <span className="bird__check" />
          {' '}
          {this.props.name}
        </li>
      </>
    );
  }
}

export default BirdsItem;
