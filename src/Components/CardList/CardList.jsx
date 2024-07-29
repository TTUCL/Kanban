import React from 'react';
import './CardList.css';
import { useDroppable } from '@dnd-kit/core';
import { useSortable } from '@dnd-kit/sortable';
import SortableCard from '../SortableCard/SortableCard';
import { arrayMove, SortableContext, rectSortingStrategy } from '@dnd-kit/sortable';

const CardList = ({ title, status, kanbanData}) => {
  const { isOver, setNodeRef } = useDroppable({
    id: status,
  });
  

  return (
    <SortableContext items={kanbanData.map((kanbanTodo) => kanbanTodo.id)} strategy={rectSortingStrategy}>  
    <div ref={setNodeRef} className='card-list-box' style={{ backgroundColor: isOver ? '#dfe6e9' : '#ffffff' }}>
      <div className='card-list-title'>{title}</div>
      <div className='card-list'>
        {kanbanData.map((kanbanTodo) => (
          <SortableCard key={kanbanTodo.id} kanbanTodo={kanbanTodo} />
        ))}
      </div>
    </div>
    </SortableContext>
  );
};

export default CardList;
