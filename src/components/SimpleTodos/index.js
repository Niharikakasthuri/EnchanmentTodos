import {Component} from 'react'
import TodoItem from '../TodoItem'
import './index.css'

const initialTodosList = [
  {
    id: 1,
    title: 'Book the ticket for today evening',
    completed: false,
  },
  {
    id: 2,
    title: 'Rent the movie for tomorrow movie night',
    completed: false,
  },
  {
    id: 3,
    title: 'Confirm the slot for the yoga session tomorrow morning',
    completed: false,
  },
  {
    id: 4,
    title: 'Drop the parcel at Bloomingdale',
    completed: false,
  },
  {
    id: 5,
    title: 'Order fruits on Big Basket',
    completed: false,
  },
  {
    id: 6,
    title: 'Fix the production issue',
    completed: false,
  },
  {
    id: 7,
    title: 'Confirm my slot for Saturday Night',
    completed: false,
  },
  {
    id: 8,
    title: 'Get essentials for Sunday car wash',
    completed: false,
  },
]

// Write your code here
class SimpleTodos extends Component {
  state = {
    todoList: initialTodosList,
    newTodoTitle: '',
  }
  addTodo = () => {
    const {newTodoTitle} = this.state
    const newTodo = {
      title: newTodoTitle,
    }
    this.setState(prevState => ({
      todoList: [...prevState.todoList, newTodo],
      newTodoTitle: '',
    }))
  }
  titleChange = event => {
    this.setState({[event.target.name]: event.target.value})
  }
  deleteItems = id => {
    const {todoList} = this.state
    const filteredData = todoList.filter(eachItem => eachItem.id !== id)
    this.setState({todoList: filteredData})
  }
  toggleComplete = id => {
    const {todoList} = this.state
    const updatedList = todoList.map(todo =>
      todo.id === id ? {...todo, completed: !todo.completed} : todo,
    )
    this.setState({todoList: updatedList})
  }
  render() {
    const {todoList, newTodoTitle} = this.state
    return (
      <div className="bg-container">
        <div className="todo-alignment">
          <div className="card-container">
            <div className="card-alignment">
              <div className="align">
                <h1 className="heading">Simple Todos</h1>
                <input
                  type="text"
                  name="newTodoTitle"
                  value={newTodoTitle}
                  onChange={this.titleChange}
                  placeholder="Enter todo title"
                  className="todo-input"
                />
                <button
                  onClick={this.addTodo}
                  type="button"
                  className="add-button"
                >
                  Add
                </button>
                <ul>
                  {todoList.map(eachItem => (
                    <TodoItem
                      itemDetails={eachItem}
                      key={eachItem.id}
                      deleteItems={this.deleteItems}
                      toggleComplete={this.toggleComplete}
                    />
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default SimpleTodos
