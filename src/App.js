import React, { Component } from "react";
import ToDoItem from "./ToDoItem";
import todosData from "./todosData";
import "./index.css";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = { todos: todosData };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(id) {
    this.setState((prevState) => {
      //alert((JSON.stringify(prevState.todos[0].id)));
      const updatedTodos = prevState.todos.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      });
      return {
        todos: updatedTodos,
      };
    });
  }

  render() {
    const todoItems = this.state.todos.map((item) => (
      <ToDoItem item={item} key={item.id} handleChange={this.handleChange}/>
    ));
    return <div>{todoItems}</div>;
  }
}
