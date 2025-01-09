const App = () => {
  return (
    <div className="w-full h-[100vh] flex flex-col justify-center items-center">
      <div className="w-[500px] flex gap-2">
        <input
          type="text"
          className="border-2 border-gray-500 w-[300px] h-[50px] rounded-md text-xl p-2"
        />
        <button className="w-[150px] rounded-md p-3 bg-black text-white">
          Add Task
        </button>
      </div>
      <div className="w-[500px] flex justify-start gap-2">
        <div className="w-[300px] h-[50px] bg-gray-200 flex justify-center items-center my-5 rounded-md">
          Do laundry
        </div>
        <button className="h-[50px] w-[150px] rounded-md p-3 bg-black text-white my-5">
          Delete
        </button>
      </div>
    </div>
  );
};

export default App;
