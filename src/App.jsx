import { useState } from "react"
import Header from "./Components/Header"
import Tabs from "./Components/Tabs"
import TodoList from "./Components/TodoList"
import TodoListInput from "./Components/TodoListInput"

function App() {

  const [todos,setTodos] = useState([{ input: 'Hello! Add your first todo!', complete: true }]);

  const [selectedTab,setSelectedTab] = useState("Open")

  function handleAddTodo(newTodo){

    const newTodoList = [...todos, {input:newTodo , complete:false}];
    setTodos(newTodoList)
  }
  function handleCompleteTodo(index) {
    let newTodoList = [...todos]
    let completedTodo = todos[index]
    completedTodo['complete'] = true
    newTodoList[index] = completedTodo
    setTodos(newTodoList)

  }
  function handleDelete(index){
    let newTodoList = todos.filter((val, valIndex) => {
      return valIndex !== index
    })
    setTodos(newTodoList)
  }

  return (
    <>
      <Header todos = {todos}/>
      <Tabs todos = {todos} selectedTab = {selectedTab} setSelectedTab = {setSelectedTab}/>
      <TodoList todos = {todos} selectedTab={selectedTab} handleDelete = {handleDelete} handleCompleteTodo ={handleCompleteTodo}/>
      <TodoListInput handleAddTodo={handleAddTodo}  />
    </>
  )
}

export default App
