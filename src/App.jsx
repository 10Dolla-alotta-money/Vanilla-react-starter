import { v4 as uuidv4 } from 'uuid';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import FeedbackList from './Components/FeedbackList.jsx';
import Footer from './Components/Footer.jsx';
import NavbarComponent from './Components/Navbar.jsx';
import FeedbackData from './Data/FeedbackData.js';
import About from './pages/About.jsx';
import FeedbackForm from './Components/FeedbackForm.jsx';

const App = () => {
  const [feedback, setFeedback] = useState(FeedbackData);

  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4();
    setFeedback([newFeedback, ...feedback]);
  };

  const handleDeleteClick = (id) => {
    if (window.confirm('Are you sure you wanna delete this?')) {
      setFeedback(feedback.filter((item) => item.id !== id));
    }
  };

  return (
    <Router>
      <div>
        <NavbarComponent />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <FeedbackForm handleAdd={addFeedback} />
                <FeedbackList
                  feedback={feedback}
                  handleDelete={handleDeleteClick}
                />
              </>
            }
          />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
};

export default App;
