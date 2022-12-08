import React from "react";
import { useRef } from "react";
const Form = ({ onaddToDoHamdler }) => {
  const titleRef = useRef(null);
  const descriptionRef = useRef(null);
  const dateRef = useRef(null);

  function addToDoHamdler() {
    const movie = {
      title: titleRef.current.value,
      date: dateRef.current.value,
      description: descriptionRef.current.value,
    };
    onaddToDoHamdler(movie);
  }
  function formSubmithandler(e) {}

  return (
    <div>
      <form onSubmit={formSubmithandler}>
        <div>
          <label htmlFor="title">title</label>
          <br />
          <input ref={titleRef} type="text" placeholder="title" id="title" />
        </div>
        <div>
          <label htmlFor="date">date</label>
          <br />
          <input ref={dateRef} type="text" placeholder="date" id="date" />
        </div>
        <div>
          <label htmlFor="description">title</label>
          <br />
          <textarea
            ref={descriptionRef}
            placeholder="description"
            id="description"
          />
        </div>
        <button>Edit Item </button>
        <button onClick={addToDoHamdler}>Add </button>
      </form>
    </div>
  );
};

export default Form;
