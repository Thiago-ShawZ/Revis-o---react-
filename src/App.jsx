import { useState } from 'react'
import './App.css'


function App() {
  return (

    <>
    <header>
      <h1>login</h1>
    </header>

    <main>
    <form action="">
      <div>
        <label htmlFor="">Email: </label>
        <input type="email" id='email' placeholder='Digite seu Email' />
      </div>

      <div>
        <label htmlFor="">Senha: </label>
        <input type="password" id='Senha' placeholder='Digite sua Senha' />
      </div>

    </form>
    </main>
    
    </>
   

  )
}

export default App
