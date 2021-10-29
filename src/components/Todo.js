import React from "react";

const Todo = ({ data }) => {
  return (
    <div className="todoContainer">
      <ul>
        {data.map((d) => {
          return (
            <li key={d.id}>
              <h3>{d.title}</h3>
              <p>{d.description}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Todo;
