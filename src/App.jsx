import './App.css'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import PokemonPage from './Pages/PokemonPage'

function App() {


  return (
    <Router basename="/">
      <Routes>
        <Route path='/smsn_pokedex' element={<PokemonPage />} />
        <Route path='/smsn_pokedex/:pokemon_name' element={<PokemonPage />} />
      </Routes>
    </Router>
  )
}

export default App

