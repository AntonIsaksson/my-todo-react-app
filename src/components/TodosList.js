import React from "react";
import Todo from "./Todo";

const TodosList = ({data}) => {
  return <div className="todosContainer">
      <Todo data={data}/>
  </div>;
};

export default TodosList;
