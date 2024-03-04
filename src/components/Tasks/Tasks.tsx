import TaskItem from './TaskItem'
import { _Task } from '../../App'

const Tasks = ({
  tasks,
  toggleActive,
  handleDelete,
  isActive
}: {
  tasks: _Task[];
  toggleActive: (id: string, completed: boolean) => void;
  handleDelete: (id: string) => void;
  isActive:boolean
}) => {
  const active = tasks.filter((t) => t.completed === false)
  const complete = tasks.filter((t) => t.completed === true)
  return (
    <div>
        {isActive && active.length ? (
        active.map((t) => (
          <TaskItem
            key={t.id}
            name={t.name}
            completed={t.completed}
            id={t.id}
            toggleActive={toggleActive}
            handleDelete={handleDelete}
          />
        ))
      ) : !isActive && complete.length>0 ? (
        complete.map((t) => (
          <TaskItem
            key={t.id}
            name={t.name}
            completed={t.completed}
            id={t.id}
            toggleActive={toggleActive}
            handleDelete={handleDelete}
          />
        ))
      ): isActive && active.length==0 ? (<div className='text-center fw-bold'>No
      Active Tasks</div>
      ): !isActive && complete.length==0 && (<div className='text-center fw-bold'>No
      Completed Tasks</div>)}
    </div>
  )
}

export default Tasks