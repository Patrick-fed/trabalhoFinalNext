import React from 'react'
import { useState,useEffect } from 'react'

export default function CriarProduto() {
const[title, setTitle] = useState("");
const[price, setPrice] = useState("");
const[description, setDescription] = useState("");
const[imagem, setImagem] = useState("");

const salvarProduto = () => {
  const novoProduto = {
    title: title,
    description: description,
    price: Number(price),
    image: imagem
  };
  console.log("Produto pronto para envio:", novoProduto);
    alert("Produto salvo! Verifique o Console (F12).");
};



  return (
    <div>
      <h2>Cadastrar novo produto</h2>
      
      <label>Título</label>
      <input 
        value={title} 
        onChange={(event) => setTitle(event.target.value)} 
      />

      <label>Descrição</label>
      <input 
        value={description} 
        onChange={(event) => setDescription(event.target.value)} 
      />

      <label>Preço</label>
      <input 
        type="number"
        value={price} 
        onChange={(event) => setPrice(event.target.value)} 
      />

      <label>Imagem (URL)</label>
      <input 
        value={imagem} 
        onChange={(event) => setImagem(event.target.value)} 
      />
    
      <button onClick={salvarProduto}>Salvar produto</button>
    </div>
  )
}
