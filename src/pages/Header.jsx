import { Link } from "react-router-dom";

function Header(){
    return (
        <nav>
            <Link to ="/">Home</Link> |{' '}
            <Link to ="/Sobre">Sobre</Link> |{' '}
            <Link to ="/Projetos">Projetos</Link> |{' '}
        </nav>
    )
}

export default Header;