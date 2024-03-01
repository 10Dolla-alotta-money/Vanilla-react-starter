import React from 'react';

const FeedbackItem = () => {
  return (
    <>
      <h2 className="text-xl font-semibold mb-4">Feedback</h2>
      <div className="mb-4">
        <p className="block text-gray-700 text-sm font-bold mb-2">
          Rating: {rating} {/* Hardcoded rating displayed */}
        </p>
      </div>
      <div className="mb-4">
        <p className="block text-gray-700 text-sm font-bold mb-2">Feedback:</p>
        <p className="px-3 py-2 border border-gray-300 rounded-md">
          {feedbackText} {/* Hardcoded feedback text displayed */}
        </p>
      </div>
    </>
  );
};

export default FeedbackItem;
