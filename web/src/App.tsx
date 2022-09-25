// JSX: JavaScript + XML (HTML)

// React é um conglomerado de funções que retornam HTML, CSS e JS!

/* Principais conceitos do React Componentes / Propriedades
   
   Componente: é uma função que retorna um conjunto de tags HTML, podem ser reaproveitados.
   
   Propriedade: permite trazer diferênciação entre cada componente
*/

import { MagnifyingGlassPlus } from 'phosphor-react'

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

      <div className='grid grid-cols-6 gap-6 mt-16'>
       
        <a href="" className='relative'>
          <img src="/cs_go.jpg" alt="" />
          
          <div className='w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0'>
            <strong className='font-bold text-white block'>Counter Strike</strong>
            <span className='text-zinc-300 text-sm block'>4 anúncios</span>
          </div>
        </a>

        <a href="" className='relative'>
          <img src="/cs_go.jpg" alt="" />

          <div className='w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0'>
            <strong className='font-bold text-white block'>Counter Strike</strong>
            <span className='text-zinc-300 text-sm block'>4 anúncios</span>
          </div>
        </a>
        <a href="" className='relative'>
          <img src="/cs_go.jpg" alt="" />

          <div className='w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0'>
            <strong className='font-bold text-white block'>Counter Strike</strong>
            <span className='text-zinc-300 text-sm block'>4 anúncios</span>
          </div>
        </a>
        <a href="" className='relative'>
          <img src="/cs_go.jpg" alt="" />

          <div className='w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0'>
            <strong className='font-bold text-white block'>Counter Strike</strong>
            <span className='text-zinc-300 text-sm block'>4 anúncios</span>
          </div>
        </a>
        <a href="" className='relative'>
          <img src="/cs_go.jpg" alt="" />

          <div className='w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0'>
            <strong className='font-bold text-white block'>Counter Strike</strong>
            <span className='text-zinc-300 text-sm block'>4 anúncios</span>
          </div>
        </a>
        <a href="" className='relative'>
          <img src="/cs_go.jpg" alt="" />

          <div className='w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0'>
            <strong className='font-bold text-white block'>Counter Strike</strong>
            <span className='text-zinc-300 text-sm block'>4 anúncios</span>
          </div>
        </a>
      </div>
      
      <div className='pt-1 bg-nlw-gradient self-stretch rounded-lg overflow-hidden mt-8'>
        <div className='bg-[#2A2634] px-8 py-6 flex justify-between items-center'>
          <div>
            <strong className='text-2xl text-white font-black block'>Não encontrou seu duo?</strong>
            <span className='text-zinc-400'>Publique um anúncio para encontrar players!</span>
          </div>

          <button className='py-3 px-4 bg-violet-500 hover:bg-violet-600 text-white rounded-lg flex items-center gap-3'>
            <MagnifyingGlassPlus size={24} />
            Publicar anúncio 
          </button>
        </div>
      </div>
    </div>
  )
}

export default App


/*
- Instalar Tail Wind CSS (https://tailwindcss.com)
  npm install -D tailwindcss postcss autoprefixer
  npx tailwindcss init -p

- Icones phosphor
  npm install phosphor-react
*/