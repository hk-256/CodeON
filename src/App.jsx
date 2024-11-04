

import './App.css'
import Container from './Container'
import {BrowserRouter , Routes , Route} from "react-router-dom";
import Room from './Pages/Room'
import { CssBaseline } from '@mui/material';

function App() {

  return (

    <>
      <BrowserRouter>

        <Routes>

          <Route path='/' element={<Container/>}/>
          <Route path='/:id' element={<Room/>}/>

        </Routes>
       
      </BrowserRouter>
    </>
  )
}

export default App
