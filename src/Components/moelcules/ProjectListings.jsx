import { forwardRef } from "react"
import UserButton from "../atoms/Button"
import ProjectInfo from "./ProjectInfo"

const ProjectListings= forwardRef(function ProjectListings({project,handleAddTask,tasks,handleRemoveTasks,handleRemoveProject,...props},ref){
return <section ref={ref} className={`${project && 'w-full'}`}>
   {!project && <><img className="w-24" src="public/logo.png" alt="project logo"/>
        <h2 className="p-4">No Project Selected</h2>
        <p className="p-4">Select a Project or get started with new one</p> 
    <UserButton addClasses="bg-stone-700 text-stone-400 hover:bg-stone-600 hover:text-stone-100 p-4 w-48 rounded-md" >Create New Project</UserButton></>}
    
    {project && <ProjectInfo project={project} handleAddTask={handleAddTask} tasks={tasks} handleRemoveTasks={handleRemoveTasks} handleRemoveProject={handleRemoveProject}/> }
    
    </section>
})
export default ProjectListings