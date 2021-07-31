import React, { useState } from 'react';

import './AddTask.css'; 
import './Button.css';

import Button from './Button';

const AddTask = ({  handleTaskAddition }) => {
  const [inputDate, setInputData] = useState('');

  const handleInputChange = (e) => {
    console.log(e.target.value);
    setInputData(e.target.value)
  }

  const handleAddTaskClick = () => {
    handleTaskAddition(inputDate);
    setInputData('');
  }

  return ( 
    <div className="add-task-container">
      <input onChange={handleInputChange} 
        value={inputDate}
        className="add-task-input" type="text" 
        />

      <div className="add-task-button-container">
        <Button onClick={handleAddTaskClick} className="button">Adicionar</Button>
      </div>
    </div>
   );
}
 
export default AddTask;