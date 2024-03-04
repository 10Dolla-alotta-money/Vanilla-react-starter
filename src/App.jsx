import { v4 as uuidv4 } from 'uuid';
import { useState } from 'react';
import FeedbackList from './Components/FeedbackList.jsx';
import Footer from './Components/Footer.jsx';
import NavbarComponent from './Components/Navbar.jsx';
import FeedbackData from './Data/FeedbackData.js';
import FeedbackForm from './Components/FeedbackForm.jsx';

const App = () => {
  const [feedback, setFeedback] = useState(FeedbackData);
  const [comment, setComment] = useState('');

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
    <div>
      <NavbarComponent />
      <FeedbackForm handleAdd={addFeedback} />
      <FeedbackList feedback={feedback} handleDelete={handleDeleteClick} />
      <Footer />
    </div>
  );
};

export default App;
