import { useRef, useState } from "react"
import Sidebar from "../moelcules/Sidebar"
import ProjectListings from "../moelcules/ProjectListings"
import ProjectForm from "../moelcules/ProjectForm"


function Bars(){
    const [projects,setProjects]=useState([{title:"Learning React",description:'it is library which can be learnt easily. it got tremendous support from other developers',date:'2024-02-08',tasks:[]}])
    const[tasks,setTasks]=useState({})
    const [selectedProject,setSelectedProject]=useState(null)
   const formRef=useRef()
   const sideRef=useRef()

function handleAddTask(title,task){

    setTasks((prevTasks)=>{

        const existingTasks=(prevTasks[title]&& prevTasks[title].length>0)?prevTasks[title]:[]
   const copiedTasks=[...existingTasks,task]
  
        return {
            ...prevTasks,
            [title]:copiedTasks
        }
      })
}
function handleRemoveTasks(task,title){

    setTasks((prevTasks)=>{
        const fresult=prevTasks[title].filter((element)=>element!==task)
    return {...prevTasks,
        [title]:fresult}
    })
}
function handleRemoveProject(project){
    
    setProjects((prevProjects)=>{
        const fresult=prevProjects.filter((element)=>element.title!==project.title)

    return fresult
    })
    setSelectedProject(null)
}

    function handleAddProject(){
        setSelectedProject(null)
 formRef.current.style.display='flex'
 sideRef.current.style.display='none'
    }
    function selectProject(project){
        setSelectedProject(project)
    }
  function updateProjects(project){
setProjects((prevValue)=>{
    const fill=[...prevValue,project]
    formRef.current.reset()
    formRef.current.style.display='none'
    sideRef.current.style.display='block'
    return fill })

  }


    return   <div className="flex w-12/12">
<Sidebar handleAddProject={handleAddProject} projectList={projects} selectProject={selectProject}/>
    <main className="flex flex-col w-9/12 items-center justify-start p-32">
        <ProjectListings ref={sideRef} project={selectedProject} handleAddTask={handleAddTask} tasks={tasks} handleRemoveProject={handleRemoveProject} handleRemoveTasks={handleRemoveTasks}/>
       <ProjectForm  ref={formRef} updateProjects={updateProjects} projectList={projects}/>
        
    </main>
     </div>
}
export default Bars