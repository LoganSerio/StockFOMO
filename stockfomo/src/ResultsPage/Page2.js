import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Page2 = () => {
    return (
        <motion.div 
        initial={{ x: 1000 }} 
        animate={{ x: 0 }} 
        exit={{ x: 1000 }}
        transition={{ duration: 0.3 }}
        >
            <div>
                <p>This is page 2</p>
                <Link to='/'>
                    Go to Page 1
                </Link>
            </div>
        </motion.div>
    );
};
export default Page2;