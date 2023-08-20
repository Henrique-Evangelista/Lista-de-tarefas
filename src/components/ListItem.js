import React from "react";
import Card from "./Card";
import {
  BsFillTrashFill,
  BsCheckCircle,
  BsCheckCircleFill,
} from "react-icons/bs";

function ListItem(props) {
  function OnDone(props) {
    if (props.done) {
      return <BsCheckCircleFill />;
    } else {
      return <BsCheckCircle />;
    }
  }
  return (
    <li>
      <Card className={props.item.done ? "done item" : "item"}>
        {props.item.text}
        <div>
          <button onClick={() => props.deleteItem(props.item)}>
            <BsFillTrashFill />
          </button>
          <button onClick={() => props.verifiedItem(props.item)}>
            <OnDone done={props.item.done}></OnDone>
          </button>
        </div>
      </Card>
    </li>
  );
}

export default ListItem;
