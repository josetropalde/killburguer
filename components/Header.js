import styles from '../styles/Header.module.css'

const Header = () => {
  return (
    <>
    <header className={styles.header}>
      <img src='/stain1.png' className={styles.firstStain}/>
      <img src='/stain2.png' className={styles.secondStain}/>
      <div className={styles.logo}>
        <img src="/killburguer-logo.jpg" />
      </div>
    </header>
    </>
  )
}

export default Header
