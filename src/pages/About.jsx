import React from 'react';
import {
  Card,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from '@material-tailwind/react';

const About = () => {
  return (
    <div className="flex justify-center items-center m-8">
      <Card className="w-full md:w-2/3 lg:w-1/2">
        <CardBody>
          <Typography>About Us</Typography>
          <Typography color="blueGray" mt={4}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non
            arcu nec nulla ultricies blandit. Fusce volutpat, tortor nec posuere
            lobortis, justo nisi convallis metus, et dictum libero est id odio.
            Phasellus auctor quam a urna venenatis, nec lobortis enim cursus.
            Nulla facilisi. Integer in tellus at ante tincidunt sollicitudin
            eget a elit. Nam vel tellus quis elit interdum tempus.
          </Typography>
          <Typography>
            Nullam pulvinar pretium quam, id elementum est tincidunt ut. Sed
            quis urna arcu. Fusce ac nulla id ipsum eleifend consectetur ut id
            libero. Quisque sed venenatis dolor. Donec tempor consequat
            interdum. Ut accumsan magna non felis auctor, nec vehicula odio
            fermentum. Donec id augue a mi aliquam lobortis non sit amet leo.
          </Typography>
        </CardBody>
        <CardFooter>
          <Button ripple="light">Learn More</Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default About;
