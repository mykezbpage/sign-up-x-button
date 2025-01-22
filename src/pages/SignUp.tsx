import { X } from "lucide-react";
import { Link } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

const SignUp = () => {
  return (
    <div className="min-h-screen bg-white p-4 max-w-md mx-auto">
      <div className="mb-8">
        <Link to="/" className="inline-block">
          <X className="h-6 w-6 text-gray-800" />
        </Link>
      </div>

      <div className="space-y-8">
        <h1 className="text-2xl font-semibold text-center text-gray-900">
          Sign up by phone number
        </h1>

        <div className="flex justify-center">
          <div className="w-24 h-24 bg-gray-200 rounded-lg flex items-center justify-center">
            <svg
              className="w-8 h-8 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
          </div>
        </div>

        <form className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="name">Name</Label>
            <Input
              id="name"
              placeholder="John Appleseed"
              className="bg-gray-50"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="country">Country/Region</Label>
            <Input
              id="country"
              placeholder="United States (+1)"
              className="bg-gray-50"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="phone">Phone</Label>
            <Input
              id="phone"
              type="tel"
              placeholder="Enter mobile number"
              className="bg-gray-50"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              type="password"
              placeholder="Enter Password"
              className="bg-gray-50"
            />
          </div>

          <div className="flex items-center space-x-2">
            <Checkbox id="terms" />
            <label
              htmlFor="terms"
              className="text-sm text-gray-500 leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              I have read and accept the{" "}
              <Link to="/terms" className="text-blue-600 hover:underline">
                WeChat - Terms of Service
              </Link>
            </label>
          </div>

          <div className="text-sm text-gray-500 text-center">
            The information collected on this page is only used for account
            registration.
          </div>

          <Button className="w-full bg-gray-100 text-gray-400 hover:bg-gray-200">
            Accept and Continue
          </Button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;