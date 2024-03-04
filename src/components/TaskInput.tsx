import  {FormEvent,useState} from 'react'
import { _Task } from '../App'


const TaskInput = ({isActive,handlSubmit}:{isActive:boolean,handlSubmit:(e:FormEvent<HTMLFormElement>, value: string) => void}) => {

  const [newTask,setNewTask] = useState('')
  return (
  <form action="" className='container py-2'
    onSubmit={(e) =>{
      if(newTask.length!=0){
        handlSubmit(e,newTask)
        setNewTask('')
     
      }
    }}
    >
      {isActive && <div className="col-md-12 d-grid col-12  gap-2">
      <label>Enter your task name:</label>
      <input type='text'
      value={newTask}
      onChange={(e)=> setNewTask(e.target.value)}
      />
      <button type="submit"  className={`btn btn-success btn-sm ${newTask.length == 0 && 'disabled' }`}>Create</button>
     
    </div>}
    
    </form>
  )
}

export default TaskInput