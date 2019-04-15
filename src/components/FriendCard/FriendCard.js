import React from "react";
import "./FriendCard.css";

//pass the image into each card so all 12 are rendered
const FriendCard = props => (
  <div className ="card"
    value = {props.id}
    onClick ={() => props.handleClick(props.id)}>
        <div className ="img-container">
            <img alt = {props.name} src ="https://pmctvline2.files.wordpress.com/2016/09/archer-ending-season-10.jpg?w=620" />
        </div>
    </div>
    );
export default FriendCard;