import './App.css'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import PokemonPage from './Pages/PokemonPage'

function App() {


  return (
    <Router basename="/pokedex">
      <Routes>
        <Route path='/' element={<PokemonPage />} />
        <Route path='/:pokemon_name' element={<PokemonPage />} />
      </Routes>
    </Router>

  )
}

export default App

