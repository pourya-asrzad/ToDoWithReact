import "./App.css";
import { useState, useEffect, useCallback } from "react";
import CardContainer from "./components/card-container/cardContainer";
import Form from "./components/Form/Form";
function App() {
  const [data, setdata] = useState([]);
  const [adddate, setadddate] = useState(null);
  const [senddata, setsenddata] = useState(false);
  const getDataHandler = useCallback(async function () {
    const res = await fetch("http://localhost:3000/toDoItems");
    const data = await res.json();
    setdata(data);
  }, []);

  const addToDoHamdler = (comedata) => {
    setdata((prev) => [...prev, comedata]);
    fetch("http://localhost:3000/toDoItems", {
      method: "POST",
      body: JSON.stringify(comedata),
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };
  useEffect(() => {
    getDataHandler();
  }, [getDataHandler]);
  function onDeleteItem(id) {
    console.log(id);
    console.log(data.filter((element) => element.id !== +id));
    setdata((prev) => prev.filter((element) => element.id !== +id));
  }
  return (
    <div className="app">
      <CardContainer onDeleteItem={onDeleteItem} data={data} />
      <Form onaddToDoHamdler={addToDoHamdler} />
    </div>
  );
}

export default App;
