import { v4 as uuidv4 } from 'uuid';

let startTodoKanbanData = 
[
    {
        id: uuidv4(),
        title: 'Todo1',
        description: 'Todo1 description',
        todoStatus: 'Todo'
    },

    {
        id: uuidv4(),
        title: 'Todo2',
        description: 'Todo2 description',
        todoStatus: 'Todo'
    },

    {
        id: uuidv4(),
        title: 'Todo3',
        description: 'Todo3 description',
        todoStatus: 'Todo'
    },

    {
        id: uuidv4(),
        title: 'InProgress1',
        description: 'InProgress1 description',
        todoStatus: 'InProgress'
    },

    {
        id: uuidv4(),
        title: 'InProgress2',
        description: 'InProgress2 description',
        todoStatus: 'InProgress'
    },

    {
        id: uuidv4(),
        title: 'Done1',
        description: 'Done1 description',
        todoStatus: 'Done'
    },

    {
        id: uuidv4(),
        title: 'Done2',
        description: 'Done2 description',
        todoStatus: 'Done'
    },

]

export default startTodoKanbanData;