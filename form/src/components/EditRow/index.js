import { Component } from 'react'
import { GiCancel } from 'react-icons/gi'
import { BsCheckLg } from 'react-icons/bs'


class EditRow extends Component{
  render() {

    const { id, onCancelEdit, onSaveEdit,todoDetails } = this.props
    const {
    username,
    email,
    phone,
    projectName,
    projectDescription,
    startDate,
    endDate,
    activeRadioId,
    } = todoDetails


 
    const onClickSaveEdit = (event) => {
      event.preventDefault()
    onSaveEdit(id)
  }

  const onClickCancelEdit = () => {
    onCancelEdit(id)
  }

  return (
    <tr>
      <td>
        <input
          type="text"
          placeholder="Username"
          name="username"
          value={username}
          onChange={this.onChangeUsername}
        />
      </td>
      <td>
        <input
          type="email"
          placeholder="Email"
          name="email"
          value={email}
          onChange={this.onChangeEmail}
        />
      </td>
      <td>
        <input
          type="text"
          placeholder="Ph Number"
          name="phone"
          value={phone}
          onChange={this.onChangePhone}
        />
      </td>
      <td>
        <input
          type="text"
          placeholder="Project Name"
          name="project"
          value={projectName}
          onChange={this.onChangeProject}
        />
      </td>
      <td>
        <input
          type="text"
          placeholder="Description"
          name="Description"
          value={projectDescription}
          onChange={this.onChangeDescription}
        />
      </td>
      <td>
        <input
          type="date"
          name="start"
          onChange={this.onChangeStart}
          value={startDate}
        />
      </td>
      <td>
        <input
          type="date"
          name="end"
          onChange={this.onChangeEnd}
          value={endDate}
        />
      </td>
      <td>
        <input
          type="text"
          name="status"
          placeholder="Status"
          onChange={this.onChangeStatus}
          value={activeRadioId}
        />
      </td>
      <td>
        <div className="button-cont">
          <button type="submit" className="delete-button" testid="delete">
            <BsCheckLg onClick = {onClickSaveEdit}/>
          </button>
          <button type="button" className="delete-button" testid="delete">
            <GiCancel onClick={onClickCancelEdit} />
          </button>
        </div>
      </td>
    </tr>
  )
  }

}
export default EditRow
