import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
} from '@material-tailwind/react';
const LoginForm = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <Card className="w-full max-w-screen-lg sm:w-96">
        <Typography variant="h4" color="blue-gray" className="text-center">
          Sign Up
        </Typography>
        <Typography color="gray" className="mt-1 mb-8 text-center font-normal">
          Nice to meet you! Enter your details to register.
        </Typography>
        <form className="px-4 sm:px-8">
          <div className="mb-4">
            <Typography variant="h6" color="blue-gray" className="mb-1">
              Your Name
            </Typography>
            <Input
              size="lg"
              placeholder="name@mail.com"
              className="border-t-blue-gray-200 focus:border-t-gray-900"
            />
          </div>
          <div className="mb-4">
            <Typography variant="h6" color="blue-gray" className="mb-1">
              Your Email
            </Typography>
            <Input
              size="lg"
              placeholder="name@mail.com"
              className="border-t-blue-gray-200 focus:border-t-gray-900"
            />
          </div>
          <div className="mb-4">
            <Typography variant="h6" color="blue-gray" className="mb-1">
              Password
            </Typography>
            <Input
              type="password"
              size="lg"
              placeholder="********"
              className="border-t-blue-gray-200 focus:border-t-gray-900"
            />
          </div>
          <Checkbox
            label={
              <Typography
                variant="small"
                color="gray"
                className="flex items-center font-normal"
              >
                I agree to the
                <a
                  href="#"
                  className="font-medium ml-1 text-blue-500 hover:underline"
                >
                  Terms and Conditions
                </a>
              </Typography>
            }
          />
          <Button className="mt-6" fullWidth>
            Submit
          </Button>
        </form>
        <Typography color="gray" className="mt-4 text-center font-normal">
          Already have an account?{' '}
          <a href="#" className="font-medium text-gray-900 hover:underline">
            Sign In
          </a>
        </Typography>
      </Card>
    </div>
  );
};

export default LoginForm;
