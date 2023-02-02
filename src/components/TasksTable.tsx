
import { SetStateAction } from "react";
import { ITask } from "../App";
import { EmptyTasks } from "./EmptyTasks";
import { Task } from "./Task";
import styles from './TasksTable.module.css'


interface TaskArray{
    tasks: ITask[];
    setTasks: React.Dispatch<SetStateAction<ITask[]>>;
}


export function TasksTable({tasks, setTasks}: TaskArray){

  const handleIsCompleteTask = (uuid: string) => {
    const completedTask = tasks.map(task => {
      if(task.id === uuid) task.isComplete = !task.isComplete
      return task
    })
    setTasks(completedTask)
  }


    const completedTasks = () => {
        const completed = tasks.reduce((acc, task) => {
            if(task.isComplete) acc += 1
            return acc
        }, 0)

        return completed
    }

    const handleDeleteTask = (uuid: string) =>{
        const tasksWithoutDeletedOne = tasks.filter((task) => {
            return task.id !== uuid
        })
        setTasks(tasksWithoutDeletedOne)
    }

    return(
        <div className={styles.tasks}>
        <header className={styles.taskHeader}>
            <p>Tarefas criadas <span>{tasks.length}</span></p>
            <p>Concluídas <span>{completedTasks()} de {tasks.length}</span></p>
        </header>
        {tasks.length !== 0 ? tasks.map(task => {
            return (
                <>
                    <Task
                        key={task.id}
                        id={task.id}
                        title={task.title}
                        isComplete={task.isComplete}
                        handleIsCompleteTask={handleIsCompleteTask}
                        handleDeleteTask={handleDeleteTask}
                    />
                </>
            )
        }) : <EmptyTasks/>}
        
      </div>
    )
}
