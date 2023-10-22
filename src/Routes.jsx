import {Route, Routes} from 'react-router-dom'

//importing components

import Programs from './components/Programs'
import News from './components/News'
import Home from './components/Home'
import NotFound from './components/NotFound'

const AppRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/programs' element={<Programs/>}/>
      <Route path='/news' element={<News/>}/>
      <Route path='/*' element={<NotFound/>}/>
    </Routes>
  )
}

export default AppRoutes;
