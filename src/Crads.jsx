import React from "react";
import "./index.css";

function Netflix(props) {
  return (
    <>
      <div className="Main-body">
        <div className="Card-one">
          <h1 className="sub-title">{props.SubTitle}</h1>
          <img src={props.imgsrc} alt="poster" className="Img-card"></img>
          <h3 className="title">{props.Title}</h3>
          <h3 className="viwe"> {props.Viwe}</h3>
          <a href={props.link} className="btn">
            {" "}
           Watch Now{" "}
          </a>
        </div>
      </div>
    </>
  );
}

export default Netflix;
