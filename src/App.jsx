import React, { useState } from 'react'
import './App.css'

function App() {
  const [addTask, setaddTask] = useState([]);

  const handleButtonClick = () => {
      setaddTask([...addTask, Date.now()]);;
  };
  const deleteButtonClick = (key) => {
    const updatedTextBoxes = addTask.filter((textBoxKey) => textBoxKey !== key);
    setaddTask(updatedTextBoxes);
  }
  return (
    <>
      <a href="#_" class="relative inline-block text-lg group" onClick={handleButtonClick} >
      <span class="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white">
      <span class="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></span>
      <span class="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gray-900 group-hover:-rotate-180 ease"></span>
      <span class="relative">Add Task</span>
      </span>
      <span class="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0" data-rounded="rounded-lg"></span>
      </a>
            {addTask.map((key) => (
              <div class="mb-6">
                  <input 
                    key={key}
                    type="text" 
                    id="large-input"
                    placeholder="Add Task..."
                    class="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  />
                  <a href="#_" onClick={() => deleteButtonClick(key)} class="relative inline-block text-lg group">
                  <span class="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white">
                  <span class="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></span>
                  <span class="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gray-900 group-hover:-rotate-180 ease"></span>
                  <span class="relative">Delete</span>
                  </span>
                  <span class="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0" data-rounded="rounded-lg"></span>
                  </a>
              </div>
            ))}
    </>
  )
}

export default App
