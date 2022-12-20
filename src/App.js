import { Routes,Route,Link } from 'react-router-dom'

import Todolist from './useContext/todolist'//sử dụng (useContext kết hợp với useReducer)
import UseEffect from './useEffect'
import UseMemo from './useMemo'
import UseReducer from './useReducer'
import UseState from './useState/index'
import Clips from './useImperativeHandle'

//file css
import Footter from './footter'
import Heading from './heading'
import GlobalStyles from './globalStyles'
import Button from './button'
import './App.css'

function App() {
  return (
    <div className='App'>
      <nav>
        <ul>
          <li>
            <Link to='/'>UseContext</Link>
          </li>
          <li>
            <Link to='/useEffect'>UseEffect</Link>
          </li>
          <li>
            <Link to='/useImperativeHandle'>UseImperativeHandle</Link>
          </li>
          <li>
            <Link to='/useMemo'>UseMemo</Link>
          </li>
          <li>
            <Link to='/useReducer'>UseReducer</Link>
          </li>
          <li>
            <Link to='/useState'>UseState</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path='/' element = {<Todolist />} />
        <Route path='/useEffect' element = {<UseEffect />} />
        <Route path='/useImperativeHandle' element = {<Clips />} />
        <Route path='/useMemo' element = {<UseMemo />} />
        <Route path='/useReducer' element = {<UseReducer />} />
        <Route path='/useState' element = {<UseState />} />
      </Routes>

      <GlobalStyles>
        <div>
          <Footter />
          <Heading />
          <Button />
          <Button primary />
          <Button danger />
        </div>
      </GlobalStyles>
    </div>

    // <>
    //   <UseState />
    //   <UseEffect />
    //   <UseMemo />
    //   <UseReducer />
    //   <Todolist />
    //   <Clips />
    //   <GlobalStyles>
    //     <div>
    //           <Footter />
    //           <Heading />
    //           <Button />
    //           <Button primary />
    //           <Button danger />
    //     </div>
    //   </GlobalStyles>
    // </>
  )
}

export default App
