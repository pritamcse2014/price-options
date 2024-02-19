import './Nav.css'
import PropTypes from 'prop-types';

const Nav = ({route}) => {
    return (
        <li className='mr-10 px-6 hover:bg-yellow-600'>
            <a href={route.path}>{route.name}</a>
        </li>
    );
};

Nav.propTypes = {
    route: PropTypes.object.isRequired
}

export default Nav;