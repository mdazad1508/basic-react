import React from "react";
import "./Sure.css";



const Sure = (props) => {

   const yes =()=>{
      props.fun1(false);
   }

   const no =() =>{
    props.fun1(false);
   }

  return (
    <div className="box">
      <h1>Are you sure ?</h1>
      <div className="btnn">
        <button className="btn1"  onClick={yes} >Yes</button> 
        <button className="btn2" onClick={no}  >NO</button>
      </div>
    </div>
  );
};

export default Sure;
