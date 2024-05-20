import { useState } from 'react';
import './App.css'


const TodoForm = () => {
const [name, setName] = useState("");
const [description, setDescription] = useState("");
const [tasks,setTasks]=useState([ ]);
const [statusFilter, setStatusFilter] = useState('All');

const handleAddTask = () => {
if(name.trim() && description.trim() !== ''){
  setTasks([...tasks, { name: name.trim(), description: description.trim(),status:"Not Completed"}]);
      setName('');
      setDescription('');
}

}
       
const deleteTask = (index) => {
  setTasks(tasks.filter((_, i) => i !== index));
};

const editTask = (index) => {
  const task = tasks[index];
  setName(task.name);
  setDescription(task.description);
  deleteTask(index);
};

const changeStatus = (index, newStatus) => {
  const updatedTasks = tasks.map((task, i) => 
    i === index ? { ...task, status: newStatus } : task
  );
  setTasks(updatedTasks);
};

const statusfiltertask = tasks.filter(task => {
  if (statusFilter === 'All') return true ;
   return task.status === statusFilter ;
});


  
return (
 <div>
  <div className='headcontainer'>
    <div className='header'>
      <h1>My todo</h1>
    </div>
    <div className='src-area'>
    <input type='text'value={name} className='namesearch'placeholder='name' onChange={(e)=>setName(e.target.value)}/>
    <input type='text'value={description} className='des-search'placeholder='description' onChange={(e)=>setDescription(e.target.value)}/>
    <button className='hdbtn' onClick={handleAddTask}>Add ToDo</button>
    </div>
  </div>
  <div className='midcontainer'>
    <h2>My Todos</h2>
    <div className='filterarea'>
    Status Filter :
    <select value = {statusFilter} className='filterstyle' onChange={(e)=>setStatusFilter(e.target.value)}>
      <option value="All">All</option>
      <option value="Completed" >Completed</option>
      <option value="Not Completed">Not completed</option>
    </select>
    </div>
  </div>
  <div className='card-container'>
        {statusfiltertask.map((task, index) => (
          <div key={index} className='task-card'>
            <p>Name : {task.name}</p>
            <p>Description :{task.description}</p>
            <div>
              Status: 
              <select value={task.status} 
              onChange={(e) => changeStatus(index, e.target.value)}
              style={{ backgroundColor: task.status === 'Completed' ? 'rgb(11, 190, 127)' : 'rgba(226, 77, 87, 0.975', color: 'white' }}>
                <option value="Not Completed" style={{background:"red",color:"white"}}>Not Completed</option>
                <option value="Completed"style={{background:"green",color:"white"}}>Completed</option>
              </select>
            </div >
            <div className='btn-area2'>
            <button className='edtbtn' onClick={() => editTask(index)}>Edit</button>
            <button className='dltbtn' onClick={() => deleteTask(index)}>Delete</button>
            </div>
          </div>
        ))}
      </div>
 </div>
)

}

export default TodoForm ;
  












