import React from 'react';
import Link from 'next/link';
import styles from './card.module.css';
import Botao from '../button';


export default function Card({id, title, price, description, category, image}) {
  return (
    <div className={styles.card}>
      <img
        src={image}
        alt={'Imagem do produto: ${title}'}
        width={200}
        height={200}
        className={styles.image}
      />

      <div className={styles.content}>
        <h2 className={styles.title}>{title}</h2>

        <span className={styles.price}>R$ {price}</span>

        <p className={styles.description}>{description}</p>

        <p className={styles.category}>{category}</p>


        <Link href={`/produtos/${id}`}>
          <Botao className={styles.button}>
            Ver detalhes
          </Botao>
        </Link>
      </div>
    </div>
    )
}
