import PropTypes from "prop-types";
import React from "react";
import classnames from "classnames";
import "./styles.scss";

TodoList.propTypes = {
  TodoList: PropTypes.array,
  onTodoClick: PropTypes.func,
};

TodoList.defautProps = {
  TodoList: [],
  onTodoClick: null,
};

function TodoList({ todoList, onTodoClick }) {
  const handleTodoClick = (todo, idx) => {
    if (!onTodoClick) return;

    onTodoClick(todo, idx);
  };

  return (
    <ul className="todo-list">
      {todoList.map((todo, idx) => (
        <li
          key={todo.id}
          className={classnames({
            todoitem: true,
            completed: todo.status === "completed",
          })}
          onClick={() => handleTodoClick(todo, idx)}
        >
          {todo.title}
        </li>
      ))}
    </ul>
  );
}

export default TodoList;
