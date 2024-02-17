import './App.css';
import TaskRowItem from './components/TaskRowItem';

function App() {

  const tasks = [
    {rowNum: 1, rowDescription: "Feed puppy", rowAssigned: "User One"},
    {rowNum: 2, rowDescription: "Water plants", rowAssigned: "User Two"},
    {rowNum: 3, rowDescription: "Make dinner", rowAssigned: "User One"}
  ]

  return (
    <div className='mt-5 container'>
      <div className='card'>
        <div className='card-header'>
          Your Tasks
        </div>
        <div className='card-body'>
          <table className='table table-hover'>
            <thead>
              <tr>
                <th scope='col'>#</th>
                <th scope='col'>Description</th>
                <th scope='col'>Assigned</th>
              </tr>
            </thead>
            <tbody>
              <TaskRowItem rowNum={tasks[0].rowNum} rowDescription={tasks[0].rowDescription} rowAssigned={tasks[0].rowAssigned} />
              <TaskRowItem rowNum={tasks[1].rowNum} rowDescription={tasks[1].rowDescription} rowAssigned={tasks[1].rowAssigned} />
              <TaskRowItem rowNum={tasks[2].rowNum} rowDescription={tasks[2].rowDescription} rowAssigned={tasks[2].rowAssigned} />
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default App;
