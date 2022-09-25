// JSX: JavaScript + XML (HTML)

// React é um conglomerado de funções que retornam HTML, CSS e JS!

/* Principais conceitos do React Componentes / Propriedades
   
   Componente: é uma função que retorna um conjunto de tags HTML, podem ser reaproveitados.
   
   Propriedade: permite trazer diferênciação entre cada componente
*/

import './styles/main.css'

function App() {
  //return <h1>Hello World</h1>
  return (
    <div className="w-8 h-8 bg-violet-500">
    </div>
  )
}

export default App


/*
- Instalar Tail Wind CSS (https://tailwindcss.com)
  npm install -D tailwindcss postcss autoprefixer
  npx tailwindcss init -p
*/