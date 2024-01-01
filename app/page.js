"use client";
import React, { useState } from "react";

const page = () => {
  const [title, settitle] = useState("");
  const [desc, setdesc] = useState("");
  const [mainTask, setMainTask] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();
    setMainTask([...mainTask, { title, desc }]);
    setdesc("");
    settitle("");
  };

  const deleteHandler = (i) => {
    let copytask = [...mainTask];
    copytask.splice(i, 1);
    setMainTask(copytask);
  };

  let renderTask = <h1>No Task Available</h1>;
  if (mainTask.length > 0) {
    renderTask = mainTask.map((t, i) => {
      return (
        <li key={i} className="flex  items-center justify-between mb-5">
          <div className="flex justify-between mb-5 w-2/3 items-center ">
            <h5 className="text-2xl font-bold ">{t.title}</h5>
            <h5 className="text-xl font-semibold">{t.desc}</h5>
          </div>
          <button
            onClick={() => {
              deleteHandler(i);
            }}
            className=" bg-red-500 text-white px-4 py-2 rounded font-bold"
          >
            Delete
          </button>
        </li>
      );
    });
  }
  return (
    <>
      <h1 className=" bg-purple-900  text-white p-5 font-bold text-center text-5xl">
        ABHISHEK'S TODO LIST
      </h1>
      <form onSubmit={submitHandler}>
        <input
          type="text"
          className=" m-5 text-2xl border-purple-900 px-4 py-2 border-4 "
          placeholder="Enter Your Task Here"
          value={title}
          onChange={(e) => {
            settitle(e.target.value);
          }}
        />
        <input
          type="text"
          className=" m-5 text-2xl border-purple-900 px-4 py-2 border-4 "
          placeholder="Enter Description Here"
          value={desc}
          onChange={(e) => {
            setdesc(e.target.value);
          }}
        />

        <button className="m-5 py-2 px-4 text-2xl text-white bg-purple-900 font-bold rounded ">
          ADD TASK
        </button>
      </form>
      <div className="bg-slate-200 p-8  ">
        <ul>{renderTask}</ul>
      </div>
    </>
  );
};

export default page;
