import './App.css';
import 'font-awesome/css/font-awesome.min.css';
import SearchPage from './HomePage/SearchPage';
import Page2 from './ResultsPage/Page2';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

const App = (props) => {
  const location = useLocation();
  return (
    <div className="App">
      <body className='App-body'>
        <AnimatePresence exitBeforeEnter initial={false} >
          <Routes location={location} key={location.pathname}>
            <Route path='/' element={<SearchPage />} />
            <Route path='/resultspage' element={<Page2 />} />
          </Routes>
        </AnimatePresence>
      </body>
    </div>
  );
}

export default App;
