import React,{useState} from "react";
import "./Todo.css";
import Sure from "./Sure";

const Todo = (props) => {

  const [clicked,notClicked]=useState(false);


  const onClickHandler = () => {
    notClicked(true);
  };

  const someFunction=(data)=>{
    notClicked(data)
  }

  return (
    <div className="card">
    <div className="existing">
      <h2>{props.text}</h2>
      <div className="actions">
        <button className="btn" onClick={onClickHandler}>
          delete
        </button>
      </div> 
      </div>
      <div className="new">
      { clicked &&  <Sure fun1={someFunction} />}
      </div>
    </div>
  );
};

export default Todo;
