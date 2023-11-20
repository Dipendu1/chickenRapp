import React from 'react'
import Home from './Components/Home'
import Contact from './Components/Contact'
import TodoList from './Components/TodoList'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Footer from './Components/Footer'
import Navigation from './Navigation/Navigation'

function App() {
  return (
    <div>
      <Router>
        <div>
          <Navigation/>
        </div>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/contact' element={<Contact style={{backgroundColor:'black', height:'100%', width:'100%'}}/>}/>
          <Route path='/todolist' element={<TodoList/>}/>
        </Routes>
      </Router>
      <Footer/>
    </div>
  )
}

export default App