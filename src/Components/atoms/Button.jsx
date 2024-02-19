function UserButton({addClasses,variant,onClick,children,...props}){
    return <button className={addClasses} onClick={onClick} {...props}>{children}</button>
}
export default UserButton