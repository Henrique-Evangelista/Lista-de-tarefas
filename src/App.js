import React, {useState } from "react";
import List from "./components/List";
import Form from "./components/Form";
import Item from "./components/Item";
import "./App.css";
import Modal from "./components/Modal";

function App() {
  const [showModal, setShowModal] = useState(false);
  const [items, setItems] = useState([]);

  function deleteItem(item) {
    const itemsFilteds = items.filter((it) => it.id !== item.id);
    setItems(itemsFilteds);
  }

  function verifiedItem(item) {
    const verified = items.map((it) => {
      if (it.id === item.id) {
        it.done = !it.done;
      }
      return it;
    });
    setItems(verified);
  }

  function onAddItem(text) {
    const ite = new Item(text);

    setItems([...items, ite]);
    setShowModal(false);
  }

  function onHideModal() {
    setShowModal(false);
  }

  return (
    <div className="container">
      <header className="header">
        <h1>Lista de tarefas</h1> <button onClick={()=>{setShowModal(true)}} className="addButton">+</button>
      </header>

      <List
        className="scroll"
        verifiedItem={verifiedItem}
        deleteItem={deleteItem}
        items={items}
      ></List>

      <Modal onHideModal={onHideModal} show={showModal}>
        <Form onAddItem={onAddItem}></Form>
      </Modal>
    </div>
  );
}
export default App;
