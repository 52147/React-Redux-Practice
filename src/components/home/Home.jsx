import React, {useState} from "react"

export const Home = () => {
  const [input, setInput] = useState();
  const [list, setList] = useState([]);

  const [editIndex, setEditIndex] = useState(-1);
  const [editText, setEditText] = useState("");

  const addElement = () => {
    if(input.trim() !== ""){
      setList([...list, {text: input, completed: false}])
    }
    setInput("");
  }
  const handleDelete = (index) => {
    const newArray = [...list];
    newArray.splice(index, 1);
    setList(newArray);
  }
  const toggleCompleted = (index) => {
    const newArray = [...list];
    newArray[index].completed = !newArray[index].completed;
    setList(newArray);
  }
  const removeAll = () => {
    setList([])
  }
  const handleEdit = (index, text) => {
    setEditIndex(index);
    setEditText(text);
  }
  const handleSave = (index) => {
    const newArray = list.map((element, i) => i === index ? {...element, text: editText} : element)
    setList(newArray)
    setEditIndex(-1)
    setEditText("")
  }
  const handleCancle = () => {
    setEditIndex(-1);
    setEditText("");
  }
  return (
    <>
      <input type="text" value = {input} onChange = {(e) => setInput(e.target.value)}/>
      {input}
      <button onClick = {addElement}>Add</button>
      <button onClick = {removeAll}>Remove All</button>

      <ul>
        {
          list.map((element, index) => (
            <li key = {index} style = {{textDecoration : element.completed ? "line-through" : "none"}}>
              {
                index === editIndex ? (
                  <>
                    <input type="text"  value = {editText} onChange = {(e) => setEditText(e.target.value)}/>
                    <button onClick = {() => handleSave(index)}>Save</button>
                    <button onClick = {handleCancle}>Cancle</button>
                  </>

                ) : (
                  <>
                    <input type="checkbox" onChange = {() => toggleCompleted(index)}/>
                    {element.text}
                    <button onClick = {() => handleDelete(index)}>Delete</button>
                    <button onClick = {() => handleEdit(index, element.text)}>Edit</button>
                  
                  </>
                )
              }

            </li>
          ))
        }
      </ul>    
    </>
  )

  

}