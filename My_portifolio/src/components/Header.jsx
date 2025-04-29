import { Link } from 'react-router-dom'

function Header() {
  return (
    <header style={styles.header}>
      <nav style={styles.nav}>
        <Link to="/" style={styles.link}>Home</Link>
        <Link to="/sobre" style={styles.link}>Sobre</Link>
        <Link to="/projetos" style={styles.link}>Projetos</Link>
        <Link to="/contato" style={styles.link}>Contato</Link>
      </nav>
    </header>
  )
}

const styles = {
  header: {
    padding: '1rem',
    backgroundColor: '#222',
    color: '#fff'
  },
  nav: {
    display: 'flex',
    gap: '1rem',
    justifyContent: 'center'
  },
  link: {
    color: 'white',
    textDecoration: 'none'
  }
}

export default Header
