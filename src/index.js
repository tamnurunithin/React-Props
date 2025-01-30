import React from "react";
import ReactDOM from "react-dom/client";
import contacts from "./contacts";
import "./styles.css";
function Card(props) {
  return (
    <div>
      <h1>{props.name}</h1>
      <img src={props.img} />
      <p>{props.describe}</p>
      <p>{props.Dob}</p>
    </div>
  );
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <div>
    <Card
      name={contacts[0].name}
      img={contacts[0].img}
      describe={contacts[0].describe}
      Dob={contacts[0].Dob}
    />
  </div>
);
