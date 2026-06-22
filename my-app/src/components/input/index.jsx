import styles from '@/styles/input.module.css';

export default function Input({ label, type = "text", value, onChange }) {
  return (
    <div className={styles.inputContainer}>
      <label className={styles.label}>{label}</label>
      <input 
        type={type}
        value={value} 
        onChange={onChange} 
        className={styles.inputField}
      />
    </div>
  );
}