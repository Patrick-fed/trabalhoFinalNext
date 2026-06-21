import Head from "next/head";
import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { useState, useEffect} from "react";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
const [produto, setProduto] = useState([]);

  return (
    <>
      <div className={styles.container}>
      {produtos.map((produto) => (
        <Card
          key={produto.id}
          id={produto.id}
          title={produto.title}
          description={produto.description}
          price={produto.price}
          imagem={produto.imagem}
        />
      ))}

      <Link href={`/criaProduto`}>
        <button>Criar produto</button>
      </Link>
      

      </div>
    </>
  );
}
