import React, { useEffect, useContext, useState } from "react";
import { useRef } from "react";
import AuthContext from "../../context/auth-context";
const Form = ({ onaddToDoHamdler }) => {
  const [titleRef, settitleRef] = useState("");
  const [descriptionRef, setdescriptionRef] = useState("");
  const [dateRef, setdateRef] = useState("");

  const ctx = useContext(AuthContext);
  const [editDataValue, setEditDataValue] = useState(null);
  function addToDoHamdler() {
    const movie = {
      title: titleRef,
      date: dateRef,
      description: descriptionRef,
    };
    onaddToDoHamdler(movie);
  }
  function formSubmithandler(e) {}
  function editItemHandler() {
    fetch(`http://localhost:3000/toDoItems/${ctx.editid}`, {
      method: "PATCH",
      body: JSON.stringify({
        title: titleRef,
        date: dateRef,
        description: descriptionRef,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
  }
  useEffect(() => {
    if (ctx.editid) {
      fetch(`http://localhost:3000/toDoItems/${ctx.editid}`)
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          settitleRef(data.title);
          setdescriptionRef(data.description);
          setdateRef(data.date);
        });
    }
  }, [ctx.editid]);
  function titleChangeHandler(e) {
    settitleRef(e.target.value);
  }
  function descriptionChangeHandler(e) {
    setdescriptionRef(e.target.value);
  }
  function dateChangeHandler(e) {
    setdateRef(e.target.value);
  }
  return (
    <div>
      <form onSubmit={formSubmithandler}>
        <div>
          <label htmlFor="title">title</label>
          <br />
          <input
            onChange={titleChangeHandler}
            value={titleRef}
            type="text"
            placeholder="title"
            id="title"
          />
        </div>
        <div>
          <label htmlFor="date">date</label>
          <br />
          <input
            onChange={dateChangeHandler}
            value={dateRef}
            type="text"
            placeholder="date"
            id="date"
          />
        </div>
        <div>
          <label htmlFor="description">title</label>
          <br />
          <textarea
            onChange={descriptionChangeHandler}
            value={descriptionRef}
            placeholder="description"
            id="description"
          />
        </div>
        <button onClick={editItemHandler}>Edit Item </button>
        <button onClick={addToDoHamdler}>Add </button>
      </form>
    </div>
  );
};

export default Form;
