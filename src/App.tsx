import { useState } from 'react'
import Tasks from "./page/Tasks";
import Header from "./component/ui/Header";
import './App.css'
import {Route, Routes} from "react-router-dom";
import TaskDetail from "./page/TaskDetail";

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
        <Header />
       <Routes>
           <Route path="/task" element={<Tasks/>}/>
           <Route path="/task/:id" element={<TaskDetail/>}/>
       </Routes>
    </div>
  )
}

export default App
