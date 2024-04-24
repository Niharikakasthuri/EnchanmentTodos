// Write your code here
import {Component} from 'react'
import './index.css'
class TodoItem extends Component {
  state = {
    editing: false,
    updatedTitle: '',
  }
  todoEdit = () => {
    const {itemDetails} = this.props
    this.setState({editing: true, updatedTitle: itemDetails.title})
  }
  todoSave = () => {
    this.setState({editing: false})
  }
  handleChange = event => {
    this.setState({updatedTitle: event.target.value})
  }
  render() {
    const {deleteItems, itemDetails, toggleComplete} = this.props
    const {editing, updatedTitle} = this.state
    return (
      <li className="list">
        {editing ? (
          <>
            <input
              type="text"
              value={updatedTitle}
              onChange={this.handleChange}
              className="input"
            />
            <button
              onClick={this.todoSave}
              type="button"
              className="save-button"
            >
              Save
            </button>
          </>
        ) : (
          <>
            <div className="alignment">
              <input
                type="checkbox"
                checked={itemDetails.completed}
                onChange={() => toggleComplete(itemDetails.id)}
              />
              <p className="para">{itemDetails.title}</p>
            </div>
            <button
              onClick={this.todoEdit}
              type="button"
              className="edit-button"
            >
              Edit
            </button>
            <button
              className="button"
              onClick={() => deleteItems(itemDetails.id)}
              type="button"
            >
              Delete
            </button>
          </>
        )}
      </li>
    )
  }
}
export default TodoItem
