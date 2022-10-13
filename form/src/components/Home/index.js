import {Component, Fragment} from 'react'
import {v4} from 'uuid'
import EditRow from '../EditRow'
import ShowTodo from '../ShowTodo'

import './index.css'

const errorMsg = {
  name: 'Name should be in 3-20 "Characters"',
  email: 'This email address is Invalid please enter Valid Email',
  phoneError: 'Number should be in only 10 "Digits"',
  projectName: 'Project name should be in 3-20 "Characters"',
}


const RadioButtons = [
  {
    radioId: 'Planned',
    radioText: 'Planned',
  },

  {
    radioId: 'Inprogress',
    radioText: 'Inprogress',
  },

  {
    radioId: 'Done',
    radioText: 'Done',
  },
]

class Home extends Component {
  state = {
    todoList: [],
    username: '',
    email: '',
    phone: '',
    projectName: '',
    projectDescription: '',
    startDate: '',
    endDate: '',
    editTodoId: '',
    activeRadioId: '',
    activeView: false,
    
  }

  onChangeUsername = event => {
    this.setState({
      username: event.target.value.replace(/[^A-Za-z ]/ig, ''),
    })
    const username = event.target.value
    if (username.length <= 3) {
      this.setState({nameError: 'Name should be in 3-20 "Characters"'})
    }
    if (username.length > 3) {
      this.setState({nameError: null})
    }
    if (username.length > 20) {
      this.setState({nameError: errorMsg.name})
    }
    if (username === '') {
      this.setState({nameError: null})
    }
  }

  onChangeEmail = event => {
    this.setState({email: event.target.value})
    const email = event.target.value
    const pattern = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{3,3}$/
    const value = email.match(pattern)
    if (!value) {
      this.setState({emailError: errorMsg.email})
    }
    if (value) {
      this.setState({emailError: null})
    }
    if (email === '') {
      this.setState({emailError: null})
    }
  }

  onChangePhoneNumber = event => {
    this.setState({phone: event.target.value.replace(/\D/g, '')})
    const number = event.target.value.replace(/\D/g, '')
    if (number.length < 10) {
      this.setState({phoneError: errorMsg.phoneError})
    }
    if (number.length === 10) {
      this.setState({phoneError: null})
    }
    if (number.length > 10) {
      this.setState({phoneError: errorMsg.phoneError})
    }
    if (number === '') {
      this.setState({phoneError: null})
    }
  }

  onChangeProjectName = event => {
    this.setState({projectName: event.target.value})
    const project = event.target.value
    if (project.length <= 3) {
      this.setState({ProjectNameError: errorMsg.projectName})
    }
    if (project.length > 3) {
      this.setState({ProjectNameError: null})
    }
    if (project.length > 20) {
      this.setState({ProjectNameError: errorMsg.projectName})
    }
    if (project === '') {
      this.setState({ProjectNameError: null})
    }
  }

  onChangeProjectDescription = event => {
    this.setState({projectDescription: event.target.value})
  }

  onChangeStartDate = event => {
    this.setState({startDate: event.target.value})
  }

  onChangeEndDate = event => {
    this.setState({endDate: event.target.value})
  }

  onchangeStatus = radioId => {
    this.setState({activeRadioId: radioId})
  }

  onClickView = () => {
    this.setState({activeView: true})
  }

  onAddTodoList = event => {
    event.preventDefault()
    const {
      username,
      email,
      phone,
      projectName,
      projectDescription,
      startDate,
      endDate,
      activeRadioId,
    } = this.state

    const newTodo = {
      id: v4(),
      username,
      email,
      phone,
      projectName,
      projectDescription,
      startDate,
      endDate,
      activeRadioId,
    }

   
    this.setState(prev => ({
      todoList: [...prev.todoList, newTodo],
      username: '',
      email: '',
      phone: '',
      projectName: '',
      projectDescription: '',
      startDate: '',
      endDate: '',
    }))
    this.setState({activeView: false})
  }

  onDeleteItem = id => {
    const {todoList} = this.state
    const updatedNewList = todoList.filter(
      eachPassword => eachPassword.id !== id,
    )

    this.setState({todoList: updatedNewList})
  }

  onEditItem = id => {
    this.setState({ editTodoId: id }) 
  }

