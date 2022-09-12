// JSX: JavaScript + XML (HTML)

// React é um conglomerado de funções que retornam HTML, CSS e JS!

/* Principais conceitos do React Componentes / Propriedades
   Componente: é uma função que retorna um conjunto de tags HTML, podem ser reaproveitados.
   Propriedade: permite trazer diferênciação entre cada 


*/

interface ButtonProps {
  title: string;
}

function Button(props: ButtonProps) {
  return (
    <button>{props.title}</button> // Se usa chaves quando quer incluir JS em um componente HTML
  )
}

function App() {
  //return <h1>Hello World</h1>
  return (
    <div>
      <Button title="Enviar 1" />
      <Button title="Enviar 2" />
      <Button title="Enviar 3" />
      <Button title="Enviar 4" />
    </div>
  )
}

export default App
