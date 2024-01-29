import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import Services from './pages/Services';
import Contact from './pages/Contact';
const App = () => {
  return (
    <div className='cursor-none select-none scroll-smooth transition-all'>
      <Routes>
        <Route path={'/'} element={<Home />} />
        <Route path={'/portfolio'} element={<Portfolio />} />
        <Route path={'/services'} element={<Services />} />
        <Route path={'/contact'} element={<Contact />} />
      </Routes>
    </div>
  )
}

export default App
