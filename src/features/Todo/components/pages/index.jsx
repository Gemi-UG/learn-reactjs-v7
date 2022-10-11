import React, { useState } from "react";
import TodoList from "../TodoList";

TodoFeature.propTypes = {};

function TodoFeature(props) {
  const initTodoList = [
    {
      id: 1,
      title: "Bản kế hoạch tradding ",
      status: "new",
    },
    {
      id: 2,
      title: "Hệ thống giao dịch > 1",
      status: "completed",
    },
    {
      id: 3,
      title: "Nguyên tắc giao dịch và quy tắc quản lý vốn",
      status: "completed",
    },
    {
      id: 4,
      title: "Tâm lý chiến - tâm lý giao dịch ",
      status: "new",
    },
  ];

  const [todoList, setTodoList] = useState(initTodoList);
  const [filteredStatus, setFilteredStatus] = useState("all");

  const handleTodoClick = (todo, idx) => {
    // clone curent array to the new one
    const newTodoList = [...todoList];
    console.log(todo, idx);

    // toggle state
    newTodoList[idx] = {
      ...newTodoList[idx],
      status: newTodoList[idx].status === "new" ? "completed" : "new",
    };

    //update state
    setTodoList(newTodoList);
  };

  const handleShowAllClick = () => {
    setFilteredStatus("all");
  };

  const handleShowCompletedClick = () => {
    setFilteredStatus("completed");
  };

  const handldeShowNewClick = () => {
    setFilteredStatus("new");
  };

  const renderedTodoList = todoList.filter(
    (todo) => filteredStatus === "all" || filteredStatus === todo.status
  );
  // console.log(renderedTodoList);

  return (
    <div>
      <h3>
        <TodoList todoList={renderedTodoList} onTodoClick={handleTodoClick} />
      </h3>
      <div>
        <button onClick={handleShowAllClick}>Show All</button>
        <button onClick={handleShowCompletedClick}>Show Completed</button>
        <button onClick={handldeShowNewClick}>Show New</button>
      </div>
    </div>
  );
}

export default TodoFeature;
