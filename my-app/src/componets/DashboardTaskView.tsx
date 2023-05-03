import { SetStateAction, useState } from 'react';
import TaskRowCard from './TaskRowCard';

export default function DashboardTaskView() {
  const [inputText, setInputText] = useState("");
  const [TaskList, setTaskList] = useState<string[]>([])


  const handleClick = () => {
    setTaskList([...TaskList, inputText])
  }
      
  const renderedTasks = TaskList.map((TaskList) =>{
    return <TaskRowCard name={TaskList}/>
  }
  
  );


  return (
    <div >
      <h2>List Of Tasks Go here</h2>
      <div>{renderedTasks}</div>

      <input type='text' name='in' onChange={(e) => setInputText(e.target.value)}/>
      <button onClick={handleClick}>Add task</button>
    </div>
  );
}