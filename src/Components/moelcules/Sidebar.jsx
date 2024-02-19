
import UserButton from "../atoms/Button"
function Sidebar({handleAddProject,projectList,selectProject,...props} ){
    return <section  className="bg-black w-3/12 rounded-md flex flex-col h-screen mt-12 gap-6 p-4 items-center" {...props}>
        <h1 className="text-white mx-auto font-bold"> Your Projects</h1>
<UserButton addClasses="bg-stone-700 text-stone-400 hover:bg-stone-600 hover:text-stone-100 p-4 w-48 rounded-md" onClick={handleAddProject} >+ Add Project</UserButton>
  <ol className="w-full">
    {projectList.map((project,projectIndex)=> <li className="p-2 text-xl" key={projectIndex+project.date}>
        <UserButton addClasses="bg-inherit w-full text-stone-400 hover:bg-stone-900  p-2 rounded-md" onClick={()=>selectProject(project)} >{project.title}</UserButton>  </li>)}

  </ol>
    </section>
}
export default Sidebar