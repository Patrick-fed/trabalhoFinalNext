import Head from "next/head";
import { useState, useEffect } from "react";
import Link from "next/link";
import Card from "@/components/cards";
import styles from "@/styles/Home.module.css";

export default function Home() {
  const [produtos, setProdutos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProdutos(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Erro ao buscar produto: ", err);
        setLoading(false);
      });
  }, []);

  return (
    <>
      <Head>
        <title>Trabalho final Next</title>
      </Head>

      
      <div className={styles.container}>
        
        
        {loading ? (
          <h2>Carregando produtos... ⏳</h2>
        ) : (
          produtos.map((produto) => (
            <Card
              key={produto.id}
              id={produto.id}
              title={produto.title}
              description={produto.description}
              price={produto.price}
              image={produto.image}
              category={produto.category}
            />
          ))
        )}

        <br />
        
        <Link href={`/criarProdutos`}>
          <button style={{ marginTop: '20px', padding: '10px' }}>Criar novo produto</button>
        </Link>
      </div>
    </>
  );
}