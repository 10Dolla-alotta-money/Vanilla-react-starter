import FeedbackCard from './Components/FeedbackCard.jsx';
import Footer from './Components/Footer.jsx';
import NavbarComponent from './Components/Navbar.jsx';

const App = () => {
  return (
    <div>
      <NavbarComponent />
      <FeedbackCard />
      <FeedbackCard />
      <FeedbackCard />
      <Footer />
    </div>
  );
};

export default App;
