import { Catalogo } from './home/Catalogo'
import { Servicios } from './home/Servicios'
import { Testimonios } from './home/Testimonios'
import { Contacto } from './home/Contacto'
import { Nosotros } from './home/Nosotros'
import { MainFooter } from './layouts/MainFooter'
import { MainHeader } from './layouts/MainHeader'

function App() {

  return (
    <>
      <MainHeader/>

      <Nosotros />

      <Servicios />

      <Catalogo />

      <Contacto />

      <Testimonios />

      <MainFooter />
    </>
  )
}

export default App
