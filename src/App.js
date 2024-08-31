import React, { useState } from 'react';
import ItemList from './components/ItemList';
import ItemForm from './components/ItemForm';
import './App.css';


function App() {
  const [items, setItems] = useState([]);

  const addItem = (item) => {
    setItems([...items, item]);
  };

  return (
    <div className="App">
      <h1>Simple React App</h1>
      <ItemForm addItem={addItem} />
      <ItemList items={items} />
    </div>
  );
}

export default App;

