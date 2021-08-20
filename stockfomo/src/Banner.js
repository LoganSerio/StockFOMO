import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faChartLine} from '@fortawesome/fontawesome-free-solid';

const Banner = (props) => {
    return (
        <div id='banner' className='jumbotron'>
            <h1>StockFOMO <FontAwesomeIcon className='float-right' icon={faChartLine} /></h1>
        </div>
    );
};
export default Banner;