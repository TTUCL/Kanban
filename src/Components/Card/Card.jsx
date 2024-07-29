import React from 'react';
import './Card.css';

const Card = ({ kanbanTodo }) => {
  const getClassForStatus = () => {
    switch (kanbanTodo.todoStatus) {
      case 'Todo':
        return 'card-title-todo';
      case 'InProgress':
        return 'card-title-in-progress';
      case 'Done':
        return 'card-title-done';
      default:
        return 'card-title';
    }
  };

  return (
    <div className='card-box'>
      <div className={getClassForStatus()}>
        <h2>{kanbanTodo.title}</h2>
      </div>
      <div className='card-description'>
        <p>{kanbanTodo.description}</p>
      </div>
    </div>
  );
};

export default Card;
