import { useState, FormEvent, ChangeEvent, InvalidEvent } from "react"
import { v4 as uuidv4 } from 'uuid';

import { Header } from "./components/Header"
import { PlusCircle } from "phosphor-react"


import styles from './App.module.css'
import { TasksTable } from "./components/TasksTable"


export interface ITask{
  id: string;
  title: string;
  isComplete: boolean;
}


function App() {

  const [title, setTitle] = useState<string>('')
  const [tasks, setTasks] = useState<ITask[]>([])


  const handleCreateNewTask = (event: FormEvent) =>{
    event.preventDefault()
    
    if(title !== ''){
      setTasks([...tasks, 
        {
          id: uuidv4(),
          title: title,
          isComplete: false
          }
      ])
    }
    setTitle('')
  }
  

  const handleNewTaskChange = (event: ChangeEvent<HTMLInputElement>) => {
    event.target.setCustomValidity('')
    setTitle(event.target.value)
  }

  const handleNewTaskInvalid = (event: InvalidEvent<HTMLInputElement>) =>{
    event.target.setCustomValidity('Este campo é necessário')
  }

  return (
    <>
      <Header />
      <main className={styles.mainContent}>
          <form onSubmit={handleCreateNewTask} className={styles.formTask}>
            <input 
              type="text" 
              placeholder="Adicione uma nova tarefa" 
              autoFocus 
              onChange={handleNewTaskChange} 
              value={title} 
              onInvalid={handleNewTaskInvalid}
              required
            />
            <button type="submit">
              Criar
              <PlusCircle size={30}/>
            </button>
          </form>
          <TasksTable tasks={tasks} setTasks={setTasks}/>
      </main>
    </>
  )
}

export default App
