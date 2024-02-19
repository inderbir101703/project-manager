function UserInput({id,addClasses,type="",children,onChange,...props}){
let defaultStyle="mb-4 w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600"

return <span>
{children && <label htmlFor={id} className="p-4">{children}</label>}
<input className={addClasses ?? defaultStyle} id={id} onChange={onChange} type={type} {...props}/></span>
}
export default UserInput