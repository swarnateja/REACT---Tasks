import {BsFillEraserFill} from 'react-icons/bs'
import { MdDelete } from 'react-icons/md'

import './index.css'

const ShowTodo = props => {
  const {todoDetails, onDeleteItem, onEditItem} = props

  const {
    id,
    username,
    email,
    phone,
    projectName,
    projectDescription,
    startDate,
    endDate,
    activeRadioId,
  } = todoDetails

  const onClickDelete = () => {
    onDeleteItem(id)
  }

  const onClickEditItem = () => {
    onEditItem(id)
  }

  return (
    <tr>
      <td>{username}</td>
      <td>{email}</td>
      <td>{phone}</td>
      <td>{projectName}</td>
      <td>{projectDescription}</td>
      <td>{startDate}</td>
      <td>{endDate}</td>
      <td>{activeRadioId}</td>
      <td>
        <div className="button-cont">
            <button
            type="button"
            className="delete-button"
            testid="delete"
            onClick={onClickEditItem}
          >
            <BsFillEraserFill />
          </button>
          <button
            type="button"
            className="delete-button"
            testid="delete"
            onClick={onClickDelete}
          >
            <MdDelete />
          </button>
        </div>
      </td>
    </tr>
  )
}
export default ShowTodo
