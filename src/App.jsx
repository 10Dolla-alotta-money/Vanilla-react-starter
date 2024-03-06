import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import FeedbackForm from './Components/FeedbackForm.jsx';
import FeedbackList from './Components/FeedbackList.jsx';
import Footer from './Components/Footer.jsx';
import NavbarComponent from './Components/Navbar.jsx';
import { FeedbackProvider } from './Context/FeedbackContext.jsx';
import About from './pages/About.jsx';

const App = () => {
  return (
    <FeedbackProvider>
      <Router>
        <div>
          <NavbarComponent />
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <FeedbackForm />
                  <FeedbackList />
                </>
              }
            />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </FeedbackProvider>
  );
};

export default App;
