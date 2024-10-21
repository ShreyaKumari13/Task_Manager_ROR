# Task Management Application

This is a simple **Task Management Application** built as part of the Full Stack Developer technical task. The application demonstrates CRUD operations (Create, Read, Update, Delete) using a **React** frontend and a **Ruby on Rails** backend. It enables users to manage their tasks by adding, viewing, editing, and deleting tasks.

## Features

- **Add New Task**: Users can create a new task with a title and description.
- **View All Tasks**: All tasks are displayed in a list format showing the task title.
- **Edit Task**: Users can edit the title and description of an existing task.
- **Delete Task**: Users can delete any task from the list.
- **Search Tasks** (Bonus): Users can search for tasks by title.
- **Basic UI Styling** (Bonus): The UI is styled to enhance the user experience.

## Tech Stack

- **Frontend**: React
- **Backend**: Ruby on Rails
- **HTTP Requests**: Axios or Fetch API
- **Database**: SQLite (default for Rails)

## API Endpoints (Backend)

The backend is built using Ruby on Rails and provides the following API endpoints:

- `GET /tasks` - Retrieves all tasks.
- `POST /tasks` - Creates a new task.
- `PUT /tasks/:id` - Updates a task by its ID.
- `DELETE /tasks/:id` - Deletes a task by its ID.

## Installation

### Prerequisites

- Ruby (2.7+)
- Rails (6.0+)
- Node.js (14+)
- Yarn or npm

### Backend Setup (Ruby on Rails)

1. Clone the repository.
2. Navigate to the backend directory:
    ```bash
    cd backend
    ```
3. Install dependencies:
    ```bash
    bundle install
    ```
4. Setup the database:
    ```bash
    rails db:create db:migrate
    ```
5. Start the Rails server:
    ```bash
    rails server
    ```
   The backend will be running at `http://localhost:3000`.

### Frontend Setup (React)

1. Navigate to the frontend directory:
    ```bash
    cd frontend
    ```
2. Install dependencies:
    ```bash
    npm install
    ```
3. Start the React development server:
    ```bash
    npm start
    ```
   The frontend will be running at `http://localhost:3001`.

## Usage

1. Open the frontend at `http://localhost:3001`.
2. Use the form to add tasks with a title and description.
3. View all tasks in the list, edit or delete them using the provided buttons.

## Bonus Features

- **Search Bar**: A search bar is included to filter tasks by title.
- **Basic Styling**: The application includes minimal styling to enhance user interaction.

## Contributing

Feel free to submit issues and pull requests if you'd like to contribute to the project.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
