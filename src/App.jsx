import './App.css'
import CardFilme from './components/CardFilme/CardFilme'

//exporta a função App()
export default function App() {

  return (
    <div className="App">
      <h1>Senac Filmes</h1>

      <CardFilme />
      <CardFilme />
      <CardFilme />

    </div>

  )
}


