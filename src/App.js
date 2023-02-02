import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import FeedbackStats from './components/FeedbackStats';
import Header from './components/Header';
import FeedbackList from './components/FeedbackList';
import FeedbackForm from './components/FeedbackForm';
import About from './pages/About';
import AboutLink from './components/AboutLink';
import { FeedbackProvider } from './context/FeedbackContext';

function App() {
  return (
    <FeedbackProvider>
      <Router>
        <Header />
        <div className='container'>
          <Routes>
            <Route
              exact
              path='/'
              element={
                <>
                  <FeedbackForm />
                  <FeedbackStats />
                  <FeedbackList />
                </>
              }
            ></Route>
            <Route path='/about' element={<About />} />
          </Routes>
          <AboutLink />
        </div>
      </Router>
    </FeedbackProvider>
  );
}

export default App;
