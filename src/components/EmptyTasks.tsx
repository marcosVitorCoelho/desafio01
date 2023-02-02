import { Clipboard } from "phosphor-react"
import styles from './EmptyTasks.module.css'

export function EmptyTasks(){
    return (
        <div className={styles.empty}>
            <Clipboard size={70}/>
            <p>Você ainda não tem tarefas cadastradas</p>
            <p>Crie tarefas e organize seus itens a fazer</p>
        </div>
    )
}