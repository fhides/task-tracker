import { useState } from "react"
const AddTask = () => {
const[text, setText] = useState('')
const[day, setDay] = useState('')
const[reminder, setReminder] = useState(false)

function handleText(event) {
  setText(event.target.value);
}

function handleDay(event) {
  setDay(event.target.value);
}

function handleReminder(event) {
  setReminder(event.currentTarget.checked)
}
const onSubmit = (e) => {
    e.preventDefault()
    const postData = {
      day: day,
      text: text,
      reminder: reminder,
    };
  
    fetch("http://localhost:3000/data",{
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(postData),
    });
  
    if (!text){
      alert('please add task')
      return
    }
  
    setText('')
    setDay('')
    setReminder(false)
   
  }