import styles from '@/styles/botao.module.css';

export default function Botao({ children, onClick, type = "button", className }) {
  // Se uma classe externa for passada, usa ela, senão usa a padrão do módulo
  return (
    <button 
      type={type} 
      onClick={onClick} 
      className={className || styles.botaoPrimario}
    >
      {children}
    </button>
  );
}