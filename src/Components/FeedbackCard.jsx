import { useState } from 'react';
import {
  Card,
  CardBody,
  CardFooter,
  Typography,
  Button,
  Badge,
} from '@material-tailwind/react';

const FeedbackCard = () => {
  const [rating, setRating] = useState(9);

  return (
    <div className="flex flex-col md:flex-row justify-center items-center gap-4 m-8">
      <Badge content={rating} className="m-auto p-auto" placement="top-end">
        <Card className="w-full md:w-auto">
          <CardBody className="gap-4">
            <div className="flex items-center justify-between mb-2">
              <Typography variant="h5" color="blueGray">
                Feedback
              </Typography>
            </div>
            <Typography>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab
              voluptates reiciendis sed adipisci aspernatur quidem corrupti illo
              qui. Fuga, rerum repudiandae quam nobis suscipit deserunt
              dignissimos animi voluptatibus natus atque. Lorem ipsum dolor sit
              amet consectetur, adipisicing elit. Corporis necessitatibus
              possimus ullam quos sint, cum, nemo numquam tenetur voluptatum
              assumenda illum at sed veniam. Cum molestias repellat amet quas
              id!
            </Typography>
          </CardBody>
          <CardFooter className="pt-0">
            <Button>Submit</Button>
          </CardFooter>
        </Card>
      </Badge>
    </div>
  );
};

export default FeedbackCard;
