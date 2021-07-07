// Write your code here
import './index.css'
import {Component} from 'react'

class TodoItem extends Component {
  render() {
    const {todoItem, deleteTodo, id} = this.props
    const {title} = todoItem
    const deleteTodoItem = () => {
      deleteTodo(id)
    }
    return (
      <li className="todo-item-container">
        <p className="title">{title}</p>
        <button className="btn-style" onClick={deleteTodoItem}>
          Delete
        </button>
      </li>
    )
  }
}

export default TodoItem
