 function Header(props) {
  const{todos}=props;
  const todosLength = todos.length

  const isTaskPlural = todos.length != 1
  const taskorTasks = isTaskPlural ? 'tasks' : 'task'

  return (
    <header>
      <h1 className ="text-gradient">You have {todosLength} open  {taskorTasks}</h1>
    </header>
    
  )
}
export default Header;