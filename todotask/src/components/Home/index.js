import {Component} from 'react'
import {v4} from 'uuid'
import './index.css'

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
    status: '',
  }

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  onChangeEmail = event => {
    this.setState({email: event.target.value})
  }

  onChangePhoneNumber = event => {
    this.setState({phone: event.target.value})
  }

  onChangeProjectName = event => {
    this.setState({projectName: event.target.value})
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

  onChangeStatus = event => {
    this.setState({status: event.target.value})
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
      status,
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
      status,
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
      status:'',
    }))
  }

  render() {
    const {
      username,
      email,
      phone,
      projectName,
      projectDescription,
      startDate,
      endDate,
    } = this.state
    const {todoList} = this.state
    return (
      <>
        <div className="main-container">
          <h1 className="title">Todo List</h1>
          <div className="inputs-container">
            <form className="add-todo-container" onSubmit={this.onAddTodoList}>
              <h1 className="heading">Add New Todo</h1>
              <div className="inputs">
                <label htmlFor="uname">Username</label>
                <input
                  type="text"
                  id="uname"
                  placeholder="Enter Username"
                  value={username}
                  className="input-item"
                  pattern="^[A-Za-z]{3,20}$"
                                required
                                onChange={this.onChangeUsername}
                  
                />
                <span>Username should be in only 3 - 20 characters.</span>

                <label htmlFor="uname">Email</label>
                <input
                  type="email"
                  id="email"
                  placeholder="Enter Email"
                  value={email}
                  className="input-item"
                  onChange={this.onChangeEmail}
                />
                <span>Give me a Valid Email.</span>

                <label htmlFor="uname">Ph Number</label>
                <input
                  type="phone"
                  id="number"
                  value={phone}
                  placeholder="Enter Phone number"
                  className="input-item"
                  pattern="^[0-9]{3,20}$"
                  onChange={this.onChangePhoneNumber}
                />
                <span>Phone number should be in only 10 Numbers.</span>

                <label htmlFor="uname">Project Name</label>
                <input
                  type="text"
                  id="pname"
                  value={projectName}
                  placeholder="Enter Project name"
                  className="input-item"
                  pattern="^[A-Za-z]{3,20}$"
                  onChange={this.onChangeProjectName}
                />
                <span>Project name should be in only 3 - 20 characters.</span>

                <label htmlFor="uname">Project Description</label>
                <input
                  type="text"
                  id="pd"
                  value={projectDescription}
                  placeholder="Enter Project description"
                  className="input-item"
                  onChange={this.onChangeProjectDescription}
                />
              </div>
              <div className="dates-container">
                <div className="dat">
                  <label htmlFor="uname">StartDate</label>
                  <input
                    type="date"
                    id="sd"
                    value={startDate}
                    placeholder="Enter Project description"
                    onChange={this.onChangeStartDate}
                  />
                </div>
                <div className="dat">
                  <label htmlFor="uname">EndDate</label>
                  <input
                    type="date"
                    id="ed"
                    value={endDate}
                    placeholder="Enter Project description"
                    onChange={this.onChangeEndDate}
                  />
                </div>
              </div>
              <div className="checkbox-container">
                <div className="checkbox">
                  <label htmlFor="uname">Planed</label>
                  <input
                    type="radio"
                    id="pr"
                    value="Planed"
                    name="Status"
                    placeholder="Enter Project description"
                    onChange={this.onChangeStatus}
                  />
                </div>
                <div className="checkbox">
                  <label htmlFor="uname">Inprogress</label>
                  <input
                    type="radio"
                    id="inp"
                    name="Status"
                    value="Inprogress"
                    placeholder="Enter Project description"
                    onChange={this.onChangeStatus}
                  />
                </div>
                <div className="checkbox">
                  <label htmlFor="uname">Done</label>
                  <input
                    type="radio"
                    id="done"
                    name="Status"
                    value="Inprogress"
                    placeholder="Enter Project description"
                    onChange={this.onChangeStatus}
                  />
                </div>
              </div>
              <div className="add-button-container">
                <button type="submit" className="add-button">
                  Save
                </button>
              </div>
              <div className="view-button-container">
                <button type="submit" className="add-button">
                  View
                </button>
              </div>
            </form>
          </div>
          <div>
            <div className="container">
              <table>
                <thead>
                  <tr>
                    <th>S/no</th>
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
                  {todoList.map(todo => (
                    <tr>
                      <td>{1}</td>
                      <td>{todo.username}</td>
                      <td>{todo.email}</td>
                      <td>{todo.phone}</td>
                      <td>{todo.projectName}</td>
                      <td>{todo.projectDescription}</td>
                      <td>{todo.startDate}</td>
                      <td>{todo.endDate}</td>
                      <td>{todo.status}</td>
                      <td>edit/dlt</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </>
    )
  }
}
export default Home
