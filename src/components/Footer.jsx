import styles from './Footer.module.css'

const Footer = () => {
  return (
    <footer className={styles.footer}>
        <h3>Escreva sobre o que você tem interesse!</h3>
        <p>Desenvolvido por &copy;<a href='https://www.linkedin.com/in/robdsjr007/' target='blank'>Robdsjr</a></p>
    </footer>
  )
}

export default Footer