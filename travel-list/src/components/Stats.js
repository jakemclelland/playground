export default function Stats({ items }) {
    if (!items.length) {
      return (
        <footer className="stats">
          <em>Load up! 🚀</em>
        </footer>
      );
    }
  
    const numItems = items.length;
    const numPacked = items.filter((item) => item.packed).length;
    const percentPacked = Math.round((numPacked / numItems) * 100);
  
    return (
      <footer className="stats">
        <em>
          {percentPacked === 100
            ? "All set. Punch it!"
            : `You have ${numItems} items on your list, and you already packed
          ${numPacked} (${percentPacked}%)`}
        </em>
      </footer>
    );
  }