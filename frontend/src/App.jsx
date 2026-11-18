import { Route, Routes } from 'react-router'
import { Accueil } from './pages/Accueil'

export default function App() {
  return (
    <Routes>
      <Route index element={<Accueil/> }/>
    </Routes>
  )
}


