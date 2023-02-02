import styles from './Task.module.css'
import { Trash } from 'phosphor-react'


interface TaskProps{
    id: string;
    title: string;
    isComplete: boolean;
    handleIsCompleteTask: (id: string) => void;
    handleDeleteTask: (uui: string) => void;
}


export function Task({id, title, isComplete, handleIsCompleteTask, handleDeleteTask}: TaskProps){

    return(
        <>
            <div className={styles.task}>
                <div className={styles.checkboxContainer}>
                    <label className={styles.label}>
                        <input type='checkbox' checked={isComplete} onClick={(e) => handleIsCompleteTask(id)}/>
                        <div className={styles.customCheckbox}>
                            <span></span>
                        </div>
                    </label>
                </div>
                <p className={isComplete ? styles.taskIsDone : styles.title}>{title}</p>
                <button onClick={(e) => handleDeleteTask(id)}>
                    <Trash size={20}/>
                </button>
            </div>
        </>
    )
}