import React, { useState, useEffect } from "react";

const jokesAPI = 'https://api.chucknorris.io/jokes/random';

const allItems = [
  { id: "apple", value: "🍎 apple" },
  { id: "orange", value: "🍊 orange" },
  { id: "grape", value: "🍇 grape" },
  { id: "pear", value: "🍐 pear" },
];

function FruitList() {
  const [items, setItems] = React.useState(allItems);
  const [joke, setJoke] = useState("")


  function addItem() {
    setItems([...items, allItems.find((i) => !items.includes(i))]);
  }

  function removeItem(id) {
    setItems(items.filter((i) => i !== id));
  }

  function getAJoke(){
    fetch(jokesAPI)
    .then(res => res.json())
    .then(data => setJoke(data.value))
  }
  useEffect(()=> {getAJoke()}, [])

  return (
    <div>
      <div>
      <button disabled={items.length >= allItems.length} onClick={addItem}>
        add item
      </button>
      <ul style={{ paddingLeft: 30 }}>
        {items.map((item) => (

          <li style={{ listStyle: "none", paddingLeft: 0 }} key={item.id}>

            <button onClick={() => removeItem(item)}>Remove</button>{" "}

            <label htmlFor={`${item.id}-input`}>{item.value}</label>{" "}

            <input id={`${item.id}-input`} defaultValue={item.value} />

          </li>
        ))}
      </ul>

      </div>
      <div>
        <h2>Jokes API test</h2>
        <p>{joke}</p>
        <button onClick={getAJoke}>New Joke!!!</button>
      </div>
    </div>
  );
}

export default FruitList;
