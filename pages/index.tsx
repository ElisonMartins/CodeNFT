import React from 'react'
import Header from '../components/Header'

function inicial() {
  return (
    <div className='h-screen bg-background flex justify-center'>
      <div className="w-3/4 ">
        <Header />
        
        <div className="text-white flex table-rown">
          <div className="w-tam m-16">
            <h1 className="px-10 py-10 text-3xl font-bold">
              Descubra e colete obras de arte digitais super raras
            </h1>
            <p>
              O maior mercado NFT. Criação digital autêntica e 
              verdadeiramente única. Assinado e emitido pelo 
              criador, possibilitado pela tecnologia blockchain.
            </p>
          </div>
          <div className="box-monkey h-72 w-80 m-16 rounded-md backdrop-blur-3xl bg-white/30
          flex justify-center">
            <img src="monkey.svg" className='' />
          </div>
        </div>
        <div>
          
        </div>
      </div>
    </div>
    
  )
}

export default inicial