import React from 'react';
import { useDroppable } from '@dnd-kit/core';
import './DeleteCard.css';

const DeleteCard = () => {
  const { isOver, setNodeRef } = useDroppable({
    id: 'delete-card',
  });

  return (
    <div ref={setNodeRef} className={`delete-card-box ${isOver ? 'delete-card-over' : ''}`}>
      <p>Drag here to delete</p>
    </div>
  );
};

export default DeleteCard;
