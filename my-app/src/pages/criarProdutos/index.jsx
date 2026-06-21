import React from 'react'
import { useState,useEffect } from 'react'

export default function CriarProdut() {
const[title, setTile] = useState;
const[price, setPrice] = useState;
const[description, setDescription] = useState;
const[category, setCategory] = useState;
const[imagem, setImagem] = useState;

useEffect(() => {
    try {
      fetch("https://overdraft-replica-concept.ngrok-free.dev/produtos", {
        headers: {
          "ngrok-skip-browser-warning": "true",
        },
      })
        .then((response) => response.json())
        .then((data) => setProdutos(data));
    } catch (error) {
      console.log(error);
    }
  }, []);

  if(!produtos){
    Carregando
  }

  const salvarProduto = () => {
    alert(
      JSON.stringify({
        title: "Produto Teste",
        description: "Descrição do produto teste",
        price: 100,
        imagem: "https://via.placeholder.com/150",
      }),
    )   ;
     try {
       fetch("https://overdraft-replica-concept.ngrok-free.dev/produtos", {
         headers: {
           "ngrok-skip-browser-warning": "true",
         },
         method: "POST",
         // ATUALIZAR PARA PEGAR VALORES DO FORMULÁRIO
         body: {
         title: "Produto Teste",
         description: "Descrição do produto teste",
         price: 100,
         imagem: "https://via.placeholder.com/150",
          },
       }).then(alert("Produto criado com sucesso!"));
     } catch (error) {
       console.log(error);
     }
  };


  return (
    <div>
      title
      <input onChange={(event) => console.log(event.target.value)}> </input>
      description
      <input onChange={(event) => console.log(event)}> </input>
      price
      <input onChange={(event) => console.log(event)}> </input>
      imagem
    
      <button onClick={salvarProduto}>Salvar produto</button>
    </div>
  )
}
