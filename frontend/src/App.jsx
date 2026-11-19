import { Route, Routes } from 'react-router'
import { Accueil } from './pages/Accueil'
import { MainLayout } from './components/layout/MainLayout'

export default function App() {
  return (
    <Routes>
      <Route element={<MainLayout/> }>
        <Route index element={<Accueil/>}/>
      </Route>
    </Routes>
  )
}