  onCancelEdit = id => {
    this.setState({editTodoId: null})
  }

  onSaveEdit = (event, id) => {
    event.preventDefault()
    this.setState ({editTodoId : id})
 
  }


  render() {
    const {
      nameError,
      emailError,
      phoneError,
      ProjectNameError,
      username,
      email,
      phone,
      projectName,
      projectDescription,
      startDate,
      endDate,
      todoList,
      editTodoId,
      activeRadioId,
      activeView,
    } = this.state

    const viewItems = todoList.filter(
      each => each.activeRadioId === activeRadioId,
    )
    const items = activeView ? viewItems : todoList

    return (
      <div className="main-container">
        <h1>Todo Task</h1>
        <div>
          <form onSubmit={this.onAddTodoList}>
            <div className="inputs-container">
              <label htmlFor="username">Username</label>
              <input
                id="username"
                type="text"
                placeholder="Username"
                required ="This field Required"
                className="text-input"
                onChange={this.onChangeUsername}
                value={username}
              />
              <span>{nameError}</span>

              <label htmlFor="email">Email</label>
              <input
                id="email"
                type="email"
                required
                placeholder="Email"
                className="text-input"
                onChange={this.onChangeEmail}
                value={email}
              />
              <span>{emailError}</span>
              <label htmlFor="number">Ph number</label>
              <input
                id="number"
                type="text"
                required
                placeholder="Ph Number"
                className="text-input"
                onChange={this.onChangePhoneNumber}
                value={phone}
              />
              <span>{phoneError}</span>
              <label htmlFor="Pname">Project</label>
              <input
                id="Pname"
                type="text"
                required
                placeholder="Project Name"
                className="text-input"
                onChange={this.onChangeProjectName}
                value={projectName}
              />
              <span>{ProjectNameError}</span>
              <label htmlFor="description">Description</label>
              <input
                id="description"
                required
                type="text"
                placeholder="Description"
                className="text-input"
                onChange={this.onChangeProjectDescription}
                value={projectDescription}
              />
            </div>

            <div className="dates-container">
              <div className="date">
                <label htmlFor="Start">StartDate</label>
                <input
                  id="Start"
                  type="date"
                  className="date-input"
                  onChange={this.onChangeStartDate}
                  value={startDate}
                  required
                />
              </div>
              <div className="date">
                <label htmlFor="end">EndDate</label>
                <input
                  id="end"
                  type="date"
                  className="date-input"
                  onChange={this.onChangeEndDate}
                  value={endDate}
                  required
                />
              </div>
            </div>
            <h4>Status</h4>
            <div className="radios-container">
            <ul className="ul-style">
                {RadioButtons.map(each => (
                  <li key={each.radioId}>
                    <input
                      type="radio"
                      name="RadioButton"
                      id={each.radioId}
                      value={activeRadioId}
                      required
                      onChange={() => {
                        this.onchangeStatus(each.radioId)
                      }}
                    />
                    <label htmlFor={each.radioId}>{each.radioText}</label>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <button className="submit-button" type="submit">
                Save
              </button>
            </div>
          </form>
        </div>
        <div>
          <button
            onClick={this.onClickView}
            className="view-button"
            value="True"
            type="button"
          >
            View List
          </button>
        </div>
        <div className="table-container">
            <form className="table-form">
              <table>
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Ph number</th>
                    <th>ProjectName</th>
                    <th>Project Description</th>
                    <th>Start Date</th>
                    <th>End Date</th>
                    <th>Status</th>
                    <th>Edit/Delete</th>
                  </tr>
                </thead>
                <tbody>
                  {items.map(eachTodo => (
                    <Fragment>
                      {editTodoId === eachTodo.id ? (
                        <EditRow
                          key={eachTodo.id}
                          todoDetails={eachTodo}
                          onCancelEdit={this.onCancelEdit}
                          onSaveEdit={this.onSaveEdit}
                        />
                      ) : (
                        <ShowTodo
                          key={eachTodo.id}
                          todoDetails={eachTodo}
                          onDeleteItem={this.onDeleteItem}
                          onEditItem={this.onEditItem}
                        />
                      )}
                    </Fragment>
                  ))}
                </tbody>
              </table>
            </form>
        </div>
      </div>
    )
  }
}

export default Home
