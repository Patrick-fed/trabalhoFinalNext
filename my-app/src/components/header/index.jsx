import Link from 'next/link';
import styles from '@/styles/header.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <Link href="/" className={styles.navLink}>Home</Link>
        <Link href="/criarProdutos" className={styles.navLink}>Cadastrar Produto</Link>
      </nav>
    </header>
  );
}