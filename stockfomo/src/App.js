import './App.css';
import 'font-awesome/css/font-awesome.min.css';
import SearchPage from './HomePage/SearchPage';
import Page2 from './ResultsPage/Page2';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { useState } from 'react';

const App = (props) => {
  const [searchQuery, setSearchQuery] = useState();
  const location = useLocation();

  const searchSubmit = (tickerValue) => {
    setSearchQuery = {}
  }
 
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
