# Kanban Board Application

This project is a sample Kanban board built using React and Vite. It includes features for task management with draggable cards, task status updates, and persistent state using cookies.

## Features

- **Welcome Page**: A simple introduction to the Kanban board and its functionalities.
- **Instructions Page**: Step-by-step guide on how to use the Kanban board.
- **Kanban Board**: An interactive task management board where you can:
  - Add new tasks with titles and descriptions.
  - Move tasks between different columns (Todo, In Progress, Done).
  - Delete tasks from the board.
  - Persist task data using cookies.

## Installation Instructions

1. **Prerequisites**:
   - [Git](https://git-scm.com/)
   - [Node.js](https://nodejs.org/)
   - A code editor like [Visual Studio Code](https://code.visualstudio.com/)

2. **Setup**:
   - Clone the repository:
     ```bash
     git clone https://github.com/ttucl/Kanban.git
     ```
   - Navigate to the project directory:
     ```bash
     cd Kanban
     ```
   - Install dependencies:
     ```bash
     npm install
     ```
   - Start the development server:
     ```bash
     npm run dev
     ```

## Technologies Used

- **React**: For building the user interface and handling state management.
- **Vite**: For fast development and build processes.
- **CSS**: For styling the application and ensuring responsiveness.
- **JavaScript**: For implementing core functionality.
- **Dnd Kit**: For drag-and-drop capabilities within the Kanban board.
- **Cookies**: For persistent task data storage across sessions.

## Application Structure

- **App.js**: The main application component that sets up routing and includes the navigation menu.
- **CardContainer.js**: Manages the Kanban board, including task addition, status updates, and deletion.
- **CardList.js**: Displays a list of tasks in a column, with drag-and-drop sorting capabilities.
- **Card.js**: Represents an individual task card.
- **Instructions.js**: Provides a user guide on how to use the Kanban board.
- **Welcome.js**: Displays a welcome message and introductory information about the board.

## How to Use

1. **Add a Task**:
   - Enter a title and description in the input fields under "Add a New Task".
   - Click the "Add Task" button to create a new task.

2. **Move Tasks**:
   - Drag and drop tasks between columns to update their status.

3. **Delete Tasks**:
   - Drag tasks to the "Delete Card" area to remove them from the board.

4. **View Instructions**:
   - Visit the "Instructions" page for a guide on how to use the board.

## Visit the Application

You can view the live application [here](https://ttucl.github.io/Kanban/).
