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
          <TaskRowItem rowNum={props.tasks[0].rowNum} rowDescription={props.tasks[0].rowDescription} rowAssigned={props.tasks[0].rowAssigned} />
          <TaskRowItem rowNum={props.tasks[1].rowNum} rowDescription={props.tasks[1].rowDescription} rowAssigned={props.tasks[1].rowAssigned} />
          <TaskRowItem rowNum={props.tasks[2].rowNum} rowDescription={props.tasks[2].rowDescription} rowAssigned={props.tasks[2].rowAssigned} />
        </tbody>
      </table>
    )
}

export default TaskTable