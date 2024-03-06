import React, { useState } from 'react';
import { useContext } from 'react';
import FeedbackContext from '../Context/FeedbackContext';
import { Button, Card, CardBody, Typography } from '@material-tailwind/react';

const FeedbackForm = () => {
  const { addFeedback } = useContext(FeedbackContext);

  const [text, setText] = useState('');
  const [rating, setRating] = useState('');
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [message, setMessage] = useState('');

  const handleTextChange = (e) => {
    setText(e.target.value);
    validateForm(e.target.value, rating);
  };

  const handleRatingChange = (e) => {
    setRating(e.target.value);
    validateForm(text, e.target.value);
  };

  const validateForm = (text, rating) => {
    if (text.trim().length >= 10 && rating !== '') {
      setBtnDisabled(false);
      setMessage('');
    } else {
      setBtnDisabled(true);
      setMessage(
        'Text must be at least 10 characters and a rating must be selected'
      );
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim().length >= 10 && rating !== '') {
      const newFeedback = {
        text,
        rating,
      };
      addFeedback(newFeedback);
      setText('');
      setRating('');
      setBtnDisabled(true);
      setMessage('');
    }
  };

  return (
    <div className="flex flex-col md:flex-row justify-center items-center gap-4 m-8">
      <Card className="w-full md:w-auto">
        <CardBody className="gap-4">
          <div className="flex items-center justify-between mb-7">
            <Typography variant="h2">
              How would you rate the products?
            </Typography>
          </div>
          <div className="relative h-10 w-72 min-w-[200px] mb-4">
            <select
              value={rating}
              onChange={handleRatingChange}
              className="peer h-full w-full rounded-[7px] border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 empty:!bg-gray-900 focus:border-2 focus:border-gray-900 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
            >
              <option value="">Select rating</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="4">5</option>
            </select>
          </div>
          <div className="relative w-full md:w-[32rem] mb-4">
            <div className="relative w-full min-w-[200px]">
              <textarea
                onChange={handleTextChange}
                value={text}
                rows="3"
                className="peer h-full min-h-[100px] w-full !resize-none rounded-[7px] border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-gray-900 focus:border-t-transparent focus:outline-0 disabled:resize-none disabled:border-0 disabled:bg-blue-gray-50"
                placeholder="Your Comment"
              ></textarea>
              {message && <p className="text-red-500 text-sm">{message}</p>}
            </div>
            <div className="flex flex-col md:flex-row w-full justify-between py-1.5">
              <Button className="md:w-[7rem] mb-2 md:mb-0" onClick={() => {}}>
                Close
              </Button>
              <Button
                className="md:w-[10rem]"
                type="submit"
                onClick={handleSubmit}
                disabled={btnDisabled}
              >
                Post Comment
              </Button>
            </div>
          </div>
        </CardBody>
      </Card>
    </div>
  );
};

export default FeedbackForm;
