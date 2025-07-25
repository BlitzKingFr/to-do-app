const Header = (props) => {
    const {todos} = props;
    const todosLength = todos.length;
    const isTasksPlural = todosLength != 1
    const tasksorTask = isTasksPlural? "tasks" : "task";
  return (
    <header>
        <h1 className='text-gradient'>You have {todosLength} open {tasksorTask}.</h1>
    </header>
  )
}

export default Header