import { AlertIcon } from './Alert.jsx';
import FeedbackItem from './FeedbackItem.jsx';

const FeedbackList = ({ feedback, handleDelete }) => {
  if (!feedback || feedback.length === 0) {
    return <AlertIcon message="No reviews have been added" />;
  }

  return (
    <div>
      {feedback.map((item) => (
        <FeedbackItem key={item.id} item={item} handleDelete={handleDelete} />
      ))}
    </div>
  );
};

export default FeedbackList;
