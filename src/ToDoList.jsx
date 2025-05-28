import { useState } from 'react';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState('');
  const [isEditing, setIsEditing] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(null);

  const handleAddTask = () => {
    if (input.trim() === '') return;

    if (isEditing) {
      const updatedTasks = [...tasks];
      updatedTasks[currentIndex] = input;
      setTasks(updatedTasks);
      setIsEditing(false);
      setCurrentIndex(null);
    } else {
      setTasks([...tasks, input]);
    }

    setInput('');
  };

  const handleEditTask = (index) => {
    setInput(tasks[index]);
    setIsEditing(true);
    setCurrentIndex(index);
  };

  const handleDeleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  return (
    <div className="container">
      <h2>📝 My To-Do List</h2>
      <div className="input-section">
        <input 
          type="text" 
          value={input} 
          onChange={(e) => setInput(e.target.value)} 
          placeholder="Enter a task" 
        />
        <button onClick={handleAddTask}>
          {isEditing ? 'Save' : 'Add'}
        </button>
      </div>
      <ul className="task-list">
        {tasks.map((task, index) => (
          <li key={index}>
            {task}
            <div>
              <button className="edit-btn" onClick={() => handleEditTask(index)}>Edit</button>
              <button className="delete-btn" onClick={() => handleDeleteTask(index)}>Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
