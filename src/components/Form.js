import React, { useState } from "react";
import { BsPlusLg } from "react-icons/bs";

function Form(props) {
  const [text, setText] = useState("");

  function handleChange(event) {
    const it = event.target.value;
    setText(it);
  }

  function addItem(event) {
    event.preventDefault();

    if (text) {
      props.onAddItem(text);
    }
    setText("");
  }

  return (
    <form>
      <input type="text" onChange={handleChange} value={text}></input>
      <button onClick={addItem}>
        <BsPlusLg />
      </button>
    </form>
  );
}

export default Form;
