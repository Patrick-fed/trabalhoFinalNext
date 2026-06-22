import Head from "next/head";
import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { useState, useEffect} from "react";
import Link from "next/link";
import Card from "@/components/cards";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

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
    .catch((err) => console.error("Erro ao buscar produto: ", err))
},[]);

  return (
    <>
      <div className={'${styles.container}'}>
      {produtos.map((produto) => (
        <Card
          key={produto.id}
          id={produto.id}
          title={produto.title}
          description={produto.description}
          price={produto.price}
          image={produto.image}
          category={produto.category}
        />
      ))}

      <Link href={`/criarProdutos`}>
        <button>Criar produto</button>
      </Link>
      

      </div>
    </>
  );
}
