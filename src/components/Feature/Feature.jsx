import './Feature.css'
import PropTypes from 'prop-types';
import { AiFillCheckCircle } from 'react-icons/ai';

const Feature = ({feature}) => {
    return (
        <div>
            <p className='text-center flex items-center'><AiFillCheckCircle className='text-green-500 mr-2' />{feature}</p>
        </div>
    );
};

Feature.propTypes = {
    feature: PropTypes.string.isRequired
}

export default Feature;