import { useState } from "react"
import UserButton from "../atoms/Button"
import UserInput from "../atoms/UserInput"

function Tasks({title,tasks,handleAddTask,handleRemoveTasks}){
const [taskValue,setTaskValue]=useState('')
function handleChange(e){
    setTaskValue(e.target.value)
}
    function handleSubmit(e){
        e.preventDefault()
        handleAddTask(title,taskValue)
     
    }
    function clearTasks(task){
        handleRemoveTasks(task,title)
    }
return <><div className="pt-8 pb-8">
    <h2 className="text-xl font-bold mt-8 mb-4">Tasks</h2>
    <form onSubmit={handleSubmit}>
    <UserInput addClasses="mb-2 w-1/2 p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600" onChange={handleChange} required/>
    <UserButton type="submit" addClasses="ml-4">Add Task</UserButton>
    </form>
</div>
<ul className="bg-stone-200 rounded-sm">
    {tasks[title]&& tasks[title].map((task,taskIndex)=><li key={taskIndex+task}><span className="flex justify-between"><p className="p-2 text-xl">{task}</p><UserButton onClick={()=>clearTasks(task)} addClasses="text-xl p-2">Clear</UserButton></span></li>)}


</ul>
</>
}
export default Tasks