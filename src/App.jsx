import { useState } from 'react';
import FeedbackList from './Components/FeedbackList.jsx';
import Footer from './Components/Footer.jsx';
import NavbarComponent from './Components/Navbar.jsx';
import FeedbackData from './Data/FeedbackData.js';

const App = () => {
  const [feedback, setFeedback] = useState(FeedbackData);

  return (
    <div>
      <NavbarComponent />
      <FeedbackList feedback={feedback} />
      <Footer />
    </div>
  );
};

export default App;
