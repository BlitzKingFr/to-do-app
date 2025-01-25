import { useState } from "react"
import Header from "./Components/Header"
import Tabs from "./Components/Tabs"
import Todolist from "./Components/Todolist"
import Todolistinput from "./Components/Todolistinput"

function App() {

  const [todos,setTodos] = useState([{ input: 'Hello! Add your first todo!', complete: true }]);

  const [selectedTab,setSelectedTab] = useState("Open")

  function handleAdd(newTodo){

    const newTodoList = [...todos, {input:newTodo , complete:false}];
    setTodos(newTodoList)
  }
  function handleCompleteTodo(index) {
    // update/edit/modify
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
      <Todolist todos = {todos} selectedTab={selectedTab} handleDelete = {handleDelete} handleCompleteTodo ={handleCompleteTodo}/>
      <Todolistinput handleAdd ={handleAdd}  />
    </>
  )
}

export default App
