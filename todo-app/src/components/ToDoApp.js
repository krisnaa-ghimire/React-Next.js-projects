"use client";
import { useState } from "react";

export default function ToDoApp() {
  const [toDos, setToDos] = useState([]);
  const [text, setText] = useState("");
  const [date, setDate] = useState("");
  const [isDisabled, setIsDisabled] = useState(true);

  function handleChangeText(e) {
    setText(e.target.value);
    checkFields(e.target.value, date);
  }

  function handleChangeDate(e) {
    setDate(e.target.value);
    checkFields(e.target.value, text);
  }

  function checkFields(textValue, dateValue) {
    if (textValue != "" && dateValue != "") {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
  }

  function handleAddClick() {
    const toDo = { text, date, id: Math.random() * 101 };
    setToDos([...toDos, toDo]);
    setText("");
    setDate("");
    setIsDisabled(true);
  }

  function handleRemoveclick(id) {
    const filteredItems = toDos.filter((item) => item.id != id);
    setToDos([...filteredItems]);
  }

  return (
    <>
      <h1 className="font-bold text-5xl m-10 text-center">ToDo App</h1>
      <div className="flex justify-evenly items-center">
        <input
          type="text"
          value={text}
          placeholder="Enter your items here"
          onChange={handleChangeText}
          className="border-2 border-black rounded-md w-60 px-2"
        />
        <input
          type="date"
          value={date}
          onChange={handleChangeDate}
          className="border-2 border-black rounded-md w-60 px-2"
        />
        <button
          className="bg-green-500 text-xl px-2 w-24 rounded-md text-white"
          disabled={isDisabled}
          onClick={handleAddClick}
        >
          Add
        </button>
      </div>

      <>
        {toDos.map((toDo) => (
          <div key={toDo.id} className="flex justify-evenly items-center my-4">
            <p className="w-60 px-2">{toDo.text}</p>
            <p className="w-60 px-2">{toDo.date}</p>
            <button
              className="bg-red-500 text-xl px-2 w-24 rounded-md text-white"
              onClick={() => handleRemoveclick(toDo.id)}
            >
              Remove
            </button>
          </div>
        ))}
      </>
    </>
  );
}
