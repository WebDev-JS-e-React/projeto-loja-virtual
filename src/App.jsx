import './App.css'
import hero from './assets/hero.png'
import Benefits from './components/Benefits'
import Categories from './components/Categories'
import HeroSection from './components/HeroSection'
import Products from './components/Products'

const App = () => {
  return (
    <div className="app">
      <HeroSection 
        titulo ="Ofertas imperdíveis para você"
        subtitulo = "Até 30% de desconto em produtos selecionados. Aproveite!"
        textoBotao = "Ver ofertas"
        imagemHero = {hero}
      />
      <Categories />
      <Products />
      <Benefits />
    </div>
  )
}

export default App
