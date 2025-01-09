import { useState, useRef } from 'react';

const App = () => {
  const [taskList, setTaskList] = useState([]);

  const inputRef = useRef();

  const handleAddTask = () => {
    const newTask = inputRef.current.value;
    setTaskList((prevTasks) => {
      return [...prevTasks, newTask];
    });
  };

  const handleDeleteTask = (id) => {
    setTaskList((prevTasks) => prevTasks.filter((_, idx) => idx !== id));
  };

  return (
    <div className="w-full h-[100vh] flex flex-col justify-start items-center">
      <div className="absolute top-20 w-[500px] flex gap-2">
        <input
          ref={inputRef}
          type="text"
          placeholder="Write to-do task here..."
          className="border-2 border-gray-500 w-[300px] h-[50px] rounded-md text-xl p-2"
        />
        <button
          onClick={handleAddTask}
          className="w-[150px] rounded-md p-3 bg-black text-white"
        >
          Add Task
        </button>
      </div>
      <div className="absolute top-36">
        {taskList.map((task, idx) => {
          return (
            <div key={idx} className="w-[500px] flex justify-start gap-2 my-1">
              <div className="w-[300px] h-[50px] bg-gray-200 flex justify-start px-2 items-center rounded-md text-xl">
                {task}
              </div>
              <button
                onClick={() => handleDeleteTask(idx)}
                className="h-[50px] w-[150px] rounded-md p-3 bg-black text-white"
              >
                Delete
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default App;
