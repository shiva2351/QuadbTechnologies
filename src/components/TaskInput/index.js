

import {Component} from 'react'
import {DivCard} from './StyledComponents'

const tagsList = [
  {
    optionId: 'HEALTH',
    displayText: 'Health',
  },
  {
    optionId: 'EDUCATION',
    displayText: 'Education',
  },
  {
    optionId: 'ENTERTAINMENT',
    displayText: 'Entertainment',
  },
  {
    optionId: 'SPORTS',
    displayText: 'Sports',
  },
  {
    optionId: 'TRAVEL',
    displayText: 'Travel',
  },
  {
    optionId: 'OTHERS',
    displayText: 'Others',
  },
]

class TaskInput extends Component {
  state = {tagSelect: tagsList[0].optionId, textTask: ''}

  onToggleTag = event => {
    this.setState({tagSelect: event.target.value})
  }

  AddTask = event => {
    event.preventDefault()
    const {addTask} = this.props
    const {tagSelect, textTask} = this.state
    addTask({tagSelect, textTask})
    this.setState({tagSelect: tagsList[0].optionId, textTask: ''})
  }

  textInput = event => {
    this.setState({textTask: event.target.value})
  }

  render() {
    const {tagSelect, textTask} = this.state
    return (
      <DivCard onSubmit={this.AddTask}>
        <h1>Create a task!</h1>
        <div>
          <label htmlFor="txt">Task</label>
          <input
            value={textTask}
            onChange={this.textInput}
            id="txt"
            type="text"
            placeholder="Enter the task here"
          />
        </div>
        <div>
          <label htmlFor="d">Tags</label>
          <select id="d" onChange={this.onToggleTag} value={tagSelect}>
            {tagsList.map(eachItem => (
              <option key={eachItem.optionId} value={eachItem.optionId}>
                {eachItem.displayText}
              </option>
            ))}
          </select>
        </div>
        <button type="submit">Add Task</button>
      </DivCard>
    )
  }
}

export default TaskInput