import { useState } from "react";
import Logo from "./Logo";
import Form from "./Form";
import PackingList from "./PackingList";
import Stats from "./Stats";

const defaultItems = [
  { id: 1, description: "Dark Sabbers", quantity: 1, packed: false },
  { id: 2, description: "Grogu's Carrier", quantity: 1, packed: true },
  { id: 3, description: "Alara's Jar", quantity: 2, packed: false }
];

export default function App() {
  const [items, setItems] = useState(defaultItems);

  function handleAddItem(newItem) {
    setItems((items) => [...items, newItem]);
  }

  function handleDeleteItem(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }

  function handleTogglePacked(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }

  function handleReset() {
    const confirmed = window.confirm(
      "Are you really sure you want to clear the list?"
    );

    if (confirmed) setItems([]);
  }

  return (
    <div className="app">
      <Logo />
      <Form onAddItem={handleAddItem} />
      <PackingList
        items={items}
        onDeleteItem={handleDeleteItem}
        onTogglePacked={handleTogglePacked}
        onReset={handleReset}
      />
      <Stats items={items} />
    </div>
  );
}









