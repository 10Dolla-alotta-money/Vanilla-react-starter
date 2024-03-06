import {
  Button,
  Card,
  Checkbox,
  Option,
  Select,
  Typography,
} from '@material-tailwind/react';

const LoginForm = () => {
  return (
    <div className="flex lex-col m-8 items-center justify-center min-h-32">
      <Card className="w-full max-w-screen-lg sm:w-96">
        <Typography variant="h4" color="blue-gray" className="text-center">
          Put Down Information
        </Typography>
        <Typography color="gray" className="mt-1 mb-8 text-center font-normal">
          Nice to meet you! Enter your details to register.
        </Typography>

        <form className="px-4 sm:px-8">
          <div className="mb-4">
            <Select color="blue" label="Select Option">
              <Option>Material Tailwind HTML</Option>
              <Option>Material Tailwind React</Option>
              <Option>Material Tailwind Vue</Option>
            </Select>
          </div>
          <div className="mb-4">
            <Select color="blue" label="Select Option">
              <Option>Material Tailwind HTML</Option>
              <Option>Material Tailwind React</Option>
              <Option>Material Tailwind Vue</Option>
            </Select>
          </div>
          <div className="mb-4">
            <Select color="blue" label="Select Option">
              <Option>Material Tailwind HTML</Option>
              <Option>Material Tailwind React</Option>
              <Option>Material Tailwind Vue</Option>
            </Select>
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
