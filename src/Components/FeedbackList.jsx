import { AlertIcon } from './Alert.jsx';
import { useContext } from 'react';
import FeedbackItem from './FeedbackItem.jsx';
import FeedbackContext from '../Context/FeedbackContext.jsx';

const FeedbackList = () => {
  const { feedback } = useContext(FeedbackContext);

  if (!feedback || feedback.length === 0) {
    return <AlertIcon message="No reviews have been added" />;
  }

  return (
    <div>
      {feedback.map((item) => (
        <FeedbackItem key={item.id} item={item} />
      ))}
    </div>
  );
};

export default FeedbackList;
