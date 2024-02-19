
import UserButton from "../atoms/Button"
function Sidebar({handleAddProject,projectList,selectProject,...props} ){
    return <aside  className="bg-black w-3/12 rounded-md flex flex-col h-screen mt-12 gap-6 md:p-4 p-1 items-center" {...props}>
        <h1 className="text-white mx-auto font-bold"> Your Projects</h1>
<UserButton addClasses="bg-stone-700 text-stone-400 hover:bg-stone-600 hover:text-stone-100 md:p-4  w-8/12 rounded-md break-words" onClick={handleAddProject} >+ Add Project</UserButton>
  <ol className="w-full">
    {projectList.map((project,projectIndex)=> <li className="p-2 text-xl" key={projectIndex+project.date}>
        <UserButton addClasses="bg-inherit w-full text-stone-400 hover:bg-stone-900  md:p-2 p-1 rounded-md break-words" onClick={()=>selectProject(project)} >{project.title}</UserButton>  </li>)}

  </ol>
    </aside>
}
export default Sidebar