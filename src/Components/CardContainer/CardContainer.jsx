import React, { useState, useEffect } from 'react';
import './CardContainer.css';
import CardList from '../CardList/CardList';
import DeleteCard from '../DeleteCard/DeleteCard';
import { DndContext, closestCenter } from '@dnd-kit/core';
import { arrayMove, SortableContext, rectSortingStrategy } from '@dnd-kit/sortable';
import { v4 as uuidv4 } from 'uuid';
import Cookies from 'js-cookie';
import SortableCard from '../SortableCard/SortableCard';

const CardContainer = ({ kanbanData: startData }) => {
  const [newTodoTitle, setNewTodoTitle] = useState('');
  const [newTodoDescription, setNewTodoDescription] = useState('');

  const saveToCookies = (data) => {
    Cookies.set('kanbanData', JSON.stringify(data), { expires: 7 });
  };

  const getFromCookies = () => {
    const savedData = Cookies.get('kanbanData');
    return savedData ? JSON.parse(savedData) : startData;
  };

  const [kanbanData, setKanbanData] = useState(getFromCookies());
  console.log(kanbanData)

  useEffect(() => {
    saveToCookies(kanbanData);
  }, [kanbanData]);

  const handleAddTodo = () => {
    const newTodo = {
      id: uuidv4(),
      title: newTodoTitle,
      description: newTodoDescription,
      todoStatus: 'Todo',
    };

    setKanbanData([...kanbanData, newTodo]);
    setNewTodoTitle('');
    setNewTodoDescription('');
  };

  const updateStatus = (id, newStatus) => {
    console.log(`Updating status of card with id: ${id} to new status: ${newStatus}`);
    
    const cardListStatus = {
      "Todo": "Todo",
      "InProgress": "InProgress",
      "Done": "Done"
    };
  
    const newKanbanData = kanbanData.map((card) => {
      if (card.id === id) {
        console.log(`Found card: ${card.title} with current status: ${card.todoStatus}`);
        return { ...card, todoStatus: cardListStatus[newStatus] || card.todoStatus };
      }
      return card;
    });
  
    console.log("New Kanban Data: ", newKanbanData);
    setKanbanData(newKanbanData);
  };
  
  const deleteCard = (id) => {
    console.log(`Deleting card with id: ${id}`);
    const newKanbanData = kanbanData.filter((card) => card.id !== id);
    setKanbanData(newKanbanData);
  };

  // const handleDragEnd = (event) => {
  //   const { active, over } = event;

  //   if (active.id !== over.id) {
  //     if (over.id === 'delete-card') {
  //       deleteCard(active.id);
  //     }
  //     else {
  //       updateStatus(active.id, over.id);
  //     }
  //   }
  // }

  const handleDragEnd = (event) => {
    const { active, over } = event;
  
    if (!over) return;
  
    if (over.id === 'delete-card') {
      deleteCard(active.id);
    } else {
      updateStatus(active.id, over.id);
    }
  
    if (active.id !== over.id) {
      setKanbanData((items) => {
        const oldIndex = items.findIndex(item => item.id === active.id);
        const newIndex = items.findIndex(item => item.id === over.id);
        // Ensure the new index calculation is correct
        if (newIndex !== -1) {
          console.log(`Moving card with id: ${active.id} from index ${oldIndex} to index ${newIndex}`);
          return arrayMove(items, oldIndex, newIndex);
        }
        return items;
      });
    }
  };
  

  return (
    <DndContext onDragEnd={handleDragEnd} collisionDetection={closestCenter}>
      <div className='card-container-box'>
        <div className='add-todo-container'>
          <h2>Add a New Task</h2>
          <input
            type='text'
            placeholder='Enter a title'
            value={newTodoTitle}
            onChange={(e) => setNewTodoTitle(e.target.value)}
          />
          <input
            type='text'
            placeholder='Enter a description'
            value={newTodoDescription}
            onChange={(e) => setNewTodoDescription(e.target.value)}
          />
          <button onClick={handleAddTodo}>Add Task</button>
        </div>

        <div className='card-list-container'>
            <CardList
              title='To Do'
              status='Todo'
              kanbanData={kanbanData.filter((card) => card.todoStatus === 'Todo')}
              // setKanbanData={setKanbanData}
            />

          
            <CardList
              title='In Progress'
              status='InProgress'
              kanbanData={kanbanData.filter((card) => card.todoStatus === 'InProgress')}
              // setKanbanData={setKanbanData}
            />



            <CardList
              title='Done'
              status='Done'
              kanbanData={kanbanData.filter((card) => card.todoStatus === 'Done')}
              // setKanbanData={setKanbanData}
            />

        </div>

        <DeleteCard />
      </div>
    </DndContext>
  );
};

export default CardContainer;
