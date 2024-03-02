import { useState } from 'react';
import FeedbackList from './Components/FeedbackList.jsx';
import Footer from './Components/Footer.jsx';
import NavbarComponent from './Components/Navbar.jsx';
import FeedbackData from './Data/FeedbackData.js';
import FeedbackForm from './Components/FeedbackForm.jsx';

const App = () => {
  const [feedback, setFeedback] = useState(FeedbackData);

  const handleDeleteClick = (id) => {
    if (window.confirm('Are you sure you wanna delete this?')) {
      setFeedback(feedback.filter((item) => item.id !== id));
    }
  };

  return (
    <div>
      <NavbarComponent />
      <FeedbackForm />
      <FeedbackList feedback={feedback} handleDelete={handleDeleteClick} />
      <Footer />
    </div>
  );
};

export default App;
