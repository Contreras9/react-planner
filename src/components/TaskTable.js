import TaskRowItem from "./TaskRowItem"


function TaskTable(props) {
    return (
        <table className='table table-hover'>
        <thead>
          <tr>
            <th scope='col'>#</th>
            <th scope='col'>Description</th>
            <th scope='col'>Assigned</th>
          </tr>
        </thead>
        <tbody>
            {props.tasks.map(task => (
                <TaskRowItem
                rowNum={task.rowNum}
                rowDescription={task.rowDescription}
                rowAssigned={task.rowAssigned}
                />
            ))}
        </tbody>
      </table>
    )
}

export default TaskTable