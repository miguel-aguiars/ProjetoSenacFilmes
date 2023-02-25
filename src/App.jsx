import './App.css'
import CardFilme from './components/CardFilme/CardFilme'

//exporta a função App()
export default function App() {

  const rogaiPorNos = {
    titulo: "Rogai por nós",
    nota: "9.0",
    poster: "https://www.themoviedb.org/t/p/w300_and_h450_bestv2/zduyzcjyahZtP4fGZE6789h04IM.jpg"
  }


  const homemFormiga = {
    titulo: "Homem Formiga",
    nota: "7.4",
    poster: "https://www.themoviedb.org/t/p/w300_and_h450_bestv2/3aJNiESDK7quCw9IpsUCFXqvq24.jpg"
  }

  const lugarSilencioso = {
    titulo: "Lugar Silencioso",
    nota: "8.6",
    poster: "https://www.themoviedb.org/t/p/w300_and_h450_bestv2/70XFvmFRrdVxAjne5f3ItwRBtuQ.jpg"
  }

  return (
    <div className="App">
      <h1>Senac Filmes</h1>

      <h2>FIlmes em Alta</h2>

      <section className='secaoFilmes'>
        <CardFilme filme={homemFormiga} />
        <CardFilme filme={rogaiPorNos} />
        <CardFilme filme={lugarSilencioso} />
      </section>


    </div>

  )
}


