import { useState } from "react";
import Item from "./Item";

export default function PackingList({ items, onDeleteItem, onTogglePacked, onReset }) {
    const [sortOption, setSortOption] = useState("input");
    let sortedItems;
  
    if (sortOption === "input") {
      sortedItems = items;
    } else if (sortOption === "description") {
      sortedItems = items
        .slice()
        .sort((a, b) => a.description.localeCompare(b.description));
    } else if (sortOption === "packed") {
      sortedItems = items
        .slice()
        .sort((a, b) => Number(a.packed) - Number(b.packed));
    }
  
    return (
      <div className="list">
        <ul>
          {sortedItems.map((item) => (
            <Item
              item={item}
              key={item.id}
              onDeleteItem={onDeleteItem}
              onTogglePacked={onTogglePacked}
            />
          ))}
        </ul>
  
        <div className="actions">
          <select
            value={sortOption}
            onChange={(e) => setSortOption(e.target.value)}
          >
            <option value="input">Sort by input order</option>
            <option value="description">Sort alphabetically</option>
            <option value="packed">Sort Packed</option>
          </select>
          <button onClick={onReset}>Reset</button>
        </div>
      </div>
    );
  }