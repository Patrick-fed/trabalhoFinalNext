import React from 'react'
import styles from card.module.css

export default function Card({id, title, price, description, category, image}) {
  return (
    <div className={styles.card}>
      <img
        src={image}
        alt="Imagem do produto"
        width={200}
        height={200}
        className={styles.image}
      />

      <div className={styles.content}>
        <h2 className={styles.title}>{title}</h2>

        <span className={styles.price}>R$ {price}</span>

        <p className={styles.description}>{description}</p>

        <p className={styles.category}>{category}</p>

        <p className={styles.image}>{image}</p>

        <Link href={`/produto/${id}`}>
          <button className={styles.button}>Comprar</button>
        </Link>
      </div>
    </div>
    )
}
