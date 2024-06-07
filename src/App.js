import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Add from './component/Add'
import Search from './component/Search'
import Dlt from './component/Dlt'
import View from './component/View'

export const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/'element={(<Add/>)}/>
      <Route path='/search'element={(<Search/>)}/>
      <Route path='/dlt'element={(<Dlt/>)}/>
      <Route path='/view'element={(<View/>)}/>
    </Routes>
    </BrowserRouter>
  )
}
export default App;