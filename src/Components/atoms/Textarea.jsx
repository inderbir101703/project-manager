function Textarea({id,addClasses,onChange,children,...props}){
    return <>
    <label htmlFor={id}>{children}</label>
    <textarea className=" mb-4 w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600" onChange={onChange} id={id} {...props} /></>
    }
    export default Textarea