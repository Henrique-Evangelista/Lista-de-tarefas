import React from "react";
import ListItem from "./ListItem";

function List(props) {
  return (
    <ul>
      {props.items.map((item) => (
        <ListItem
          key={item.id}
          item={item}
          OnDone={props.OnDone}
          deleteItem={props.deleteItem}
          verifiedItem={props.verifiedItem}
        ></ListItem>
      ))}
    </ul>
  );
}

export default List;
