import UserButton from "../atoms/Button"
import Tasks from "./Tasks"
function ProjectInfo({project,handleAddTask,handleRemoveTasks,tasks,handleRemoveProject}){
return <><header className="border-b-2 border-stone-300 p-3 flex justify-between">
    <span><h1 className="text-3xl">{project.title}</h1>
    <p className="text-stone-400">{project.date}</p>
    <p className="text-xl mt-4">{project.description}</p></span>
    <UserButton addClasses="text-xl p-2" onClick={()=>handleRemoveProject(project)}>Delete</UserButton>
    </header>
    <Tasks title={project.title} handleAddTask={handleAddTask} handleRemoveTasks={handleRemoveTasks} tasks={tasks}/>
</>
}
export default ProjectInfo