import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import './results.scss';

function Result(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      show={props.show}
      backdrop={false}
    >
      <Modal.Header>
        <Modal.Title id="contained-modal-title-vcenter">
          Конец тренировки
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>
          Ваш резултат:
          {' '}
          {props.score}
          {' '}
          очков
        </h4>
        <p>
          Набрано
          {' '}
          {props.score}
          {' '}
          очков из 30
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Начать заново</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default Result;
