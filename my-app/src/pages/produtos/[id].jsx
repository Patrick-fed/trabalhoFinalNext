import React from 'react';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';

export default function produtosDetalhe(){
const [produto, setProduto] = useState(null);
const router = useRouter();
const {id} = router.query;

useEffect(() => {
    if(!id) return;

    fetch(`https://fakestoreapi.com/products/${id}`)
        .then((response) => response.json())
        .then((data) => setProduto(data))
        .catch((error) => console.log(error))
     
    }, [id]);

console.log(produto);


return (
        <div>
            {produto ?
            (
            <div>
                <h1>{produto.title}</h1>
                <p>ID do Produto: {id}</p>
                <p>Preço: R$ {produto.price}</p>
                <p>{produto.description}</p>
            </div>
            ) : (
                <p>Produto não encontrado ou carregando...</p>
            )}
        </div>
        )
}