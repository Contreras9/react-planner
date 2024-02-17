function TaskRowItem(props) {

    return (
    <tr>
        <th scope='row'>{props.rowNum}</th>
        <td>{props.rowDescription}</td>
        <td>{props.rowAssigned}</td>
    </tr>
    )
}

export default TaskRowItem