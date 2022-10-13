import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import './App.css'

const RadioButtons = [
  {
    radioId: 'inprogress',
    radioText: 'Inprogress',
  },
  {
    radioId: 'planned',
    radioText: 'Planned',
  },
  {
    radioId: 'done',
    radioText: 'Done',
  },
]

class App extends Component {
  state = {
    userName: '',
    Email: '',
    mobileNumber: '',
    project: '',
    description: '',
    startDate: '',
    endDate: '',
    activeRadioId: '',
    userList: [],
    activeView: false,
  }

  name = event => {
    this.setState({userName: event.target.value})
  }

  emailChange = event => {
    this.setState({Email: event.target.value})
  }

  mobileChange = event => {
    this.setState({mobileNumber: event.target.value})
  }

  projectChange = event => {
    this.setState({project: event.target.value})
  }

  descriptionChange = event => {
    this.setState({description: event.target.value})
  }

  startDateChange = event => {
    this.setState({startDate: event.target.value})
  }

  endDateChange = event => {
    this.setState({endDate: event.target.value})
  }

  onRadio = radioId => {
    this.setState({activeRadioId: radioId})
  }

  submitted = event => {
    event.preventDefault()
    const {
      userName,
      Email,
      mobileNumber,
      project,
      description,
      startDate,
      endDate,
      activeRadioId,
      userList,
    } = this.state

    const user = {
      id: uuidv4(),
      userName,
      Email,
      mobileNumber,
      project,
      description,
      startDate,
      endDate,
      activeRadioId,
      userList,
    }

    this.setState({
      userList: [...userList, user],
      userName: '',
      Email: '',
      mobileNumber: '',
      project: '',
      description: '',
      startDate: '',
      endDate: '',
    })
    this.setState({activeView: false})
  }

  viewChange = () => {
    this.setState({activeView: true})
  }

  onDelete = id => {
    const {userList} = this.state
    const newList = userList.filter(each => each.id !== id)

    this.setState({userList: newList})
  }

  render() {
    const {
      userName,
      Email,
      mobileNumber,
      project,
      description,
      startDate,
      endDate,
      activeRadioId,
      userList,
      activeView,
    } = this.state

    const check = userName.length >= 3 && userName.match(/^[A-Za-z]+$/)
    const nameCheck = check ? null : 'Invalid name'

    const mailCheck = Email.endsWith('@gmail.com')
    const mailError = mailCheck ? null : 'Invalid gmail'

    const mobileCheck =
      mobileNumber[0] !== '0' &&
      mobileNumber.length === 10 &&
      mobileNumber.match(/^[0-9]+$/)
    const mobileError = mobileCheck ? null : 'Invalid number'

    const projectCheck = project.length >= 3
    const projectError = projectCheck ? null : 'Invalid Project name'

    const viewItems = userList.filter(
      each => each.activeRadioId === activeRadioId,
    )
    const items = activeView ? viewItems : userList

    return (
      <div className="app-container">
        <div>
          <h1>To do Application</h1>
          <form className="form-cont" onSubmit={this.submitted}>
            <input
              type="text"
              placeholder="Enter UserName"
              className="input-cont"
              value={userName}
              onChange={this.name}
            />
            <p className="error">{nameCheck}</p>
            <input
              type="text"
              placeholder="Enter Email id"
              className="input-cont"
              value={Email}
              onChange={this.emailChange}
            />
            <p className="error">{mailError}</p>
            <input
              type="text"
              placeholder="Enter Mobile number"
              className="input-cont"
              value={mobileNumber}
              onChange={this.mobileChange}
            />
            <p className="error">{mobileError}</p>
            <input
              type="text"
              placeholder="Enter Project Name"
              className="input-cont"
              value={project}
              onChange={this.projectChange}
            />
            <p className="error">{projectError}</p>
            <input
              type="text"
              placeholder="Enter Project Description"
              className="input-cont"
              value={description}
              onChange={this.descriptionChange}
            />
            <input
              type="date"
              className="input-cont"
              value={startDate}
              onChange={this.startDateChange}
            />
            <input
              type="date"
              className="input-cont"
              value={endDate}
              onChange={this.endDateChange}
            />
            <ul className="ul-style">
              {RadioButtons.map(each => (
                <li key={each.radioId}>
                  <input
                    type="radio"
                    name="RadioButton"
                    id={each.radioId}
                    value={activeRadioId}
                    onChange={() => {
                      this.onRadio(each.radioId)
                    }}
                  />
                  <label htmlFor={each.radioId}>{each.radioText}</label>
                </li>
              ))}
            </ul>
            <button type="submit" className="btn">
              Save
            </button>
            <button type="button" className="btn" onClick={this.viewChange}>
              View
            </button>
          </form>
          <table>
            <thead>
              <tr>
                <th>UserName</th>
                <th>Email.id</th>
                <th>Mobile no</th>
                <th>Project</th>
                <th>Description</th>
                <th>Start date</th>
                <th>End date</th>
                <th>Status</th>
                <th>Delete</th>
              </tr>
            </thead>

            <tbody>
              {items.map(each => (
                <tr key={each.id}>
                  <td>{each.userName}</td>
                  <td>{each.Email}</td>
                  <td>{each.mobileNumber}</td>
                  <td>{each.project}</td>
                  <td>{each.description}</td>
                  <td>{each.startDate}</td>
                  <td>{each.endDate}</td>
                  <td>{each.activeRadioId}</td>
                  <td>
                    <button
                      type="button"
                      onClick={() => {
                        this.onDelete(each.id)
                      }}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    )
  }
}

export default App