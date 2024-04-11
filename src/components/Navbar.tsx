import Container from './Container'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <Container>
        <nav className='flex justify-between items-center py-5 text-xl'>
            <h1 className='text-5xl font-bold'>Logo</h1>
            <ul className='flex gap-5'>
                <li><Link to={"/"}>Home</Link></li>
                <li><Link to={"/about"}>About</Link></li>
            </ul>
        </nav>
    </Container>
  )
}

export default Navbar