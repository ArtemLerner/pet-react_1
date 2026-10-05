import type {Task} from "../../shared/config/Task.ts";

interface PropsTaskDel extends Task {
    onDelete(id: string): void;
}

export function TaskRender({name, id, onDelete}: PropsTaskDel) {
    return (
        <>
            <div className="task-block">
                <p className="task">{name}</p>
                <button className='delete_task' id={id}
                        onClick={() => {
                            onDelete(id);
                        }}
                >delete task
                </button>
            </div>
        </>
    )
}
