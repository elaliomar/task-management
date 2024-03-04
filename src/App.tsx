import { FormEvent, useState,MouseEventHandler,useEffect  } from "react"
import Container from "./components/Container"
import  Tabs  from "./components/Tabs-Nav/Tabs"
import TaskInput from "./components/TaskInput"
import Tasks from "./components/Tasks/Tasks"
import { v4 as uuidv4 } from 'uuid'
import SyncLoader from "react-spinners/SyncLoader"

export interface _Task {
  id: string;
  name: string;
  completed: boolean;
}


function App() {

  const [tasks,setTasks] = useState<_Task[]>([])
  const [isActive,setIsActive] = useState(true)
  const [isLoading,setIsLoading] = useState(false)

  
 
  const handlClick : MouseEventHandler<HTMLButtonElement> = () =>{
    setIsActive(!isActive)
  }

  useEffect(()=>{
    setIsLoading(true);
    setTimeout(()=>{
      setIsLoading(false)
    },1000)
  },[isActive])

  const handlSubmit = (e:FormEvent<HTMLFormElement>, value:string) => {
    e.preventDefault();
    const newTask = {
      id:uuidv4(),
      name:value,
      completed:false
    }
    setTasks([...tasks,newTask])
  }

  const toggleActiveTask = (id: string, completed: boolean) => {
    setTasks((tasks) =>
      tasks.map((t) => {
        if (t.id === id) {
          t.completed = completed;
        }
        return t;
      })
    )
  };

  const handleDeleteTask = (id: string) => {
    setTasks((tasks) => tasks.filter((t) => t.id !== id));
  };

  return (
    <div className="container  mt-5">
      <div className="row justify-content-center pt-5 bg-white border border-2 rounded-1 p-3 gap-3"> 
        <Container >
          <Tabs handlClick={handlClick} isActive={isActive}/>
        </Container>
        {isLoading ? (
           <SyncLoader  color="rgba(0, 0, 0, 1)" className="d-flex justify-content-center mt-4" />
        ) : (
        <Container >
        <TaskInput handlSubmit={handlSubmit} isActive={isActive}/>
        <Tasks tasks={tasks}
               isActive={isActive}
               toggleActive={toggleActiveTask}
               handleDelete={handleDeleteTask}/>
      </Container>  )}
      </div>
    </div>
  )
}

export default App
