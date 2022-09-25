// JSX: JavaScript + XML (HTML)

// React é um conglomerado de funções que retornam HTML, CSS e JS!

/* Principais conceitos do React Componentes / Propriedades
   
   Componente: é uma função que retorna um conjunto de tags HTML, podem ser reaproveitados.
   
   Propriedade: permite trazer diferênciação entre cada componente
*/

import './styles/main.css'

import logoImg from './assets/logo-nlw-esports.svg'

function App() {
  //return <h1>Hello World</h1>
  return (
    <div className='max-w-[1344px] mx-auto flex flex-col items-center my-20'>
      <img src={logoImg} alt="" />

      <h1 className='text-6xl text-white font-black mt-20'>
        Seu <span className='text-transparent bg-nlw-gradient bg-clip-text '>duo</span> está aqui
      </h1>
    </div>
  )
}

export default App


/*
- Instalar Tail Wind CSS (https://tailwindcss.com)
  npm install -D tailwindcss postcss autoprefixer
  npx tailwindcss init -p
*/