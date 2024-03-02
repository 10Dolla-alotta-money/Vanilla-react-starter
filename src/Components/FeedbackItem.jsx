import CustomCard from './Shared/CustomCard.jsx';
import {
  Badge,
  Button,
  Card as MaterialCard,
  CardBody,
  CardFooter,
  IconButton,
  Typography,
} from '@material-tailwind/react';

const FeedbackItem = ({ item, handleDelete }) => {
  return (
    <CustomCard>
      <div className="flex flex-col md:flex-row justify-center items-center gap-4 m-8">
        <Badge
          content={item.rating}
          className="m-auto p-auto"
          placement="top-start"
        >
          <MaterialCard className="">
            <CardBody className="gap-4">
              <div className="flex items-center justify-between mb-2">
                <Typography variant="h5" color="blueGray">
                  Feedback
                </Typography>
                <IconButton
                  variant="text"
                  size="lg"
                  onClick={() => handleDelete(item.id)}
                >
                  <i className="fas fa-circle-xmark  fa-lg" />
                </IconButton>
              </div>
              <Typography variant="small">{item.text}</Typography>
            </CardBody>
            <CardFooter className="pt-0">
              <Button>Submit</Button>
            </CardFooter>
          </MaterialCard>
        </Badge>
      </div>
    </CustomCard>
  );
};

export default FeedbackItem;
