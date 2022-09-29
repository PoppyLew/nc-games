import {Link} from 'react-router-dom';

const Nav = () => {
return (
    <nav>
        <Link to='/reviews' className='Review-link'> All Reviews </Link>
        <Link to='/reviews/strategy' className='Review-link'> Strategy </Link>
    <Link to='/reviews/hidden-roles' className='Review-link'> Hidden Roles </Link>
    <Link to='/reviews/dexterity' className='Review-link'> Dexterity </Link>
    <Link to='/reviews/push-your-luck' className='Review-link'> Push Your Luck </Link>
    <Link to='/reviews/roll-and-write' className='Review-link'> Roll And Write </Link>
    <Link to='/reviews/deck-building' className='Review-link'> Deck Building </Link>
    <Link to='/reviews/engine-building' className='Review-link'> Engine Building </Link>
    
    </nav>
)
}
export default Nav