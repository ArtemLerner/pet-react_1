import {Form} from "../components/Form/Form.tsx";
// import {Header} from "../components/Header/Header.tsx";
import {TaskRender} from "../components/Task/Task.tsx";
import type {Task} from "../shared/config/Task.ts";
import {useState} from "react";


export function HomePage() {
    const [taskName, setTaskName] = useState<Task[]>([])
    const handleAddTask = (newTask: Task) =>{
        setTaskName(prevTask => [...prevTask, newTask]);
    }

    return (
        <>
            {/*<Header/>*/}
            <main>

                <div className="list_task">
                {
                    taskName.map(item => (
                        <TaskRender key={item.id} name={item.name} />
                    ))
                }
                </div>
                <Form addTask={handleAddTask}/>
            </main>
        </>
    )
}