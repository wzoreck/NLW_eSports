// JSX: JavaScript + XML (HTML)

// React é um conglomerado de funções que retornam HTML, CSS e JS!

/* Principais conceitos do React Componentes / Propriedades
   Componente: é uma função que retorna um conjunto de tags HTML
   Propriedade:


*/

function Button() {
  return (
    <button>Enviar</button>
  )
}

function App() {
  //return <h1>Hello World</h1>
  return <Button />
}

export default App
