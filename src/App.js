import React from 'react'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Page1 from './Component1/Page1'
import Footend from './Component1/Footend'
import Home from './Component1/Home'
import About from'./Component1/About'
import Todo from './Component1/Todo'


const App = () => {
  return (
    <div>
      <Router>
        <div>
          <Page1/>
        </div>
        <Routes>
          <Route path='/home' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/todo' element={<Todo/>}/>

        </Routes>
      </Router>
      <div>
        <Footend/>
      </div>
      
    </div>
  )
}

export default App
