import React from 'react';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';

export default function produtosBusca(){
const [produto, setProduto] = useState({});
const router = useRouter();
const {id} = router.query;

useEffect(() => {
    try { fetch(`https://fakestoreapi.com/products/${id}`, 
            {
                headers: 
            {
              "ngrok-skip-browser-warning": "true",
            },
            })
                .then((response) => response.json())
                .then((data) => setProduto(data));
            } 
                catch (error) {
                console.log(error);
            }
        }, []);

console.log(produto);


return (
        <div>
            {produtosBusca ?
            (
            <div>
                <h1>{produto.title}</h1>
                <p>ID do Produto: {id}</p>
            </div>
            ) : (
                <p>Produto não encontrado ou carregando...</p>
            )}
        </div>
        )
}