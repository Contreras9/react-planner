function TaskRowItem() {

    const rowNum = 1
    const rowDescription = "Feed dog"
    const rowAssigned = "Eric"

    return (
    <tr>
        <th scope='row'>{rowNum}</th>
        <td>{rowDescription}</td>
        <td>{rowAssigned}</td>
    </tr>
    )
}

export default TaskRowItem