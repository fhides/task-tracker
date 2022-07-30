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
