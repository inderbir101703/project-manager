import { forwardRef, useState } from "react"
import UserInput from "../atoms/UserInput"
import Textarea from "../atoms/Textarea"
import UserButton from "../atoms/Button"

const ProjectForm= forwardRef(function ProjectForm({updateProjects,projectList,...props},ref){
    const [projectData,setProjectData]=useState({title:'',description:'',date:''})
    
    function updateProjectData(e,key){
        setProjectData((prevData)=>{
            return {...prevData,
            [key]:e.target.value}
        })
    }
function checkTitleExists(data){
 let result=false
  
projectList.forEach(element => {
        if(element.title===data.title)
        {
         result= true   
        }
    });
   return result
}
    return <form className="flex flex-col items-end hidden" ref={ref} {...props} onSubmit={(e)=>{  e.preventDefault() 

         if(checkTitleExists(projectData))
         {
            alert('title alreay exists')
            return
         }
        updateProjects(projectData)}}>
<span>
<UserButton addClasses="p-4 w-48 rounded-md bg-inherit hover:bg-stone-200 mx-4 ">Cancel</UserButton>
<UserButton addClasses="bg-black text-stone-200 p-4 w-48 rounded-md"  type="submit" >save</UserButton>
</span>
<div>
   
 <UserInput type="text"  onChange={(e)=>updateProjectData(e,'title')} required>TITLE</UserInput>
 <Textarea onChange={(e)=>updateProjectData(e,'description')} required>DESCRIPTION</Textarea>
 <UserInput type="date" onChange={(e)=>updateProjectData(e,'date')} required>DUE DATE</UserInput>
</div>
    </form>
})
export default ProjectForm