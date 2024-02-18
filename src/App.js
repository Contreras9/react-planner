import './App.css';
import TaskTable from './components/TaskTable';

function App() {

  const tasks = [
    {rowNum: 1, rowDescription: "Feed puppy", rowAssigned: "User One"},
    {rowNum: 2, rowDescription: "Water plants", rowAssigned: "User Two"},
    {rowNum: 3, rowDescription: "Make dinner", rowAssigned: "User One"},
    {rowNum: 4, rowDescription: "Charge phone battery", rowAssigned: "User One"}
  ]

  const addTask = () => {
    if (tasks.length > 0) {
      const newTask = {rowNum: tasks.length + 1, rowDescription: "New Task", rowAssigned: "User Three"}
      tasks.push(newTask)
      console.log(tasks)
    }
  }

  return (
    <div className='mt-5 container'>
      <div className='card'>
        <div className='card-header'>
          Your Tasks
        </div>
        <div className='card-body'>
          <TaskTable tasks={tasks} />
          <button className='btn btn-primary' onClick={addTask}>
            Add new task
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
