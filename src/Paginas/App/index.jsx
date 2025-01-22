import { useRoutes, BrowserRouter } from 'react-router-dom'
import Administrador from '../Administrador'
import Aguinaldo from '../Aguinaldo'
import Dias_libres from'../Dias_libres'
import Inicio from '../Inicio'
import NotFound from '../NotFound'
import Pagos from '../Pagos'
import Personal from '../Personal'
import './App.css'
import Navbar from '../../Componentes/Navbar'

const AppRoutes = () => {
  let routes = useRoutes ([
    { path: '/', element: <Inicio /> },
    { path: '/administrador', element: <Administrador /> },
    { path: '/aguinaldo', element: <Aguinaldo /> },
    { path: '/dias-libres', element: <Dias_libres /> },
    { path: '/*', element: <NotFound /> },
    { path: '/pagos', element: <Pagos /> },
    { path: '/personal', element: <Personal /> }
])
  return routes
}

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <AppRoutes/>
    </BrowserRouter>
  )
}

export default App
