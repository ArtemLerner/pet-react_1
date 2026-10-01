
interface TaskRenderProps{
    name: string
}

export function TaskRender({name}: TaskRenderProps){

    return(
        <>
            <div className="task-block">
                <p className="task">{name}</p>
            </div>
        </>
    )
}
