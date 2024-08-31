import React, { useState } from 'react';

function ItemForm({ addItem }) {
  const [input, setInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim()) {
      addItem(input);
      setInput('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Add new item"
      />
      <button type="submit">Add</button>
    </form>
  );
}

export default ItemForm;

