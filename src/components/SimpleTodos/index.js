import './index.css'
import {Component} from 'react'
import TodoItem from '../TodoItem'

const initialTodosList = [
  {
    id: 1,
    title: 'Book the ticket for today evening',
  },
  {
    id: 2,
    title: 'Rent the movie for tomorrow movie night',
  },
  {
    id: 3,
    title: 'Confirm the slot for the yoga session tomorrow morning',
  },
  {
    id: 4,
    title: 'Drop the parcel at Bloomingdale',
  },
  {
    id: 5,
    title: 'Order fruits on Big Basket',
  },
  {
    id: 6,
    title: 'Fix the production issue',
  },
  {
    id: 7,
    title: 'Confirm my slot for Saturday Night',
  },
  {
    id: 8,
    title: 'Get essentials for Sunday car wash',
  },
]

class SimpleTodos extends Component {
  state = {
    todosList: initialTodosList,
  }

  deleteTodo = id => {
    console.log(id)
    const {todosList} = this.state
    const filteredTodosList = todosList.filter(each => each.id !== id)
    this.setState({todosList: filteredTodosList})
    console.log(filteredTodosList)
  }

  render() {
    const {todosList} = this.state
    return (
      <div className="bg-container">
        <div className="card-1">
          <h1 className="heading-1">Simple Todos</h1>
          <ul className="todos-container">
            {todosList.map(eachTodo => (
              <TodoItem
                todoItem={eachTodo}
                id={eachTodo.id}
                deleteTodo={this.deleteTodo}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default SimpleTodos
