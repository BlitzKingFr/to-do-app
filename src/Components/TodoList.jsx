import React from 'react'
import Todocard from './Todocard'
const Todolist = (props) => {
    const { todos, selectedTab } = props


    const filterTodosList = selectedTab === 'All' ?
        todos :
        selectedTab === 'Completed' ?
            todos.filter(val => val.complete) :
            todos.filter(val => !val.complete)
  return (
    <>
        {filterTodosList.map((todo,todoIndex) => {
            return(
                <Todocard 
                key={todoIndex}
                {...props} 
                todoIndex = {todoIndex}
                todo = {todo}/>
            )
        })}
    </>
  )
}

export default Todolist