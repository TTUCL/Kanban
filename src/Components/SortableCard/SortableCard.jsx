import React from 'react';
import { useSortable } from '@dnd-kit/sortable';
import { useDraggable } from '@dnd-kit/core';
import { CSS } from '@dnd-kit/utilities';
import Card from '../Card/Card';


const SortableCard = ({ kanbanTodo }) => {
  const { attributes, listeners, setNodeRef, transform, transition} = useSortable({ id: kanbanTodo.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <div ref={setNodeRef} style={style} {...attributes} {...listeners}>
      <Card kanbanTodo={kanbanTodo} />
    </div>
  );
};

export default SortableCard;
