import React from "react";
import ReactDOM from "react-dom";
function Card(props) {
  return (
    <div>
      <h1>{props.name}</h1>
      <img src={props.img} alt={props.name} />
      <p>{props.gmail}</p>
      <p>{props.instaid}</p>
    </div>
  );
}
ReactDOM.render(
  <div>
    <Card
      name="Tiger"
      img="https://imgs.search.brave.com/E3EwQJCYDbdZmi8FGdURcPRX68_EkYLIyltjlyNrLfc/rs:fit:500:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzAyLzExLzc0Lzgx/LzM2MF9GXzIxMTc0/ODExM19mVUNhR3pa/SWRNazVKYWVocHlW/dHR3Vk1XYlBXVXRC/ei5qcGc"
      gmail="tamnurunithin@gmail.com"
      instaid="nithin_connects"
    />
    <Card
      name="Lion"
      img="https://imgs.search.brave.com/syMMb4JHmCsP286X8HXILcS_D2kHg1vyKZrSqdh3h6k/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzk3Lzhl/LzY2Lzk3OGU2NjQ4/ZmY0MTE1MGE4MDM4/NDEzNDkzNTNhZGJm/LS1saW9uLXRhdHRv/by1hLWxpb24uanBn"
      gmail="tamnurunithin@gmail.com"
      instaid="nithin_connects"
    />
  </div>,
  document.getElementById("root")
);
