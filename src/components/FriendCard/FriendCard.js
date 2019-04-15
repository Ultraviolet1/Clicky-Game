import React from "react";
import "./FriendCard.css";

//pass the image into each card so all 12 are rendered
const FriendCard = props => (
  <div className ="card"
    value = {props.id}
    onClick ={() => props.handleClick(props.id)}>
        <div className ="img-container">
            <img alt = {props.name} src = {props.img} />
        </div>
    </div>
    );
export default FriendCard;