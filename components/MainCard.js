"use client";
import React, { useState } from "react";
import {
  FaCheck,
  FaCheckCircle,
  FaRegEdit,
  FaRegTrashAlt,
} from "react-icons/fa";

const MainCard = () => {
  const [tasks, setTasks] = useState([]); // for tasks added
  const [completedTasks, setCompletedTasks] = useState([]); // for tasks completed
  const [input, setInput] = useState(""); // for input
  const [clicked, setClicked] = useState(false); // for showing input on click
  // for showing completed button
  const [showCompleteList, setShowCompleteList] = useState(false); // for showing completed tasks list

  const showError = () => {
    alert("Please enter a task");
  };
  const handleInput = (e) => {
    if (input === "") {
      e.preventDefault();
      showError();
      return;
    } else {
      e.preventDefault();
      setTasks([...tasks, input]);
      setInput("");
      setClicked(false);
    }
  };

  const handleShowCompleted = (e) => {
    e.preventDefault();
    setShowCompleteList((prev) => !prev);
  };
  const handleClick = (e) => {
    if (clicked === false) {
      e.preventDefault();
      setClicked(true);
      setShowCompleteList(false);
    } else {
      handleInput(e);
    }
  };

  const onEdit = (index) => {
    const newTasks = [...tasks];
    const editedTask = prompt("Edit your task:", newTasks[index]);
    if (editedTask === null) {
      return;
    }
    if (editedTask.trim() === "") {
      alert("Task cannot be empty");
      return;
    }
    if (editedTask !== newTasks[index]) {
      newTasks[index] = editedTask;
      setTasks(newTasks);
    }
  };

  const onComplete = (index) => {
    const complete = tasks[index];
    setCompletedTasks([...completedTasks, complete]);
    onDelete(index);
  };
  const onDelete = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };
  const onDeleteComplete = (index) => {
    setCompletedTasks(completedTasks.filter((_, i) => i !== index));
  };
  return (
    <div className="flex flex-col  items-center p-4 gap-8 w-[90%] md:w-[55%]  border border-card-border bg-card-background rounded-2xl text-white shadow-[2px_5px_10px_rgba(0,0,0,0.5)]">
      <div className="w-full ">
        <form className="flex flex-col gap-4 px-3 py-3 md:flex-row ">
          <button
            type="submit"
            onClick={handleClick}
            className="px-4 py-3 mr-auto duration-300 ease-in-out bg-white text-primary-button rounded-2xl hover:bg-primary-button-hover hover:text-white transiton-all"
          >
            {clicked ? "Add Task" : "Click me to Add Tasks"}
          </button>
          {clicked && (
            <input
              autoFocus
              type="text"
              value={input}
              name="task"
              id="taskInput"
              placeholder="Add Your Tasks Here"
              onChange={(e) => setInput(e.target.value)}
              className="px-4 py-3 w-[70%] border  rounded-xl bg-input-background border-input-border text-card-background focus:outline-none focus:ring-2 focus:white"
            />
          )}
          {completedTasks.length > 0 && (
            <button
              onClick={handleShowCompleted}
              className="px-4 py-3 ml-auto duration-300 ease-in-out bg-white text-primary-button rounded-2xl hover:bg-primary-button-hover hover:text-white transiton-all"
            >
              {showCompleteList ? "Show Active Tasks" : "Show Completed Tasks"}
            </button>
          )}
        </form>
      </div>
      {tasks.length === 0 && <p>Your Tasks Here</p>}
      <div
        className={`grid grid-cols-1 w-full ${
          tasks.length > 0 ? "bg-white" : ""
        } py-4 px-3 rounded-2xl overflow-auto max-h-[310px] scroll-m-0.5 scroll-smooth`}
      >
        {!showCompleteList ? (
          tasks.map((task, index) => {
            return (
              <div
                key={index}
                className={`flex justify-between items-center w-full px-4 py-3 mb-3 border-dashed border-input-border hover:bg-primary-button-hover hover:text-card-background hover:scale-102 transition-all ease-in-out duration-200 bg-card-background rounded-2xl `}
              >
                <div className="flex gap-8 mx-4">
                  <p>{index + 1}</p>
                  <p className="text-wrap">{task}</p>
                </div>
                <div className="flex gap-4">
                  <button
                    aria-label="Complete Task"
                    title="Complete Task"
                    className="transition-all duration-300 ease-in-out cursor-pointer hover:text-white hover:scale-110 "
                    onClick={() => onComplete(index)}
                  >
                    <FaCheckCircle />
                  </button>
                  <button
                    aria-label="Edit Task"
                    title="Edit Task"
                    className="transition-all duration-300 ease-in-out cursor-pointer hover:text-white hover:scale-110 "
                    onClick={() => onEdit(index)}
                  >
                    <FaRegEdit />
                  </button>
                  <button
                    aria-label="Delete Task"
                    title="Delete Task"
                    className="transition-all duration-300 ease-in-out cursor-pointer hover:text-white hover:scale-110 "
                    onClick={() => onDelete(index)}
                  >
                    <FaRegTrashAlt />
                  </button>
                </div>
              </div>
            );
          })
        ) : (
          <div>
            {completedTasks.map((task, index) => (
              <div
                key={index}
                className={`flex justify-between items-center w-full px-4 py-3 mb-3 border-dashed border-input-border hover:bg-primary-button-hover hover:text-card-background hover:scale-102 transition-all ease-in-out duration-200 text-white  bg-card-background rounded-2xl `}
              >
                <div className="flex gap-8 mx-4">
                  <p>{index + 1}</p>
                  <p className="text-wrap">{task}</p>
                </div>
                <div className="flex gap-4">
                  <button
                    aria-label="Delete Task"
                    title="Delete Task"
                    className="transition-all duration-300 ease-in-out cursor-pointer hover:text-white hover:scale-110 "
                    onClick={() => onDeleteComplete(index)}
                  >
                    <FaRegTrashAlt />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default MainCard;
