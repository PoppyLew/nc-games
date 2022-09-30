import {Link} from 'react-router-dom';

const Nav = ({categories}) => {
return (
    <nav>
        <Link to='/reviews' className='Review-link'> All-Reviews </Link>
        {categories.map((category) => {
            return (
                <Link to={`/reviews/${category.slug}`} className='Review-link' key={category.slug}> {category.slug} </Link>
            )
        })}
    
    </nav>
)
}
export default Nav